// import { useCallback } from "react";

// export const useDebounce = (fn: Function, delay = 400) => {
//   const debouncedFn = useCallback(
//     (...args: any[]) => {
//       const timeout = setTimeout(() => {
//         fn(...args);
//       }, delay);

//       // Cleanup on unmount or when debouncedFn changes
//       return () => clearTimeout(timeout);
//     },
//     [fn, delay],
//   );

//   return debouncedFn;
// };

import { useCallback, useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>(callback: T, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedFunction;
}
