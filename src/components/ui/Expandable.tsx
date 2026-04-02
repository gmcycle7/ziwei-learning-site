'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Expandable({ title, children, defaultOpen = false }: ExpandableProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-lg mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-surface-alt hover:bg-surface transition-colors text-left"
      >
        <span className="font-medium text-sm">{title}</span>
        <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 py-3 text-sm leading-relaxed border-t border-border">
          {children}
        </div>
      )}
    </div>
  );
}
