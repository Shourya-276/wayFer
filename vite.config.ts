import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Vite dev server middleware to run Vercel /api endpoints locally
function vercelApiDevPlugin(): Plugin {
  return {
    name: 'vite-vercel-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        const url = new URL(req.url, `http://${req.headers.host}`);
        const pathname = url.pathname;

        // Collect body for POST / DELETE
        let bodyBuffer = '';
        req.on('data', (chunk) => {
          bodyBuffer += chunk;
        });

        req.on('end', async () => {
          let parsedBody = {};
          if (bodyBuffer) {
            try {
              parsedBody = JSON.parse(bodyBuffer);
            } catch {
              parsedBody = bodyBuffer;
            }
          }

          // Mock req / res compatible with Vercel handler
          const customReq: any = {
            method: req.method,
            url: req.url,
            headers: req.headers,
            query: Object.fromEntries(url.searchParams.entries()),
            body: parsedBody,
          };

          const customRes: any = {
            statusCode: 200,
            headers: {},
            setHeader(key: string, value: string) {
              res.setHeader(key, value);
              this.headers[key] = value;
              return this;
            },
            status(code: number) {
              res.statusCode = code;
              this.statusCode = code;
              return this;
            },
            json(data: any) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
              return this;
            },
            end(data?: any) {
              res.end(data);
              return this;
            },
          };

          try {
            if (pathname === '/api/login') {
              const { email, password } = parsedBody as any;
              if (email === 'admin@gmail.com' && password === '123') {
                return customRes.status(200).json({
                  success: true,
                  message: 'Authentication successful',
                  user: {
                    email: 'admin@gmail.com',
                    role: 'administrator',
                    name: 'WayFer Admin',
                  },
                  token: 'wf_admin_' + Buffer.from('admin@gmail.com:' + Date.now()).toString('base64'),
                });
              } else {
                return customRes.status(401).json({
                  success: false,
                  error: 'Invalid credentials. Use admin@gmail.com / 123',
                });
              }
            }

            if (pathname === '/api/waitlist') {
              const dataFilePath = path.join(process.cwd(), 'data', 'waitlist.json');
              const readData = () => {
                if (!fs.existsSync(dataFilePath)) return [];
                return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
              };
              const writeData = (data: any) => {
                const dir = path.dirname(dataFilePath);
                if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
              };

              if (req.method === 'GET') {
                const list = readData();
                return customRes.status(200).json({ success: true, count: list.length, data: list });
              }

              if (req.method === 'POST') {
                const { name, email, city, phone, organization, userType, useCase } = parsedBody as any;
                if (!name || !email || !city) {
                  return customRes.status(400).json({ success: false, error: 'Name, email, and city are required' });
                }

                const list = readData();
                const existing = list.find((item: any) => item.email.toLowerCase() === email.trim().toLowerCase());
                if (existing) {
                  return customRes.status(200).json({ success: true, message: "You're already on the waitlist!", data: existing });
                }

                const newRecord = {
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

                list.unshift(newRecord);
                writeData(list);
                return customRes.status(201).json({ success: true, message: 'Joined waitlist successfully', data: newRecord });
              }

              if (req.method === 'DELETE') {
                const id = customReq.query?.id || (parsedBody as any)?.id;
                let list = readData();
                list = list.filter((item: any) => item.id !== id);
                writeData(list);
                return customRes.status(200).json({ success: true, message: 'Deleted record', count: list.length });
              }
            }

            // Route not handled
            customRes.status(404).json({ error: 'Endpoint not found' });
          } catch (err: any) {
            console.error('Dev API error:', err);
            customRes.status(500).json({ error: err.message });
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiDevPlugin()],
  server: {
    port: 5173,
    host: true,
  },
});
