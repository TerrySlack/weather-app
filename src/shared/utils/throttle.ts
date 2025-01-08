export const throttleFunction = (
  func: (...args: any[]) => void,
  limit: number
) => {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      const timeout = setTimeout(() => {
        inThrottle = false;
        clearTimeout(timeout);
      }, limit);
    }
  };
};

export const throttleFunc = <T extends (...args: any[]) => any>(
  func: T,
  limit: number = 300
) => {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;
  return (...args: Parameters<T>): ReturnType<T> => {
    if (!inThrottle) {
      lastResult = func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
    return lastResult;
  };
};

export const throttlePromise = <T extends (...args: any[]) => Promise<T>>(
  func: T,
  limit: number = 1 //Lete's execute asap
) => {
  let inThrottle: boolean;
  let lastResult: Promise<T>;
  return (...args: Parameters<T>): Promise<T> => {
    if (!inThrottle) {
      lastResult = func(...args);
      inThrottle = true;
      const timeout = setTimeout(() => {
        inThrottle = false;
        clearTimeout(timeout);
      }, limit);
    }
    return lastResult;
  };
};
