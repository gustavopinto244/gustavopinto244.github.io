import { type ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function Button({ children, href, variant = 'primary', className }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-lg text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-0.5';

  const variants = {
    primary:
      'bg-primary text-[#04120b] hover:shadow-[0_0_28px_-6px_var(--color-primary)]',
    secondary:
      'border border-border text-text hover:border-primary/60 hover:text-primary',
  };

  const styles = clsx(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return <button className={styles}>{children}</button>;
}
