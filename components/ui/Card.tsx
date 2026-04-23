import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'strong' | 'feature';
  hover?: boolean;
}

export default function Card({ className, variant = 'glass', hover = false, children, ...props }: CardProps) {
  const variants = {
    glass: 'glass rounded-2xl',
    strong: 'glass-strong rounded-2xl',
    feature: 'feature-card',
  };

  return (
    <div
      className={cn(
        variants[variant],
        hover && 'cursor-pointer hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
