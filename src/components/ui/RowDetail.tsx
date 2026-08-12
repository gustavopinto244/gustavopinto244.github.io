import { type ReactNode } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';

type RowDetailProps = {
  columns: number;
  column: number;
  command: string;
  meta?: string;
  onClose: () => void;
  tone?: 'primary' | 'accent';
  id?: string;
  children: ReactNode;
};

export function RowDetail({
  columns,
  column,
  command,
  meta,
  onClose,
  tone = 'primary',
  id,
  children,
}: RowDetailProps) {
  const border = tone === 'primary' ? 'border-primary/40' : 'border-accent/40';
  const text = tone === 'primary' ? 'text-primary' : 'text-accent';

  return (
    <div className="col-span-full">
      {/* Same column template and gap as the parent grid, so the caret lands
          exactly under the selected tile at any breakpoint. */}
      <div
        aria-hidden="true"
        className="grid gap-3 md:gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: columns }, (_, index) => (
          <div key={index} className="flex justify-center">
            {index === column && (
              <span
                className={clsx(
                  'block w-2.5 h-2.5 -mb-[7px] rotate-45 border-l border-t bg-background',
                  border
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div id={id} className={clsx('rounded-xl border bg-background p-4 md:p-5', border)}>
        <div className="flex items-start gap-3 mb-4">
          <p className="text-[11px] text-text-muted">
            <span className={text}>$</span> {command}
            {meta && <span className="ml-2 text-text-muted/60">[{meta}]</span>}
          </p>

          <button
            onClick={onClose}
            aria-label="Fechar detalhes"
            className={clsx(
              'ml-auto shrink-0 inline-flex items-center justify-center rounded-md border border-border p-1',
              'text-text-muted transition-colors',
              tone === 'primary'
                ? 'hover:border-primary/60 hover:text-primary'
                : 'hover:border-accent/60 hover:text-accent'
            )}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
