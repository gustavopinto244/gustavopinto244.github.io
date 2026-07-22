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
        'border border-border bg-surface p-6',
        onClick && 'cursor-pointer hover:border-text/50 transition-colors',
        className
      )}
    >
      {children}
    </div>
  );
}
