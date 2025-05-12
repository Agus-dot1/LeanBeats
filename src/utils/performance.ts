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