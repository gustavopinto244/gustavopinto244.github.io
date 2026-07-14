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
        'border border-border bg-surface rounded-lg p-6',
        onClick && 'cursor-pointer hover:border-primary/30 transition-colors',
        className
      )}
    >
      {children}
    </div>
  );
}
