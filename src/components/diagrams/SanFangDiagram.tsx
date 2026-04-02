'use client';

export default function SanFangDiagram() {
  return (
    <div className="w-full max-w-lg mx-auto my-8">
      <svg viewBox="0 0 400 400" className="w-full" aria-label="三方四正關係圖">
        {/* Background */}
        <rect width="400" height="400" fill="none" />

        {/* Triangle for 三方 */}
        <polygon
          points="200,60 60,340 340,340"
          fill="rgba(74, 53, 128, 0.05)"
          stroke="rgba(74, 53, 128, 0.3)"
          strokeWidth="2"
          strokeDasharray="8,4"
        />

        {/* Line for 對宮 */}
        <line
          x1="200" y1="60" x2="200" y2="340"
          stroke="rgba(196, 149, 106, 0.5)"
          strokeWidth="2"
          strokeDasharray="6,3"
        />

        {/* Node: 本宮 (top) */}
        <circle cx="200" cy="60" r="35" fill="#4a3580" />
        <text x="200" y="56" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">本宮</text>
        <text x="200" y="72" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">（起點）</text>

        {/* Node: 三方左 */}
        <circle cx="60" cy="340" r="35" fill="#6b5ba7" />
        <text x="60" y="336" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">三方</text>
        <text x="60" y="352" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">（隔四位）</text>

        {/* Node: 三方右 */}
        <circle cx="340" cy="340" r="35" fill="#6b5ba7" />
        <text x="340" y="336" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">三方</text>
        <text x="340" y="352" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">（隔四位）</text>

        {/* Node: 對宮 (bottom center) */}
        <circle cx="200" cy="340" r="35" fill="#c4956a" />
        <text x="200" y="336" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">對宮</text>
        <text x="200" y="352" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">（正對面）</text>

        {/* Labels */}
        <text x="200" y="210" textAnchor="middle" fill="#4a3580" fontSize="14" fontWeight="bold">三方四正</text>
        <text x="200" y="230" textAnchor="middle" fill="#6b7280" fontSize="11">本宮 + 三方 + 對宮</text>
      </svg>
    </div>
  );
}
