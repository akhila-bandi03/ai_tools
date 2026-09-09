import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Tool } from '../types/tool';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  tools: Tool[];
  onSelectTool: (slug: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  tools,
  onSelectTool,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase()) ||
          t.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : tools.slice(0, 6);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center pt-20 p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[#26262e] bg-[#111114] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3 border-b border-[#202025] gap-3">
          <Search className="w-4 h-4 text-[#71717a]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type tool name, category, or capability..."
            className="w-full bg-transparent border-0 text-sm text-white placeholder-[#52525b] outline-none"
          />
          <kbd className="text-[10px] bg-[#1d1d24] px-1.5 py-0.5 rounded border border-[#2b2b34] text-[#a1a1aa]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#71717a]">
              No AI tools matching "{query}"
            </div>
          ) : (
            filtered.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  onClose();
                  onSelectTool(tool.slug);
                }}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#1a1a22] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-7 h-7 rounded-lg object-cover bg-[#22222a]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                      {tool.name}
                    </h4>
                    <span className="text-[11px] text-[#71717a]">
                      {tool.category} • {tool.pricingType}
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-[#52525b] group-hover:text-white transition-colors" />
              </div>
            ))
          )}
        </div>

        <div className="px-4 py-2 bg-[#0c0c0f] border-t border-[#1c1c21] flex items-center justify-between text-[11px] text-[#52525b]">
          <span>Quick Finder</span>
          <span>Press Enter to select</span>
        </div>
      </div>
    </div>
  );
};
