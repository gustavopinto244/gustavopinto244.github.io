import clsx from 'clsx';

type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div className={clsx('w-full h-2 bg-border rounded-full overflow-hidden', className)}>
      <div
        className="h-full bg-primary rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
