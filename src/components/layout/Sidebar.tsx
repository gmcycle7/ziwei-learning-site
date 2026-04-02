'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, X } from 'lucide-react';
import { navigation, type NavItem } from '@/lib/navigation';

function NavSection({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const isParentActive = item.children?.some(
    (child) => pathname === child.href
  );
  const [expanded, setExpanded] = useState(isActive || isParentActive || false);

  if (item.children) {
    return (
      <div>
        <div className="flex items-center">
          <Link
            href={item.href}
            className={`flex-1 block px-3 py-2 text-sm rounded-lg transition-colors ${
              isActive
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-foreground/70 hover:text-foreground hover:bg-surface-alt'
            }`}
          >
            {item.title}
          </Link>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 hover:bg-surface-alt rounded transition-colors"
          >
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
        {expanded && (
          <div className="ml-3 mt-1 border-l-2 border-border pl-2 space-y-0.5">
            {item.children.map((child) => (
              <NavSection key={child.href} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
        isActive
          ? 'bg-primary/10 text-primary font-medium'
          : 'text-foreground/70 hover:text-foreground hover:bg-surface-alt'
      }`}
    >
      {item.title}
    </Link>
  );
}

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-surface border-r border-border z-50 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto overflow-y-auto ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-6" onClick={onClose}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">紫</span>
            </div>
            <div>
              <div className="font-bold text-sm">紫微斗數學習</div>
              <div className="text-xs text-muted">系統化入門教程</div>
            </div>
          </Link>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-surface-alt rounded lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation */}
          <nav className="space-y-1">
            {navigation.map((item) => (
              <NavSection key={item.href} item={item} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
