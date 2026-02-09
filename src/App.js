import React from 'react';
import { useAuth } from './hooks/useAuth';
import { LoginPage } from './components/LoginPage';
import { DemoPortal } from './components/DemoPortal';

function App() {
  const { isAuthenticated, isLoading, error, login, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-aurivian-black flex items-center justify-center">
        <div className="text-aurivian-gray">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={login} error={error} />;
  }

  return <DemoPortal onLogout={logout} />;
}

export default App;
