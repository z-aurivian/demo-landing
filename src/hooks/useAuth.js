import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'aurivian_portal_auth';
const SESSION_DURATION_DAYS = 7;

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function getStoredAuth() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

function setStoredAuth(hash) {
  const expiry = Date.now() + (SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ hash, expiry }));
}

function clearStoredAuth() {
  localStorage.removeItem(STORAGE_KEY);
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const expectedHash = process.env.REACT_APP_PORTAL_PASSWORD_HASH;

  // Debug: check if env var is loaded
  console.log('Expected hash loaded:', expectedHash ? 'yes' : 'no');

  useEffect(() => {
    const stored = getStoredAuth();
    if (stored && stored.hash === expectedHash && stored.expiry > Date.now()) {
      setIsAuthenticated(true);
    } else {
      clearStoredAuth();
    }
    setIsLoading(false);
  }, [expectedHash]);

  const login = useCallback(async (password) => {
    setError(null);
    try {
      const hash = await hashPassword(password);
      console.log('Input hash:', hash);
      console.log('Expected hash:', expectedHash);
      if (hash === expectedHash) {
        setStoredAuth(hash);
        setIsAuthenticated(true);
        return true;
      } else {
        setError('Invalid password');
        return false;
      }
    } catch (err) {
      setError('Authentication failed');
      return false;
    }
  }, [expectedHash]);

  const logout = useCallback(() => {
    clearStoredAuth();
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, isLoading, error, login, logout };
}
