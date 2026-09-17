import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';

export interface WaitlistRecord {
  id: string;
  name: string;
  email: string;
  city: string;
  phone?: string;
  organization?: string;
  userType?: string;
  useCase?: string;
  createdAt: string;
}

// Database Connection Helper
function getSql() {
  const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!dbUrl) return null;
  return neon(dbUrl);
}

// Ensure table exists on first invocation (auto-migration)
let tableEnsured = false;
async function ensureTable(sql: any) {
  if (tableEnsured || !sql) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id TEXT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        organization VARCHAR(255),
        user_type VARCHAR(100),
        use_case TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    tableEnsured = true;
  } catch (err) {
    console.error('Failed to auto-verify waitlist table:', err);
  }
}

// Fallback: In serverless environments without DB, /tmp is writable
const TMP_FILE = path.join('/tmp', 'wayfer_waitlist.json');
const LOCAL_FILE = path.join(process.cwd(), 'data', 'waitlist.json');

function readLocalEntries(): WaitlistRecord[] {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const data = fs.readFileSync(TMP_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading waitlist from /tmp:', err);
  }

  try {
    if (fs.existsSync(LOCAL_FILE)) {
      const initial = JSON.parse(fs.readFileSync(LOCAL_FILE, 'utf-8'));
      try {
        fs.writeFileSync(TMP_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      } catch {}
      return initial;
    }
  } catch (err) {
    console.error('Error reading local seed waitlist:', err);
  }

  return [];
}

function saveLocalEntries(entries: WaitlistRecord[]) {
  try {
    const dir = path.dirname(TMP_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(TMP_FILE, JSON.stringify(entries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving waitlist to /tmp:', err);
  }

  if (!process.env.VERCEL) {
    try {
      const dir = path.dirname(LOCAL_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(LOCAL_FILE, JSON.stringify(entries, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error saving waitlist to local file:', err);
    }
  }
}

export default async function handler(req: any, res: any) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const sql = getSql();
  if (sql) {
    await ensureTable(sql);
  }

  // GET: Retrieve all waitlist entries
  if (req.method === 'GET') {
    try {
      if (sql) {
        const rows = await sql`
          SELECT id, name, email, city, phone, organization, user_type, use_case, created_at
          FROM waitlist
          ORDER BY created_at DESC
        `;
        const data: WaitlistRecord[] = rows.map((r: any) => ({
          id: r.id,
          name: r.name,
          email: r.email,
          city: r.city,
          phone: r.phone || undefined,
          organization: r.organization || undefined,
          userType: r.user_type || undefined,
          useCase: r.use_case || undefined,
          createdAt: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
        }));
        return res.status(200).json({ success: true, count: data.length, data });
      } else {
        const entries = readLocalEntries();
        return res.status(200).json({ success: true, count: entries.length, data: entries });
      }
    } catch (err: any) {
      console.error('Waitlist GET error:', err);
      return res.status(500).json({ success: false, error: err.message || 'Failed to fetch waitlist' });
    }
  }

  // POST: Register new user on waitlist
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { name, email, city, phone, organization, userType, useCase } = body || {};

      if (!name || !email || !city) {
        return res.status(400).json({
          success: false,
          error: 'Name, email, and city are required fields.',
        });
      }

      // Basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid email address.',
        });
      }

      const cleanEmail = email.trim().toLowerCase();
      const cleanName = name.trim();
      const cleanCity = city.trim();
      const cleanPhone = phone?.trim() || null;
      const cleanOrg = organization?.trim() || null;
      const cleanUserType = userType || 'Student';
      const cleanUseCase = useCase || 'College commute';

      if (sql) {
        // Check existing in Neon
        const existing = await sql`
          SELECT id, name, email, city FROM waitlist WHERE LOWER(email) = ${cleanEmail} LIMIT 1
        `;
        if (existing && existing.length > 0) {
          return res.status(200).json({
            success: true,
            message: "You're already on the waitlist!",
            data: existing[0],
          });
        }

        const id = 'wf_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
        await sql`
          INSERT INTO waitlist (id, name, email, city, phone, organization, user_type, use_case, created_at)
          VALUES (
            ${id},
            ${cleanName},
            ${cleanEmail},
            ${cleanCity},
            ${cleanPhone},
            ${cleanOrg},
            ${cleanUserType},
            ${cleanUseCase},
            NOW()
          )
        `;

        const newRecord: WaitlistRecord = {
          id,
          name: cleanName,
          email: cleanEmail,
          city: cleanCity,
          phone: cleanPhone || undefined,
          organization: cleanOrg || undefined,
          userType: cleanUserType,
          useCase: cleanUseCase,
          createdAt: new Date().toISOString(),
        };

        return res.status(201).json({
          success: true,
          message: 'Successfully joined waitlist',
          data: newRecord,
        });
      } else {
        // Fallback to local files
        const entries = readLocalEntries();
        const existing = entries.find((e) => e.email.toLowerCase() === cleanEmail);
        if (existing) {
          return res.status(200).json({
            success: true,
            message: "You're already on the waitlist!",
            data: existing,
          });
        }

        const newRecord: WaitlistRecord = {
          id: 'wf_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
          name: cleanName,
          email: cleanEmail,
          city: cleanCity,
          phone: cleanPhone || undefined,
          organization: cleanOrg || undefined,
          userType: cleanUserType,
          useCase: cleanUseCase,
          createdAt: new Date().toISOString(),
        };

        entries.unshift(newRecord);
        saveLocalEntries(entries);

        return res.status(201).json({
          success: true,
          message: 'Successfully joined waitlist',
          data: newRecord,
        });
      }
    } catch (err: any) {
      console.error('Waitlist POST error:', err);
      return res.status(500).json({ success: false, error: err.message || 'Internal server error' });
    }
  }

  // DELETE: Remove record by ID
  if (req.method === 'DELETE') {
    try {
      const id = req.query?.id || req.body?.id;
      if (!id) {
        return res.status(400).json({ success: false, error: 'Record ID required' });
      }

      if (sql) {
        const deleted = await sql`
          DELETE FROM waitlist WHERE id = ${id} RETURNING id
        `;
        if (!deleted || deleted.length === 0) {
          return res.status(404).json({ success: false, error: 'Record not found' });
        }
        return res.status(200).json({ success: true, message: 'Record deleted' });
      } else {
        let entries = readLocalEntries();
        const initialLength = entries.length;
        entries = entries.filter((e) => e.id !== id);

        if (entries.length === initialLength) {
          return res.status(404).json({ success: false, error: 'Record not found' });
        }

        saveLocalEntries(entries);
        return res.status(200).json({ success: true, message: 'Record deleted', count: entries.length });
      }
    } catch (err: any) {
      console.error('Waitlist DELETE error:', err);
      return res.status(500).json({ success: false, error: err.message || 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
