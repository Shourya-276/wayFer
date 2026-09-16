import React, { useState, useEffect, useMemo } from 'react';
import { Logo } from '../Logo';
import { api } from '../../services/api';
import { WaitlistSubmission } from '../../types/waitlist';
import {
  Users,
  GraduationCap,
  Briefcase,
  MapPin,
  Plane,
  Download,
  RefreshCw,
  Search,
  Trash2,
  Copy,
  Check,
  LogOut,
  ExternalLink,
  PlusCircle,
  AlertCircle,
  Clock,
  Phone,
  Building,
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
  onBackToSite: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, onBackToSite }) => {
  const [entries, setEntries] = useState<WaitlistSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<string>('ALL');
  const [filterUseCase, setFilterUseCase] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const fetchEntries = async () => {
    try {
      const data = await api.getWaitlist();
      setEntries(data);
    } catch (err) {
      console.error('Failed to load entries:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchEntries();
  };

  const handleDelete = async (id: string) => {
    const success = await api.deleteWaitlistEntry(id);
    if (success) {
      setEntries((prev) => prev.filter((item) => item.id !== id));
      setDeleteConfirmId(null);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (!entries.length) return;
    const headers = ['ID', 'Name', 'Email', 'City', 'Phone', 'Organization', 'Role', 'Use Case', 'Joined At'];
    const rows = entries.map((e) => [
      e.id,
      `"${e.name.replace(/"/g, '""')}"`,
      `"${e.email}"`,
      `"${e.city}"`,
      `"${e.phone || ''}"`,
      `"${(e.organization || '').replace(/"/g, '""')}"`,
      `"${e.userType || 'Student'}"`,
      `"${e.useCase || 'College commute'}"`,
      `"${e.createdAt}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `wayfer-waitlist-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Quick demo generator to test live endpoint
  const handleAddTestRecord = async () => {
    setRefreshing(true);
    const names = ['Aarav Patel', 'Pooja Sundaram', 'Rohit Sharma', 'Deepa Nair'];
    const cities = ['Chennai', 'Bengaluru', 'Hyderabad'];
    const orgs = ['SRM IST', 'VIT Vellore', 'Infosys OMR'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomOrg = orgs[Math.floor(Math.random() * orgs.length)];

    await api.submitWaitlist({
      name: randomName,
      email: `${randomName.toLowerCase().replace(/\s+/g, '.')}.${Date.now().toString().slice(-4)}@example.com`,
      city: randomCity,
      phone: '+91 9' + Math.floor(100000000 + Math.random() * 900000000),
      organization: randomOrg,
      userType: 'Student',
      useCase: 'Airport trips',
    });
    fetchEntries();
  };

  // Computed metrics
  const stats = useMemo(() => {
    const total = entries.length;
    const students = entries.filter((e) => e.userType === 'Student').length;
    const professionals = entries.filter((e) => e.userType === 'Working Professional').length;

    // Top city
    const cityCounts: Record<string, number> = {};
    entries.forEach((e) => {
      const c = e.city.trim();
      cityCounts[c] = (cityCounts[c] || 0) + 1;
    });
    const topCity = Object.entries(cityCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Chennai';

    // Top usecase
    const useCaseCounts: Record<string, number> = {};
    entries.forEach((e) => {
      const u = e.useCase || 'College commute';
      useCaseCounts[u] = (useCaseCounts[u] || 0) + 1;
    });
    const topUseCase = Object.entries(useCaseCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Airport trips';

    return { total, students, professionals, topCity, topUseCase };
  }, [entries]);

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        entry.name.toLowerCase().includes(query) ||
        entry.email.toLowerCase().includes(query) ||
        entry.city.toLowerCase().includes(query) ||
        (entry.organization && entry.organization.toLowerCase().includes(query));

      const matchesRole = filterRole === 'ALL' || entry.userType === filterRole;
      const matchesUseCase = filterUseCase === 'ALL' || entry.useCase === filterUseCase;

      return matchesSearch && matchesRole && matchesUseCase;
    });
  }, [entries, searchQuery, filterRole, filterUseCase]);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-green selection:text-dark-950 pb-20">
      
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 bg-dark-900/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <Logo size="sm" />
            <span className="px-2.5 py-0.5 rounded-md bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-[11px] font-bold uppercase tracking-wider">
              Waitlist Console
            </span>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end flex-wrap">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
              title="Refresh Waitlist Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-brand-green' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Download CSV"
            >
              <Download className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onBackToSite}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Site</span>
            </button>

            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        
        {/* Page Title & Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Waitlist Operations Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Live registrations collected via <code className="text-brand-green font-mono">/api/waitlist</code>.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              API Online: Connected
            </span>
            <button
              onClick={handleAddTestRecord}
              className="px-3 py-1 rounded-full bg-brand-green/20 hover:bg-brand-green/30 text-brand-green border border-brand-green/40 text-xs font-mono font-bold flex items-center gap-1 transition-all"
              title="Add a test record to test backend insertion"
            >
              <PlusCircle className="w-3 h-3" />
              + Test Entry
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          
          <div className="p-5 rounded-2xl bg-[#090E19] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Total Waitlist</span>
              <Users className="w-4 h-4 text-brand-green" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">{stats.total}</div>
            <span className="text-[10px] text-brand-green font-medium">All recorded signups</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#090E19] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Students</span>
              <GraduationCap className="w-4 h-4 text-brand-cyan" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-brand-cyan">{stats.students}</div>
            <span className="text-[10px] text-slate-400">
              {stats.total > 0 ? Math.round((stats.students / stats.total) * 100) : 0}% student ratio
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#090E19] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Professionals</span>
              <Briefcase className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">{stats.professionals}</div>
            <span className="text-[10px] text-slate-400">Office commuters</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#090E19] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Top City</span>
              <MapPin className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white truncate">{stats.topCity}</div>
            <span className="text-[10px] text-slate-400">Highest density corridor</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#090E19] border border-white/10 shadow-xl col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Top Demand</span>
              <Plane className="w-4 h-4 text-brand-green" />
            </div>
            <div className="text-base sm:text-lg font-black text-brand-green truncate">{stats.topUseCase}</div>
            <span className="text-[10px] text-slate-400">Primary trip use case</span>
          </div>

        </div>

        {/* Search, Filter & Quick Tools */}
        <div className="p-4 rounded-2xl bg-[#080D18] border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, email, city, college..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-brand-green text-xs text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap sm:flex-nowrap">
            
            {/* Role Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 w-full sm:w-auto">
              <span className="font-mono text-[10px] uppercase">Role:</span>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-dark-850 border border-white/10 text-xs text-slate-200 outline-none focus:border-brand-green"
              >
                <option value="ALL">All Roles</option>
                <option value="Student">Student</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Use Case Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 w-full sm:w-auto">
              <span className="font-mono text-[10px] uppercase">Use Case:</span>
              <select
                value={filterUseCase}
                onChange={(e) => setFilterUseCase(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-dark-850 border border-white/10 text-xs text-slate-200 outline-none focus:border-brand-green"
              >
                <option value="ALL">All Use Cases</option>
                <option value="Airport trips">Airport trips</option>
                <option value="College commute">College commute</option>
                <option value="Daily commute">Daily commute</option>
                <option value="Intercity travel">Intercity travel</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>

        </div>

        {/* Data Table */}
        <div className="rounded-2xl bg-[#080D18] border border-white/10 shadow-2xl overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <th className="py-3.5 px-4 font-semibold">User</th>
                  <th className="py-3.5 px-4 font-semibold">Location</th>
                  <th className="py-3.5 px-4 font-semibold">Phone</th>
                  <th className="py-3.5 px-4 font-semibold">College / Organization</th>
                  <th className="py-3.5 px-4 font-semibold">Role</th>
                  <th className="py-3.5 px-4 font-semibold">Use Case</th>
                  <th className="py-3.5 px-4 font-semibold">Joined</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-slate-400">
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <RefreshCw className="w-4 h-4 animate-spin text-brand-green" />
                        <span>Loading waitlist entries from backend...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-slate-400">
                      <div className="space-y-1">
                        <AlertCircle className="w-5 h-5 mx-auto text-slate-500 mb-2" />
                        <div className="text-sm font-semibold text-white">No waitlist entries found</div>
                        <p className="text-xs text-slate-500">
                          {searchQuery || filterRole !== 'ALL' || filterUseCase !== 'ALL'
                            ? 'Try adjusting your search query or filters.'
                            : 'Sign up through the website waitlist form to see your submission appear here!'}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map((entry) => (
                    <tr
                      key={entry.id}
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      {/* Name & Email */}
                      <td className="py-3 px-4">
                        <div className="font-bold text-white text-xs">{entry.name}</div>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                          <span className="truncate max-w-[170px]">{entry.email}</span>
                          <button
                            onClick={() => copyToClipboard(entry.email, entry.id + '_email')}
                            className="text-slate-500 hover:text-brand-green p-0.5"
                            title="Copy email"
                          >
                            {copiedId === entry.id + '_email' ? (
                              <Check className="w-3 h-3 text-brand-green" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* City */}
                      <td className="py-3 px-4 text-slate-300">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-brand-green shrink-0" />
                          <span>{entry.city}</span>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">
                        {entry.phone ? (
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-slate-500" />
                            <span>{entry.phone}</span>
                          </div>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>

                      {/* College / Organization */}
                      <td className="py-3 px-4 text-slate-300 max-w-[180px] truncate">
                        {entry.organization ? (
                          <div className="flex items-center gap-1" title={entry.organization}>
                            <Building className="w-3 h-3 text-slate-500 shrink-0" />
                            <span className="truncate">{entry.organization}</span>
                          </div>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>

                      {/* Role Badge */}
                      <td className="py-3 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                            entry.userType === 'Student'
                              ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                              : entry.userType === 'Working Professional'
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-white/10 text-slate-300 border border-white/10'
                          }`}
                        >
                          {entry.userType || 'Student'}
                        </span>
                      </td>

                      {/* Use Case Badge */}
                      <td className="py-3 px-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono">
                          {entry.useCase || 'College commute'}
                        </span>
                      </td>

                      {/* Joined Date */}
                      <td className="py-3 px-4 text-slate-400 font-mono text-[10px] whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-600" />
                          <span>
                            {new Date(entry.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        {deleteConfirmId === entry.id ? (
                          <div className="flex items-center justify-end gap-1.5">
                            <span className="text-[10px] text-red-400 font-bold">Confirm?</span>
                            <button
                              onClick={() => handleDelete(entry.id)}
                              className="px-2 py-0.5 rounded bg-red-500 text-white text-[10px] font-bold hover:bg-red-600"
                            >
                              Yes
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] hover:bg-white/20"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirmId(entry.id)}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors"
                            title="Delete entry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>
              Showing <strong className="text-white">{filteredEntries.length}</strong> of{' '}
              <strong className="text-white">{entries.length}</strong> entries
            </span>
            <span className="text-[10px]">
              🔒 Data displayed exclusively in Admin Console
            </span>
          </div>

        </div>

      </main>

    </div>
  );
};
