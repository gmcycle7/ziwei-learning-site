'use client';

const steps = [
  { num: 1, title: '看命宮', desc: '確認命宮位置與主星' },
  { num: 2, title: '看主星', desc: '辨識重要宮位中的星曜' },
  { num: 3, title: '看三方四正', desc: '觀察相關宮位的互動' },
  { num: 4, title: '看四化', desc: '找出化祿、化權、化科、化忌' },
  { num: 5, title: '看重點宮位', desc: '針對問題聚焦特定宮位' },
  { num: 6, title: '整合敘述', desc: '將觀察組合成完整描述' },
  { num: 7, title: '避免過度解讀', desc: '保持客觀，不下絕對結論' },
];

export default function ReadingFlowDiagram() {
  return (
    <div className="w-full max-w-xl mx-auto my-8">
      <div className="relative">
        {steps.map((step, i) => (
          <div key={step.num} className="flex items-start gap-4 mb-2 last:mb-0">
            {/* Step number and connector line */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-primary/20" />
              )}
            </div>

            {/* Content */}
            <div className="pb-2">
              <div className="font-semibold text-sm">{step.title}</div>
              <div className="text-sm text-muted">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
