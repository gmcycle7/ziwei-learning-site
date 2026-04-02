'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto w-full">
          {children}
        </main>
        <footer className="border-t border-border px-4 py-6 text-center text-sm text-muted">
          <p>紫微斗數學習平台 — 結構化的入門學習資源</p>
          <p className="mt-1">本站內容僅供學習參考，不作為命理諮詢依據</p>
        </footer>
      </div>
    </div>
  );
}
