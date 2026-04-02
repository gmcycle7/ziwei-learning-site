'use client';

const transformations = [
  {
    name: '化祿',
    character: '祿',
    color: '#16a34a',
    bgColor: '#f0fdf4',
    meaning: '增加、順利、收穫',
    metaphor: '春天的雨水',
  },
  {
    name: '化權',
    character: '權',
    color: '#dc2626',
    bgColor: '#fef2f2',
    meaning: '掌控、強化、主導',
    metaphor: '夏天的烈日',
  },
  {
    name: '化科',
    character: '科',
    color: '#2563eb',
    bgColor: '#eff6ff',
    meaning: '名聲、貴人、文雅',
    metaphor: '秋天的清風',
  },
  {
    name: '化忌',
    character: '忌',
    color: '#6b7280',
    bgColor: '#f9fafb',
    meaning: '阻礙、執著、課題',
    metaphor: '冬天的考驗',
  },
];

export default function FourTransformationsDiagram() {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {transformations.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border-2 p-4 text-center transition-transform hover:scale-105"
            style={{ borderColor: t.color, backgroundColor: t.bgColor }}
          >
            <div
              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: t.color }}
            >
              {t.character}
            </div>
            <div className="font-bold text-sm mb-1" style={{ color: t.color }}>
              {t.name}
            </div>
            <div className="text-xs text-muted mb-2">{t.meaning}</div>
            <div className="text-xs italic text-muted/70">「{t.metaphor}」</div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted mt-4">
        四化由天干決定，每一組四化同時影響四顆不同的星曜
      </p>
    </div>
  );
}
