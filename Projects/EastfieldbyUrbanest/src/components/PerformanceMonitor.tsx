import { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  componentName: string;
  children: React.ReactNode;
}

const PerformanceMonitor = ({ componentName, children }: PerformanceMonitorProps) => {
  const [renderTime, setRenderTime] = useState<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();
    
    const measureRenderTime = () => {
      const endTime = performance.now();
      const time = endTime - startTime;
      setRenderTime(time);
      
      // Log slow components (>100ms)
      if (time > 100) {
        console.warn(`⚠️ Slow component detected: ${componentName} took ${time.toFixed(2)}ms to render`);
      }
    };

    // Use RAF to measure after render
    requestAnimationFrame(measureRenderTime);
  }, [componentName]);

  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' && renderTime && renderTime > 50 && (
        <div 
          className="fixed bottom-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded z-50 opacity-80"
          style={{ fontSize: '10px' }}
        >
          {componentName}: {renderTime.toFixed(0)}ms
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;