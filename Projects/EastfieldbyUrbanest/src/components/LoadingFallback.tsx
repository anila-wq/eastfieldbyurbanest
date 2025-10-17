import { AlertTriangle } from 'lucide-react';

interface LoadingFallbackProps {
  error?: string;
}

const LoadingFallback = ({ error }: LoadingFallbackProps) => {
  return (
    <div className="min-h-[200px] bg-black flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <AlertTriangle className="w-12 h-12 text-[#c9980b] mx-auto mb-4" />
        <h3 className="text-white text-lg font-semibold mb-2">Content Temporarily Unavailable</h3>
        <p className="text-gray-400 text-sm mb-4">
          This section is temporarily unavailable. Please refresh the page or try again later.
        </p>
        {error && (
          <p className="text-xs text-gray-500 bg-gray-900 p-2 rounded">
            Error: {error}
          </p>
        )}
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-[#c9980b] text-black rounded text-sm font-medium hover:bg-[#c9980b]/80 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default LoadingFallback;