import { cn } from '@/lib/utils';

type BadgeVariant = 'eligible' | 'ineligible' | 'pending' | 'true' | 'false' | 'misleading' | 'unverifiable';

const variants: Record<BadgeVariant, string> = {
  eligible: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
  ineligible: 'bg-red-500/15 border-red-500/30 text-red-400',
  pending: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
  true: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
  false: 'bg-red-500/15 border-red-500/30 text-red-400',
  misleading: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
  unverifiable: 'bg-slate-500/15 border-slate-500/30 text-slate-400',
};

const icons: Record<BadgeVariant, string> = {
  eligible: '✅',
  ineligible: '❌',
  pending: '⏳',
  true: '✅',
  false: '❌',
  misleading: '⚠️',
  unverifiable: '❓',
};

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  className?: string;
}

export default function Badge({ variant, label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border',
        variants[variant],
        className
      )}
    >
      <span>{icons[variant]}</span>
      {label || variant.charAt(0).toUpperCase() + variant.slice(1)}
    </span>
  );
}
