import React from 'react';
import { LogOut } from 'lucide-react';

export function Header({ showLogout, onLogout }) {
  return (
    <header className="w-full py-6 px-8 flex items-center justify-between border-b border-aurivian-blue/20">
      <div className="flex items-center gap-3">
        <h1 className="font-michroma text-2xl tracking-wider text-aurivian-white">
          AURIVIAN
        </h1>
        <span className="text-aurivian-gray text-sm font-helvetica">
          Demo Portal
        </span>
      </div>
      {showLogout && (
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-aurivian-gray hover:text-aurivian-white transition-colors duration-200"
        >
          <LogOut size={18} />
          <span className="text-sm">Logout</span>
        </button>
      )}
    </header>
  );
}
