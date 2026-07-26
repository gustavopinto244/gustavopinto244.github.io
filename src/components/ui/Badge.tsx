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
        'inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
