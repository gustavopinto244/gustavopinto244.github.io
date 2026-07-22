import clsx from 'clsx';

type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div className={clsx('w-full h-[3px] bg-border overflow-hidden', className)}>
      <div
        className="h-full bg-primary transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
