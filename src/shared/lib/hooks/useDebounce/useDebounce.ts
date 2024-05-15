// Позволяет отменять какое то событие в течении какого то промежутка времени

import { MutableRefObject, useCallback, useRef } from 'react';
//! Каждый раз когда что то новое вводится, все становится заново
// Позволюет воспроихводить какое то событие с течение какого то промежутка времени
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
