import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Tool } from '../types/tool';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedTools: Tool[];
  onRemoveBookmark: (slug: string) => void;
  onSelectTool: (slug: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedTools,
  onRemoveBookmark,
  onSelectTool,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex justify-end bg-black/75 backdrop-blur-sm">
      <div
        className="w-full max-w-md h-full bg-[#111114] border-l border-[#232328] p-6 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between border-b border-[#202025] pb-4 mb-5">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-[#6E56CF] fill-current" />
              <h3 className="text-base font-bold text-white">Saved AI Tools</h3>
              <span className="text-xs text-[#71717a]">({bookmarkedTools.length})</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#71717a] hover:text-white hover:bg-[#1f1f26] transition-colors cursor-pointer bg-transparent border-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {bookmarkedTools.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Bookmark className="w-10 h-10 text-[#30303a] mx-auto" />
              <p className="text-sm text-[#71717a]">You haven't bookmarked any tools yet.</p>
              <p className="text-xs text-[#52525b]">Click the bookmark icon on any tool card to save it for quick access.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {bookmarkedTools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-3.5 rounded-xl bg-[#17171d] border border-[#26262e] hover:border-[#383842] flex items-center justify-between gap-3 group transition-all"
                >
                  <div
                    onClick={() => {
                      onClose();
                      onSelectTool(tool.slug);
                    }}
                    className="flex items-center gap-3 cursor-pointer min-w-0 flex-1"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-9 h-9 rounded-lg object-cover bg-[#22222a] shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white group-hover:text-[#a78bfa] transition-colors truncate">
                        {tool.name}
                      </h4>
                      <span className="text-[11px] text-[#71717a] truncate block">
                        {tool.category} • {tool.startingPrice}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => onRemoveBookmark(tool.slug)}
                      className="p-1.5 rounded-lg text-[#71717a] hover:text-red-400 hover:bg-[#251f22] transition-colors cursor-pointer bg-transparent border-0"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectTool(tool.slug);
                      }}
                      className="p-1.5 rounded-lg text-[#a78bfa] hover:text-white transition-colors cursor-pointer bg-transparent border-0"
                      title="Open details"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {bookmarkedTools.length > 0 && (
          <div className="pt-4 border-t border-[#202025]">
            <p className="text-[11px] text-[#71717a] text-center">
              Bookmarks are saved locally in your browser session.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
