import clsx from 'clsx';

type ProgressBarProps = {
  value: number;
  className?: string;
};

const SEGMENTS = 20;

export function ProgressBar({ value, className }: ProgressBarProps) {
  const filled = Math.round((value / 100) * SEGMENTS);

  return (
    <div className={clsx('flex items-center gap-3', className)} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <span aria-hidden="true" className="text-sm leading-none tracking-[0.08em]">
        <span className="text-primary [text-shadow:0_0_10px_var(--color-primary)]">
          {'█'.repeat(filled)}
        </span>
        <span className="text-border">{'░'.repeat(SEGMENTS - filled)}</span>
      </span>
      <span className="text-xs font-semibold text-text-muted tabular-nums">{value}%</span>
    </div>
  );
}
