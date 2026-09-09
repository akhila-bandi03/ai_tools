import React from 'react';
import { Search, X, LayoutGrid, List, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../data/mockTools';

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedPricing: string;
  onPricingChange: (pricing: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPricing,
  onPricingChange,
  selectedSort,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalResults,
}) => {
  const pricingOptions = ['All', 'Free', 'Freemium', 'Paid', 'Open Source'];
  const sortOptions = ['Trending', 'Highest Rated', 'Most Bookmarked', 'Recently Added'];

  return (
    <div className="space-y-4 pt-2 pb-6">
      {/* Search and Main Filters Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input Box */}
        <div className="relative flex-1 max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#71717a]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search AI tools by name, features, tags (e.g. Cursor, voice, reasoning)..."
            className="field pl-10 pr-10 py-2.5 text-sm"
          />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#71717a] hover:text-white cursor-pointer bg-transparent border-0"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Right side controls: Pricing, Sort, and Grid/List toggle */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5 flex-wrap">
          {/* Pricing Filter Dropdown */}
          <div className="relative">
            <select
              value={selectedPricing}
              onChange={(e) => onPricingChange(e.target.value)}
              className="appearance-none field text-[#d4d4d8] text-xs font-medium rounded-lg px-3 py-2 pr-7 cursor-pointer"
            >
              <option value="All">All Pricing</option>
              {pricingOptions.slice(1).map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#71717a] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none field text-[#d4d4d8] text-xs font-medium rounded-lg px-3 py-2 pr-7 cursor-pointer"
            >
              {sortOptions.map((s) => (
                <option key={s} value={s}>
                  Sort: {s}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#71717a] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* View Mode Toggle: Grid View vs List View */}
          <div className="flex items-center bg-[#0d0d11] border border-[#1e1e24] rounded-lg p-0.5">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-1.5 rounded-md text-xs transition-all cursor-pointer border-0 ${
                viewMode === 'grid'
                  ? 'bg-[#6E56CF]/25 text-[#c4b5fd] shadow-sm'
                  : 'bg-transparent text-[#71717a] hover:text-white'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-1.5 rounded-md text-xs transition-all cursor-pointer border-0 ${
                viewMode === 'list'
                  ? 'bg-[#6E56CF]/25 text-[#c4b5fd] shadow-sm'
                  : 'bg-transparent text-[#71717a] hover:text-white'
              }`}
              title="List View"
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Horizontal Scrollable Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory.toLowerCase() === category.toLowerCase();
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`pill cursor-pointer border transition-all ${
                isActive ? 'active font-semibold' : ''
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Active Results Summary strip */}
      <div className="flex items-center justify-between text-xs text-[#71717a] pt-1">
        <span>
          Showing <strong className="text-white font-semibold">{totalResults}</strong> verified tools
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {selectedPricing !== 'All' && ` • ${selectedPricing}`}
        </span>
        {(search || selectedCategory !== 'All' || selectedPricing !== 'All') && (
          <button
            onClick={() => {
              onSearchChange('');
              onCategoryChange('All');
              onPricingChange('All');
            }}
            className="text-[#a78bfa] hover:text-white transition-colors cursor-pointer bg-transparent border-0 font-medium"
          >
            Reset all filters
          </button>
        )}
      </div>
    </div>
  );
};
