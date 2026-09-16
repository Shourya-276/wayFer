import fs from 'fs';
import path from 'path';

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

// In serverless environments, /tmp is writable across invocations within container lifetime
const TMP_FILE = path.join('/tmp', 'wayfer_waitlist.json');
const LOCAL_FILE = path.join(process.cwd(), 'data', 'waitlist.json');

function getStoragePath(): string {
  // If local file exists (in dev or build), use it; otherwise /tmp
  if (fs.existsSync(LOCAL_FILE)) {
    return LOCAL_FILE;
  }
  return TMP_FILE;
}

function readEntries(): WaitlistRecord[] {
  try {
    const target = getStoragePath();
    if (fs.existsSync(target)) {
      const data = fs.readFileSync(target, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading waitlist:', err);
  }

  // Fallback if TMP doesn't exist yet
  if (fs.existsSync(LOCAL_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(LOCAL_FILE, 'utf-8'));
    } catch {
      return [];
    }
  }
  return [];
}

function saveEntries(entries: WaitlistRecord[]) {
  try {
    const target = getStoragePath();
    const dir = path.dirname(target);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(target, JSON.stringify(entries, null, 2), 'utf-8');
    
    // Also mirror to /tmp if target was local, or vice versa if possible
    if (target !== TMP_FILE) {
      try {
        fs.writeFileSync(TMP_FILE, JSON.stringify(entries, null, 2), 'utf-8');
      } catch {}
    }
  } catch (err) {
    console.error('Error saving waitlist:', err);
  }
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
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

  if (req.method === 'GET') {
    const entries = readEntries();
    return res.status(200).json({ success: true, count: entries.length, data: entries });
  }

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

      const entries = readEntries();

      // Check if already registered
      const existing = entries.find(
        (e) => e.email.toLowerCase() === email.trim().toLowerCase()
      );

      if (existing) {
        return res.status(200).json({
          success: true,
          message: "You're already on the waitlist!",
          data: existing,
        });
      }

      const newRecord: WaitlistRecord = {
        id: 'wf_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        city: city.trim(),
        phone: phone?.trim() || undefined,
        organization: organization?.trim() || undefined,
        userType: userType || 'Student',
        useCase: useCase || 'College commute',
        createdAt: new Date().toISOString(),
      };

      // Prepend to top so newest shows first in admin
      entries.unshift(newRecord);
      saveEntries(entries);

      return res.status(201).json({
        success: true,
        message: 'Successfully joined waitlist',
        data: newRecord,
      });
    } catch (err: any) {
      console.error('Waitlist POST error:', err);
      return res.status(500).json({ success: false, error: err.message || 'Internal server error' });
    }
  }

  if (req.method === 'DELETE') {
    const id = req.query?.id || req.body?.id;
    if (!id) {
      return res.status(400).json({ success: false, error: 'Record ID required' });
    }

    let entries = readEntries();
    const initialLength = entries.length;
    entries = entries.filter((e) => e.id !== id);

    if (entries.length === initialLength) {
      return res.status(404).json({ success: false, error: 'Record not found' });
    }

    saveEntries(entries);
    return res.status(200).json({ success: true, message: 'Record deleted', count: entries.length });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
