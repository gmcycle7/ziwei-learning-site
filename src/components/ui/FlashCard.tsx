'use client';

import { useState } from 'react';
import { RotateCw } from 'lucide-react';

interface FlashCardProps {
  front: string;
  back: string;
}

export default function FlashCard({ front, back }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="relative cursor-pointer border border-border rounded-xl p-6 min-h-[160px] flex items-center justify-center text-center transition-all duration-300 hover:shadow-md select-none"
      style={{
        background: flipped ? 'var(--tip-bg)' : 'var(--surface)',
      }}
    >
      <div className="absolute top-3 right-3">
        <RotateCw className={`w-4 h-4 text-muted transition-transform duration-300 ${flipped ? 'rotate-180' : ''}`} />
      </div>
      {flipped ? (
        <div className="text-sm leading-relaxed">{back}</div>
      ) : (
        <div className="font-semibold text-lg">{front}</div>
      )}
      <div className="absolute bottom-3 text-xs text-muted">
        {flipped ? '點擊翻回正面' : '點擊查看答案'}
      </div>
    </div>
  );
}
