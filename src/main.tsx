import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

declare global {
  interface Window {
    ipcRenderer: {
      on(channel: string, listener: (event: any, ...args: any[]) => void): this;
      removeAllListeners(channel: string): this;
    };
  }
}

const App = () => {
  useEffect(() => {
    window.ipcRenderer.on('auth-callback', (_event, url) => {
      console.log('Auth callback URL:', url);
      // Handle the authentication callback here
    });

    return () => {
      window.ipcRenderer.removeAllListeners('auth-callback');
    };
  }, []);

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
