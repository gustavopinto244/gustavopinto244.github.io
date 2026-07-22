import clsx from 'clsx';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'primary';
  className?: string;
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'border-border bg-surface text-text-muted',
    success: 'border-accent/40 bg-accent/10 text-accent',
    primary: 'border-primary/40 bg-primary/10 text-primary',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
