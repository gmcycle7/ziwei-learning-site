'use client';

import Link from 'next/link';

interface PalaceInfo {
  name: string;
  slug: string;
  position: number;
  description: string;
}

const palaces: PalaceInfo[] = [
  { name: '巳', slug: '', position: 0, description: '' },
  { name: '午', slug: '', position: 1, description: '' },
  { name: '未', slug: '', position: 2, description: '' },
  { name: '申', slug: '', position: 3, description: '' },
];

const palaceData: { name: string; slug: string; shortDesc: string; gridPos: string }[] = [
  { name: '命宮', slug: 'ming', shortDesc: '自我與個性', gridPos: 'col-start-1 row-start-1' },
  { name: '父母宮', slug: 'parents', shortDesc: '長輩與教育', gridPos: 'col-start-2 row-start-1' },
  { name: '福德宮', slug: 'fortune', shortDesc: '精神與內在', gridPos: 'col-start-3 row-start-1' },
  { name: '田宅宮', slug: 'property', shortDesc: '家庭與不動產', gridPos: 'col-start-4 row-start-1' },
  { name: '兄弟宮', slug: 'siblings', shortDesc: '手足與同輩', gridPos: 'col-start-1 row-start-2' },
  { name: '官祿宮', slug: 'career', shortDesc: '事業與工作', gridPos: 'col-start-4 row-start-2' },
  { name: '夫妻宮', slug: 'spouse', shortDesc: '感情與婚姻', gridPos: 'col-start-1 row-start-3' },
  { name: '交友宮', slug: 'friends', shortDesc: '人際與部屬', gridPos: 'col-start-4 row-start-3' },
  { name: '子女宮', slug: 'children', shortDesc: '子女與創造', gridPos: 'col-start-1 row-start-4' },
  { name: '財帛宮', slug: 'wealth', shortDesc: '財運與理財', gridPos: 'col-start-2 row-start-4' },
  { name: '疾厄宮', slug: 'health', shortDesc: '健康與身體', gridPos: 'col-start-3 row-start-4' },
  { name: '遷移宮', slug: 'travel', shortDesc: '外出與社交', gridPos: 'col-start-4 row-start-4' },
];

export default function PalaceGrid({ interactive = true }: { interactive?: boolean }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
        {palaceData.map((palace) => {
          const inner = (
            <div
              className={`${palace.gridPos} border border-border rounded-lg p-2 sm:p-3 text-center transition-all duration-200 ${
                interactive
                  ? 'hover:border-primary/50 hover:shadow-md hover:bg-primary/5 cursor-pointer'
                  : ''
              } ${
                palace.slug === 'ming' ? 'bg-primary/5 border-primary/30' : 'bg-surface'
              }`}
            >
              <div className="font-bold text-sm sm:text-base text-primary-dark">{palace.name}</div>
              <div className="text-xs text-muted mt-0.5 hidden sm:block">{palace.shortDesc}</div>
            </div>
          );

          if (interactive) {
            return (
              <Link key={palace.slug} href={`/palaces/${palace.slug}`}>
                {inner}
              </Link>
            );
          }
          return <div key={palace.slug}>{inner}</div>;
        })}

        {/* Center area */}
        <div className="col-start-2 col-end-4 row-start-2 row-end-4 border-2 border-dashed border-primary/20 rounded-lg flex items-center justify-center p-4">
          <div className="text-center">
            <div className="text-lg font-bold text-primary mb-1">命盤中宮</div>
            <div className="text-xs text-muted">十二宮環繞排列</div>
            <div className="text-xs text-muted mt-1">點擊各宮位查看詳情</div>
          </div>
        </div>
      </div>
    </div>
  );
}
