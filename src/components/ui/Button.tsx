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
    'inline-flex items-center justify-center min-h-12 px-5 rounded-lg font-bold transition-all duration-200 hover:-translate-y-0.5';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'border border-border text-text hover:border-primary/50 hover:bg-surface',
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
