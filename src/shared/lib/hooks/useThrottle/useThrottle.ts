import { useCallback, useRef } from 'react';

// Позволюет воспроихводить какое то событие с течение какого то промежутка времени
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
}
