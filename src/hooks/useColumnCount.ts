import { useEffect, useState } from 'react';

export type ColumnStep = {
  /** Minimum viewport width, matching a Tailwind breakpoint. */
  min: number;
  columns: number;
};

/**
 * Reports how many columns a responsive grid currently renders.
 *
 * CSS does not expose this, and a row accordion needs it to know where the
 * selected item's row ends. Steps must be ordered from widest to narrowest and
 * must mirror the grid's own `grid-cols-*` classes.
 *
 * Backed by `matchMedia`, so it only reacts when a breakpoint is actually
 * crossed instead of on every pixel of a window drag.
 */
export function useColumnCount(steps: ColumnStep[]) {
  const [columns, setColumns] = useState(steps[0].columns);

  useEffect(() => {
    const queries = steps.map((step) => ({
      list: window.matchMedia(`(min-width: ${step.min}px)`),
      columns: step.columns,
    }));

    // Steps run widest to narrowest, so the first match is the active one.
    const update = () => {
      const active = queries.find((query) => query.list.matches);
      setColumns(active?.columns ?? steps[steps.length - 1].columns);
    };

    update();
    queries.forEach((query) => query.list.addEventListener('change', update));
    return () => {
      queries.forEach((query) => query.list.removeEventListener('change', update));
    };
  }, [steps]);

  return columns;
}
