/**
 * Utility functions to improve application performance
 */

/**
 * Prefetches a component to improve navigation performance
 * @param importFn The import function to prefetch
 */
export const prefetchComponent = (importFn: () => Promise<any>) => {
  try {
    importFn();
  } catch (error) {
    // Silent fail for prefetching
  }
};

/**
 * Debounces a function to prevent excessive calls
 * @param fn The function to debounce
 * @param delay The delay in milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };
};

/**
 * Throttles a function to limit how often it can be called
 * @param fn The function to throttle
 * @param limit The time limit in milliseconds
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  
  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now();
    
    if (now - lastCall >= limit) {
      fn.apply(this, args);
      lastCall = now;
    }
  };
};

export const measurePerformance = (metricName: string) => {
  if ('performance' in window) {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    // Core Web Vitals
    const FCP = performance.getEntriesByName('first-contentful-paint')[0];
    const LCP = performance.getEntriesByName('largest-contentful-paint')[0];
    const FID = performance.getEntriesByName('first-input-delay')[0];
    const CLS = performance.getEntriesByName('cumulative-layout-shift')[0];

    console.log(`Performance Metrics for ${metricName}:`, {
      navigationTiming,
      FCP,
      LCP,
      FID,
      CLS
    });
  }
};