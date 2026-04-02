'use client';

import { Info, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'tip' | 'error';

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<CalloutType, { icon: typeof Info; defaultTitle: string; className: string }> = {
  info: { icon: Info, defaultTitle: '重點', className: 'callout callout-info' },
  warning: { icon: AlertTriangle, defaultTitle: '初學者常犯錯誤', className: 'callout callout-warning' },
  tip: { icon: Lightbulb, defaultTitle: '觀念提醒', className: 'callout callout-tip' },
  error: { icon: AlertCircle, defaultTitle: '注意', className: 'callout callout-error' },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const { icon: Icon, defaultTitle, className } = config[type];
  return (
    <div className={className}>
      <div className="flex items-center gap-2 font-semibold mb-2">
        <Icon className="w-5 h-5 shrink-0" />
        <span>{title || defaultTitle}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
