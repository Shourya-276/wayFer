export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { email, password } = body || {};

    // Check credentials specified by user: admin@gmail.com / 123
    if (email === 'admin@gmail.com' && password === '123') {
      const token = 'wf_admin_' + Buffer.from('admin@gmail.com:' + Date.now()).toString('base64');
      return res.status(200).json({
        success: true,
        message: 'Authentication successful',
        user: {
          email: 'admin@gmail.com',
          role: 'administrator',
          name: 'WayFer Admin',
        },
        token,
      });
    }

    return res.status(401).json({
      success: false,
      error: 'Invalid email or password. Please verify credentials.',
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
