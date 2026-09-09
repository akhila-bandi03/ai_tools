import React from 'react';
import { Plus, Search, Bookmark, ArrowLeftRight, Sparkles, Building2, Briefcase, GraduationCap, Trophy, Layers } from 'lucide-react';

interface HeaderProps {
  onOpenSubmit: () => void;
  onOpenCommand: () => void;
  onOpenBookmarks: () => void;
  onOpenCompare: () => void;
  bookmarkCount: number;
  compareCount: number;
  currentView: string;
  onNavigateView: (view: string) => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSubmit,
  onOpenCommand,
  onOpenBookmarks,
  onOpenCompare,
  bookmarkCount,
  compareCount,
  currentView,
  onNavigateView,
  onNavigateHome,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#202024]/80 bg-black/80 backdrop-blur-xl">
      <div className="wrap flex items-center justify-between h-16 relative">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 group text-left cursor-pointer bg-transparent border-0 p-0"
            title="AI Orbit Home"
          >
            {/* Proper SVG Orbit Logo */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(110,86,207,0.8)] transition-all duration-300">
              <ellipse cx="16" cy="16" rx="14" ry="6" stroke="#6E56CF" strokeWidth="1.3" strokeOpacity="0.6" transform="rotate(-30 16 16)" />
              <ellipse cx="16" cy="16" rx="14" ry="6" stroke="#8B5CF6" strokeWidth="0.9" strokeOpacity="0.35" transform="rotate(50 16 16)" />
              <circle cx="16" cy="16" r="5" fill="url(#hPlanetGrad)" />
              <circle cx="16" cy="16" r="2.5" fill="white" fillOpacity="0.9" />
              <circle cx="27" cy="13" r="1.8" fill="#a78bfa" />
              <defs>
                <radialGradient id="hPlanetGrad" cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#4C3699" />
                </radialGradient>
              </defs>
            </svg>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[17px] tracking-tight text-white group-hover:text-[#e4ddff] transition-colors">
                  AI Orbit
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#6E56CF]/20 text-[#a78bfa] border border-[#6E56CF]/30">
                  ECOSYSTEM
                </span>
              </div>
              <span className="text-[10.5px] text-[#71717a] font-medium hidden sm:inline">
                The AI Signal & Directory
              </span>
            </div>
          </button>
        </div>

        {/* Center Nav Links (matching AI Orbit) */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#a1a1aa]">
          <button
            onClick={() => onNavigateView('listing')}
            className={`transition-colors cursor-pointer bg-transparent border-0 py-1 ${
              currentView === 'listing' ? 'text-white font-semibold' : 'hover:text-white'
            }`}
          >
            AI Tools
          </button>

          <button
            onClick={() => onNavigateView('tasks')}
            className={`transition-colors cursor-pointer bg-transparent border-0 py-1 ${
              currentView === 'tasks' ? 'text-white font-semibold' : 'hover:text-white'
            }`}
          >
            Tasks & Workflows
          </button>

          <button
            onClick={() => onNavigateView('leaderboard')}
            className={`transition-colors cursor-pointer bg-transparent border-0 py-1 flex items-center gap-1 ${
              currentView === 'leaderboard' ? 'text-white font-semibold' : 'text-[#a78bfa] hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Leaderboard</span>
          </button>

          <button
            onClick={() => onNavigateView('business')}
            className={`transition-colors cursor-pointer bg-transparent border-0 py-1 ${
              currentView === 'business' ? 'text-white font-semibold' : 'hover:text-white'
            }`}
          >
            Business AI
          </button>

          <button
            onClick={() => onNavigateView('learn')}
            className={`transition-colors cursor-pointer bg-transparent border-0 py-1 ${
              currentView === 'learn' ? 'text-white font-semibold' : 'hover:text-white'
            }`}
          >
            Learn
          </button>

          <button
            onClick={() => onNavigateView('companies')}
            className={`transition-colors cursor-pointer bg-transparent border-0 py-1 ${
              currentView === 'companies' ? 'text-white font-semibold' : 'hover:text-white'
            }`}
          >
            Companies
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search trigger with Ctrl+K */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#121216] hover:bg-[#18181f] border border-[#232328] hover:border-[#32323a] text-[#8e8e96] hover:text-white text-xs transition-all cursor-pointer"
            title="Search AI Tools (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Quick search</span>
            <kbd className="hidden md:inline text-[10px] bg-[#1d1d24] px-1.5 py-0.5 rounded border border-[#2b2b34] text-[#a1a1aa]">
              ⌘K
            </kbd>
          </button>

          {/* Compare drawer trigger */}
          {compareCount > 0 && (
            <button
              onClick={onOpenCompare}
              className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1e1b30] hover:bg-[#272340] border border-[#6E56CF]/40 text-[#d4c8ff] text-xs font-medium transition-all cursor-pointer animate-pulse"
              title="Compare Selected Tools"
            >
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#a78bfa]" />
              <span className="hidden sm:inline">Compare</span>
              <span className="w-4 h-4 rounded-full bg-[#6E56CF] text-white text-[10px] flex items-center justify-center font-bold">
                {compareCount}
              </span>
            </button>
          )}

          {/* Bookmarks slide-over button */}
          <button
            onClick={onOpenBookmarks}
            className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#121216] hover:bg-[#18181f] border border-[#232328] hover:border-[#32323a] text-[#a1a1aa] hover:text-white transition-all cursor-pointer"
            title="Saved Bookmarks"
          >
            <Bookmark className="w-3.5 h-3.5" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#6E56CF] text-white text-[10px] flex items-center justify-center font-bold">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Submit Tool CTA Button (AI Orbit purple pill) */}
          <button
            onClick={onOpenSubmit}
            className="btn-primary flex items-center gap-1.5 text-xs py-1.5 px-3 sm:px-4"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Submit Tool</span>
          </button>
        </div>
      </div>
    </header>
  );
};
