import { useRef } from 'react';
import clsx from 'clsx';

export type AreaOption = {
  id: string;
  label: string;
  count: number;
};

type AreaSelectorProps = {
  options: AreaOption[];
  active: string;
  onChange: (id: string) => void;
  /** `tabs` = exclusive selection (projects). `chips` = filter (skills). */
  variant?: 'tabs' | 'chips';
  ariaLabel: string;
  /** Id prefix, wiring each control to its panel through aria-controls. */
  idPrefix: string;
  className?: string;
};

export function AreaSelector({
  options,
  active,
  onChange,
  variant = 'tabs',
  ariaLabel,
  idPrefix,
  className,
}: AreaSelectorProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = options.length - 1;
    let next: number | null = null;

    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;

    if (next === null) return;

    event.preventDefault();
    onChange(options[next].id);
    buttonRefs.current[next]?.focus();
  };

  const isTabs = variant === 'tabs';

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
      className={clsx(
        'flex items-center',
        isTabs
          ? // overflow-y-hidden matters: with only overflow-x set, the browser treats the
            // other axis as `auto`, and the active tab's -mb-px is enough vertical overflow
            // to paint a stray vertical scrollbar next to the tabs.
            'no-scrollbar gap-1 overflow-x-auto overflow-y-hidden border-b border-border'
          : 'flex-wrap gap-2',
        className
      )}
    >
      {options.map((option, index) => {
        const isActive = option.id === active;

        return (
          <button
            key={option.id}
            ref={(node) => {
              buttonRefs.current[index] = node;
            }}
            role="tab"
            id={`${idPrefix}-tab-${option.id}`}
            aria-selected={isActive}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={clsx(
              'group shrink-0 inline-flex items-center gap-2 whitespace-nowrap text-xs transition-colors',
              isTabs
                ? 'px-3.5 py-3 border-b-2 -mb-px'
                : 'rounded-lg border px-3 py-2',
              isTabs && isActive && 'border-primary text-primary',
              isTabs && !isActive && 'border-transparent text-text-muted hover:text-text',
              !isTabs && isActive && 'border-primary/60 bg-primary/10 text-primary',
              !isTabs &&
                !isActive &&
                'border-border bg-surface text-text-muted hover:border-primary/40 hover:text-text'
            )}
          >
            <span>
              <span className={clsx('transition-colors', isActive ? 'text-primary' : 'text-primary/50')}>
                ./
              </span>
              {option.label}
            </span>
            <span
              className={clsx(
                'tabular-nums text-[11px]',
                isActive ? 'text-primary/70' : 'text-text-muted/60'
              )}
            >
              ({option.count})
            </span>
          </button>
        );
      })}
    </div>
  );
}
