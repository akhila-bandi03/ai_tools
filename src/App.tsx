import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ToolCard } from './components/ToolCard';
import { ToolDetail } from './components/ToolDetail';
import { TasksView } from './components/TasksView';
import { LeaderboardView } from './components/LeaderboardView';
import { BusinessView } from './components/BusinessView';
import { LearnView } from './components/LearnView';
import { CompaniesView } from './components/CompaniesView';
import { SubmitModal } from './components/SubmitModal';
import { CompareDrawer } from './components/CompareDrawer';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Tool, EcosystemStats } from './types/tool';
import { fetchTools, fetchStats, submitTool, submitReview, toggleBookmark } from './services/api';
import { Sparkles, Search } from 'lucide-react';

export type AppView = 'listing' | 'detail' | 'tasks' | 'leaderboard' | 'business' | 'learn' | 'companies';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('listing');
  const [selectedToolSlug, setSelectedToolSlug] = useState<string | null>(null);
  const [tools, setTools] = useState<Tool[]>([]);
  const [stats, setStats] = useState<EcosystemStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('All');
  const [pricing, setPricing] = useState<string>('All');
  const [sort, setSort] = useState<string>('Trending');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isSubmitOpen, setIsSubmitOpen] = useState<boolean>(false);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>(() => {
    try { const s = localStorage.getItem('aiorbit_bookmarks'); return s ? JSON.parse(s) : ['cursor', 'chatgpt']; }
    catch { return ['cursor', 'chatgpt']; }
  });
  const [comparedTools, setComparedTools] = useState<Tool[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [s, t] = await Promise.all([fetchStats(), fetchTools({ search, category, pricing, sort })]);
      setStats(s); setTools(t);
    } catch (e) { console.error(e); } finally { setIsLoading(false); }
  };

  useEffect(() => { loadData(); }, [category, pricing, sort]);
  useEffect(() => {
    const timer = setTimeout(async () => { const r = await fetchTools({ search, category, pricing, sort }); setTools(r); }, 200);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => { try { localStorage.setItem('aiorbit_bookmarks', JSON.stringify(bookmarkedSlugs)); } catch {} }, [bookmarkedSlugs]);

  // URL Hash router
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h.startsWith('#/tools/')) {
        const slug = h.replace('#/tools/', '');
        if (slug) { setSelectedToolSlug(slug); setCurrentView('detail'); }
      } else if (h === '#tasks' || h === '#/tasks') {
        setCurrentView('tasks'); setSelectedToolSlug(null);
      } else if (h === '#leaderboard' || h === '#/leaderboard') {
        setCurrentView('leaderboard'); setSelectedToolSlug(null);
      } else if (h === '#business' || h === '#/business') {
        setCurrentView('business'); setSelectedToolSlug(null);
      } else if (h === '#learn' || h === '#/learn') {
        setCurrentView('learn'); setSelectedToolSlug(null);
      } else if (h === '#companies' || h === '#/companies') {
        setCurrentView('companies'); setSelectedToolSlug(null);
      } else {
        setCurrentView('listing'); setSelectedToolSlug(null);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToView = (view: AppView) => {
    setCurrentView(view);
    if (view === 'listing') window.location.hash = '';
    else window.location.hash = `#/${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTool = (slug: string) => {
    setSelectedToolSlug(slug);
    setCurrentView('detail');
    window.location.hash = '#/tools/' + slug;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentView('listing');
    setSelectedToolSlug(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleToggleBookmark = async (e?: React.MouseEvent, slug?: string) => {
    if (e) e.stopPropagation();
    const s = slug || selectedToolSlug; if (!s) return;
    const was = bookmarkedSlugs.includes(s);
    setBookmarkedSlugs(was ? bookmarkedSlugs.filter(x => x !== s) : [...bookmarkedSlugs, s]);
    showToast(was ? 'Removed from saved tools' : 'Saved to bookmarks ✓');
    await toggleBookmark(s, !was);
  };

  const handleToggleCompare = (e: React.MouseEvent, tool: Tool) => {
    e.stopPropagation();
    const exists = comparedTools.some(t => t.slug === tool.slug);
    if (exists) { setComparedTools(comparedTools.filter(t => t.slug !== tool.slug)); showToast('Removed from compare'); }
    else { if (comparedTools.length >= 3) { showToast('Max 3 tools can be compared'); return; } setComparedTools([...comparedTools, tool]); showToast('Added to compare ✓'); }
  };

  const handleToolSubmit = async (d: any) => { const t = await submitTool(d); setTools([t, ...tools]); handleSelectTool(t.slug); };
  const handleReviewSubmit = async (d: any) => {
    if (!selectedToolSlug) return;
    const res = await submitReview(selectedToolSlug, d);
    setTools(prev => prev.map(t => t.slug === selectedToolSlug ? { ...t, rating: res.updatedRating, reviewCount: res.reviewCount, reviews: [res.review, ...(t.reviews || [])] } : t));
  };

  const bookmarkedTools = useMemo(() => tools.filter(t => bookmarkedSlugs.includes(t.slug)), [tools, bookmarkedSlugs]);
  const currentTool = useMemo(() => tools.find(t => t.slug.toLowerCase() === selectedToolSlug?.toLowerCase()) || null, [tools, selectedToolSlug]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000' }}>
      {/* Ambient top glow */}
      <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '320px', background: 'radial-gradient(ellipse at 50% 0%,rgba(110,86,207,0.1) 0%,transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <Header
        onOpenSubmit={() => setIsSubmitOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        bookmarkCount={bookmarkedSlugs.length}
        compareCount={comparedTools.length}
        currentView={currentView}
        onNavigateView={navigateToView as any}
        onNavigateHome={handleBack}
      />

      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {currentView === 'listing' && (
          <div className="wrap" style={{ paddingTop: '60px', paddingBottom: '100px' }}>

            {/* ── Hero ── */}
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(110,86,207,0.1)', border: '1px solid rgba(110,86,207,0.22)', borderRadius: '99px', padding: '5px 16px', marginBottom: '24px' }}>
                <Sparkles size={12} color="#a78bfa" />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.05em' }}>The Definitive AI Ecosystem Directory</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2rem,5vw,3.25rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, color: '#fff', marginBottom: '20px' }}>
                Discover the Tools<br />
                <span style={{ background: 'linear-gradient(125deg,#c4b5fd 0%,#8B73E6 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Shaping the Future of AI
                </span>
              </h1>

              <p style={{ fontSize: '1.0625rem', color: '#71717a', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 36px' }}>
                Explore, compare, and benchmark the world's best AI tools, agents, and developer workflows — all in one place.
              </p>

              {stats && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', maxWidth: '520px', margin: '0 auto' }}>
                  {[
                    { num: stats.totalTools.toLocaleString() + '+', lbl: 'AI Tools' },
                    { num: stats.totalCategories.toString(), lbl: 'Categories' },
                    { num: stats.verifiedTools.toLocaleString() + '+', lbl: 'Verified' },
                    { num: stats.monthlyUsers, lbl: 'Monthly Users' },
                  ].map(s => (
                    <div key={s.lbl} className="stat-card">
                      <span className="stat-num">{s.num}</span>
                      <span className="stat-label">{s.lbl}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Filters ── */}
            <FilterBar
              search={search} onSearchChange={setSearch}
              selectedCategory={category} onCategoryChange={setCategory}
              selectedPricing={pricing} onPricingChange={setPricing}
              selectedSort={sort} onSortChange={setSort}
              viewMode={viewMode} onViewModeChange={setViewMode}
              totalResults={tools.length}
            />

            {/* ── Content ── */}
            <div style={{ marginTop: '24px' }}>
              {isLoading ? (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'flex flex-col gap-3'}>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="skeleton" style={{ height: viewMode === 'grid' ? '210px' : '68px' }} />
                  ))}
                </div>
              ) : tools.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '72px 24px', border: '1px solid var(--border)', borderRadius: '16px', background: 'var(--bg-card)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(110,86,207,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                    <Search size={18} color="#a78bfa" />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>No tools found</h3>
                  <p style={{ fontSize: '0.875rem', color: '#71717a', marginBottom: '20px' }}>Try adjusting your search or filters.</p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button className="btn-secondary" onClick={() => { setSearch(''); setCategory('All'); setPricing('All'); }}>Reset Filters</button>
                    <button className="btn-primary" onClick={() => setIsSubmitOpen(true)}>Submit a Tool</button>
                  </div>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'flex flex-col gap-3'}>
                  {tools.map(tool => (
                    <ToolCard
                      key={tool.id} tool={tool} viewMode={viewMode}
                      onSelect={handleSelectTool}
                      isBookmarked={bookmarkedSlugs.includes(tool.slug)} onToggleBookmark={handleToggleBookmark}
                      isCompared={comparedTools.some(t => t.slug === tool.slug)} onToggleCompare={handleToggleCompare}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {currentView === 'detail' && (
          currentTool ? (
            <ToolDetail
              tool={currentTool} onBack={handleBack}
              isBookmarked={bookmarkedSlugs.includes(currentTool.slug)}
              onToggleBookmark={() => handleToggleBookmark(undefined, currentTool.slug)}
              onSelectAlternative={handleSelectTool}
              onSubmitReview={handleReviewSubmit} onShowToast={showToast}
            />
          ) : (
            <div className="wrap" style={{ paddingTop: '100px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '10px' }}>Tool not found</h2>
              <p style={{ color: '#71717a', marginBottom: '24px', fontSize: '0.9375rem' }}>This tool doesn't exist or was removed.</p>
              <button className="btn-primary" onClick={handleBack}>Back to Directory</button>
            </div>
          )
        )}

        {currentView === 'tasks' && <TasksView onSelectTool={handleSelectTool} />}
        {currentView === 'leaderboard' && <LeaderboardView onSelectTool={handleSelectTool} />}
        {currentView === 'business' && <BusinessView onSelectTool={handleSelectTool} />}
        {currentView === 'learn' && <LearnView />}
        {currentView === 'companies' && <CompaniesView onSelectTool={handleSelectTool} />}
      </main>

      <Footer
        onCategorySelect={cat => { setCategory(cat); navigateToView('listing'); }}
        onNavigateHome={handleBack}
      />

      <SubmitModal isOpen={isSubmitOpen} onClose={() => setIsSubmitOpen(false)} onSubmit={handleToolSubmit} onShowToast={showToast} />
      <CompareDrawer isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} tools={comparedTools} onRemoveTool={s => setComparedTools(comparedTools.filter(t => t.slug !== s))} onSelectTool={handleSelectTool} />
      <BookmarksDrawer isOpen={isBookmarksOpen} onClose={() => setIsBookmarksOpen(false)} bookmarkedTools={bookmarkedTools} onRemoveBookmark={s => handleToggleBookmark(undefined, s)} onSelectTool={handleSelectTool} />
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} tools={tools} onSelectTool={handleSelectTool} />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};
