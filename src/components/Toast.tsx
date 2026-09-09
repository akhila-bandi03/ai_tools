import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex items-center gap-3 px-4 py-3 rounded-xl bg-[#171427] border border-[#6E56CF]/60 text-white text-xs font-medium shadow-[0_8px_30px_rgba(110,86,207,0.3)] animate-in fade-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-4 h-4 text-[#a78bfa] shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="p-1 text-[#a1a1aa] hover:text-white cursor-pointer bg-transparent border-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
