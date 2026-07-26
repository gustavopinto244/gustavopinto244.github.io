import { type ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'rounded-xl border border-border bg-surface p-6',
        onClick && 'cursor-pointer hover:border-primary/50 transition-colors',
        className
      )}
    >
      {children}
    </div>
  );
}
