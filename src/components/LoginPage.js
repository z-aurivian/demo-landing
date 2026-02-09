import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { Header } from './Header';

export function LoginPage({ onLogin, error }) {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;

    setIsSubmitting(true);
    await onLogin(password);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-aurivian-black flex flex-col">
      <Header showLogout={false} />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-aurivian-dark-gray rounded-xl p-8 border border-aurivian-blue/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-aurivian-blue/10 flex items-center justify-center">
                <Lock className="w-8 h-8 text-aurivian-blue" />
              </div>
            </div>

            <h2 className="text-xl font-helvetica text-aurivian-white text-center mb-2">
              Welcome Back
            </h2>
            <p className="text-aurivian-gray text-sm text-center mb-8">
              Enter your password to access the demo portal
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-aurivian-black border border-aurivian-blue/20 rounded-lg px-4 py-3 text-aurivian-white placeholder-aurivian-gray focus:outline-none focus:border-aurivian-blue transition-colors duration-200"
                  autoFocus
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-aurivian-red/10 border border-aurivian-red/30 rounded-lg">
                  <p className="text-aurivian-red text-sm text-center">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !password.trim()}
                className="w-full bg-aurivian-blue text-white rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 hover:bg-aurivian-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <span>Verifying...</span>
                ) : (
                  <>
                    <span>Access Portal</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          <p className="text-aurivian-gray text-xs text-center mt-6">
            Contact your Aurivian representative for access
          </p>
        </div>
      </div>
    </div>
  );
}
