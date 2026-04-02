'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LessonNav from '@/components/ui/LessonNav';
import { glossaryData, searchGlossary, type GlossaryEntry } from '@/lib/glossary';

const categories = ['全部', '基礎', '宮位', '主星', '輔星', '四化', '關係', '解盤'] as const;
type CategoryFilter = (typeof categories)[number];

const categoryColors: Record<GlossaryEntry['category'], string> = {
  基礎: 'bg-blue-100 text-blue-800',
  宮位: 'bg-purple-100 text-purple-800',
  主星: 'bg-amber-100 text-amber-800',
  輔星: 'bg-teal-100 text-teal-800',
  四化: 'bg-rose-100 text-rose-800',
  關係: 'bg-green-100 text-green-800',
  解盤: 'bg-indigo-100 text-indigo-800',
};

export default function GlossaryPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('全部');

  const filteredEntries = useMemo(() => {
    let results: GlossaryEntry[];

    if (query.trim()) {
      results = searchGlossary(query.trim());
    } else {
      results = glossaryData;
    }

    if (activeCategory !== '全部') {
      results = results.filter((entry) => entry.category === activeCategory);
    }

    return results;
  }, [query, activeCategory]);

  return (
    <div className="prose">
      <Breadcrumb items={[{ label: '詞彙表' }]} />

      <h1 className="text-3xl font-bold text-primary-dark mb-2">詞彙表</h1>
      <p className="text-muted mb-8 text-base">
        紫微斗數常用術語速查。可透過關鍵字搜尋或分類篩選，快速找到你需要的名詞解釋。
      </p>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="輸入關鍵字搜尋（中文、拼音皆可）..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              activeCategory === cat
                ? 'bg-primary text-white border-primary'
                : 'bg-surface border-border text-muted hover:border-primary/30 hover:text-foreground'
            }`}
          >
            {cat}
            {cat !== '全部' && (
              <span className="ml-1 opacity-70">
                ({glossaryData.filter((e) => e.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted mb-4">
        共 {filteredEntries.length} 筆結果
        {query.trim() && <span>（搜尋：「{query.trim()}」）</span>}
      </p>

      {/* Glossary Cards */}
      {filteredEntries.length > 0 ? (
        <div className="grid gap-3">
          {filteredEntries.map((entry) => (
            <div
              key={entry.term}
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-foreground !mt-0 !mb-0">
                    {entry.term}
                  </h3>
                  {entry.pinyin && (
                    <span className="text-xs text-muted font-mono">{entry.pinyin}</span>
                  )}
                </div>
                <span
                  className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[entry.category]}`}
                >
                  {entry.category}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed !mb-0">{entry.definition}</p>
              {entry.related && entry.related.length > 0 && (
                <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                  <span>相關：</span>
                  {entry.related.map((r) => (
                    <span
                      key={r}
                      className="px-2 py-0.5 bg-surface-alt rounded text-foreground"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted">
          <p className="text-lg mb-2">找不到符合的結果</p>
          <p className="text-sm">
            試試其他關鍵字，或切換分類篩選條件。
          </p>
        </div>
      )}

      <LessonNav currentPath="/glossary" />
    </div>
  );
}
