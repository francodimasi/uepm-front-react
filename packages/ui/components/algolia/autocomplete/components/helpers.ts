export const debouncePromise = (fn: Function, time: number): any => {
  let timerId: NodeJS.Timeout | undefined = undefined;

  return function debounced(...args: any[]) {
    if (timerId) {
      clearTimeout(timerId);
    }
    return new Promise((resolve) => {
      timerId = setTimeout(() => resolve(fn(...args)), time);
    });
  } as any;
};
