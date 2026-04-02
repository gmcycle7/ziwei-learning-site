import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPrevNext } from '@/lib/navigation';

interface LessonNavProps {
  currentPath: string;
}

export default function LessonNav({ currentPath }: LessonNavProps) {
  const { prev, next } = getPrevNext(currentPath);

  return (
    <div className="flex justify-between items-stretch gap-4 mt-12 pt-8 border-t border-border">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary/30 hover:bg-surface transition-all group flex-1"
        >
          <ChevronLeft className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
          <div>
            <div className="text-xs text-muted">上一課</div>
            <div className="text-sm font-medium group-hover:text-primary transition-colors">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center justify-end gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary/30 hover:bg-surface transition-all group flex-1 text-right"
        >
          <div>
            <div className="text-xs text-muted">下一課</div>
            <div className="text-sm font-medium group-hover:text-primary transition-colors">{next.title}</div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
