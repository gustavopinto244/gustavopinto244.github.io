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
    'inline-flex items-center justify-center min-h-12 px-6 font-bold text-xs uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5';

  const variants = {
    primary: 'bg-text text-surface hover:bg-primary',
    secondary: 'border border-text/60 text-text hover:border-primary hover:text-primary',
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
