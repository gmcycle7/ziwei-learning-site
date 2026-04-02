'use client';

import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-surface-alt rounded-lg transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xs">紫</span>
            </div>
            <span className="font-bold text-sm">紫微斗數學習</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/glossary"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted hover:text-foreground border border-border rounded-lg hover:bg-surface-alt transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">搜尋詞彙</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
