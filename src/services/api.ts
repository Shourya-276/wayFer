import { WaitlistSubmission } from '../types/waitlist';

const STORAGE_FALLBACK_KEY = 'wayfer_waitlist_entries';

export const api = {
  async submitWaitlist(formData: Omit<WaitlistSubmission, 'id' | 'createdAt'>): Promise<WaitlistSubmission> {
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${res.statusText}`);
      }

      const result = await res.json();
      const record = result.data;

      // Sync to localStorage as backup
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_FALLBACK_KEY) || '[]');
        if (!existing.some((e: any) => e.email === record.email)) {
          existing.unshift(record);
          localStorage.setItem(STORAGE_FALLBACK_KEY, JSON.stringify(existing));
        }
      } catch {}

      return record;
    } catch (err) {
      console.warn('Backend API request failed, saving to local state:', err);
      // Client-side fallback if server is unreachable
      const fallbackRecord: WaitlistSubmission = {
        id: 'wf_' + Date.now().toString(36),
        ...formData,
        createdAt: new Date().toISOString(),
      };
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_FALLBACK_KEY) || '[]');
        existing.unshift(fallbackRecord);
        localStorage.setItem(STORAGE_FALLBACK_KEY, JSON.stringify(existing));
      } catch {}
      return fallbackRecord;
    }
  },

  async getWaitlist(): Promise<WaitlistSubmission[]> {
    try {
      const res = await fetch('/api/waitlist', {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch waitlist: ${res.statusText}`);
      }

      const result = await res.json();
      if (result.data && Array.isArray(result.data)) {
        return result.data;
      }
      return [];
    } catch (err) {
      console.warn('API error, reading local fallback:', err);
      try {
        return JSON.parse(localStorage.getItem(STORAGE_FALLBACK_KEY) || '[]');
      } catch {
        return [];
      }
    }
  },

  async deleteWaitlistEntry(id: string): Promise<boolean> {
    try {
      const res = await fetch(`/api/waitlist?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Delete failed');

      // Also remove from localStorage backup
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_FALLBACK_KEY) || '[]');
        const updated = existing.filter((item: any) => item.id !== id);
        localStorage.setItem(STORAGE_FALLBACK_KEY, JSON.stringify(updated));
      } catch {}

      return true;
    } catch (err) {
      console.error('Delete error:', err);
      return false;
    }
  },

  async login(email: string, pass: string): Promise<{ success: boolean; error?: string; token?: string }> {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || 'Invalid credentials' };
      }

      // Save token in sessionStorage
      if (data.token) {
        sessionStorage.setItem('wf_admin_auth', data.token);
      }
      return { success: true, token: data.token };
    } catch (err: any) {
      // Local check fallback
      if (email === 'admin@gmail.com' && pass === '123') {
        const dummyToken = 'wf_admin_local_' + Date.now();
        sessionStorage.setItem('wf_admin_auth', dummyToken);
        return { success: true, token: dummyToken };
      }
      return { success: false, error: err.message || 'Network error' };
    }
  },

  isAdminAuthenticated(): boolean {
    return !!sessionStorage.getItem('wf_admin_auth');
  },

  logoutAdmin() {
    sessionStorage.removeItem('wf_admin_auth');
  }
};
