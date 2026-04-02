import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, href, icon, className = '' }: CardProps) {
  const content = (
    <div className={`bg-surface border border-border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:border-primary/30 ${className}`}>
      {icon && <div className="text-primary mb-3">{icon}</div>}
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
