'use client';

export default function StarSystemDiagram() {
  const ziweStars = [
    { name: '紫微', color: '#4a3580' },
    { name: '天機', color: '#5a4a96' },
    { name: '太陽', color: '#6b5ba7' },
    { name: '武曲', color: '#7b6cb8' },
    { name: '天同', color: '#8b7dc8' },
    { name: '廉貞', color: '#9b8ed9' },
  ];

  const tianfuStars = [
    { name: '天府', color: '#8b6914' },
    { name: '太陰', color: '#9b7924' },
    { name: '貪狼', color: '#ab8934' },
    { name: '巨門', color: '#bb9944' },
    { name: '天相', color: '#cba954' },
    { name: '天梁', color: '#dbb964' },
    { name: '七殺', color: '#c49956' },
    { name: '破軍', color: '#b48946' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 紫微系 */}
        <div className="border border-primary/30 rounded-xl p-5 bg-primary/5">
          <h3 className="font-bold text-center mb-4 text-primary-dark">紫微星系</h3>
          <p className="text-xs text-muted text-center mb-4">以紫微星為首，排列順序固定</p>
          <div className="space-y-2">
            {ziweStars.map((star, i) => (
              <div
                key={star.name}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: star.color }}
                >
                  {i + 1}
                </div>
                <span className="font-medium text-sm">{star.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 天府系 */}
        <div className="border border-accent/30 rounded-xl p-5 bg-accent/5">
          <h3 className="font-bold text-center mb-4 text-amber-800">天府星系</h3>
          <p className="text-xs text-muted text-center mb-4">以天府星為首，排列方向相反</p>
          <div className="space-y-2">
            {tianfuStars.map((star, i) => (
              <div
                key={star.name}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: star.color }}
                >
                  {i + 1}
                </div>
                <span className="font-medium text-sm">{star.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-muted">
        <p>十四主星分為兩大系統，紫微系六星與天府系八星</p>
        <p className="mt-1">兩系統在命盤中的排列方向相反，形成互補的結構</p>
      </div>
    </div>
  );
}
