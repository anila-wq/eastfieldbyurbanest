import { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(`ErrorBoundary (${this.props.name || 'Unknown'}) caught an error:`, error, errorInfo);
    this.setState({
      error,
      errorInfo: errorInfo.componentStack
    });
  }

  handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    } else {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="py-8 bg-black text-center border border-red-900/20">
          <div className="container mx-auto px-4 max-w-md">
            <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              {this.props.name ? `${this.props.name} Error` : 'Component Error'}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              This section encountered an error and couldn't load properly.
            </p>
            {this.state.error && (
              <p className="text-xs text-gray-500 bg-gray-900 p-2 rounded mb-4 font-mono">
                {this.state.error.message}
              </p>
            )}
            <div className="flex gap-2 justify-center">
              <button 
                onClick={this.handleRetry}
                className="px-4 py-2 bg-[#c9980b] text-black rounded text-sm font-medium hover:bg-[#c9980b]/80 transition-colors"
              >
                {this.retryCount < this.maxRetries ? 'Try Again' : 'Refresh Page'}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}