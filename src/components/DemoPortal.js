import React from 'react';
import { Header } from './Header';
import { DemoCard } from './DemoCard';
import { demos } from '../data/demos';

export function DemoPortal({ onLogout }) {
  return (
    <div className="min-h-screen bg-aurivian-black flex flex-col">
      <Header showLogout={true} onLogout={onLogout} />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-helvetica text-aurivian-white mb-2">
              Live Demos
            </h2>
            <p className="text-aurivian-gray">
              Select a demo to explore our platform capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {demos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
        </div>
      </main>

      <footer className="py-6 px-8 border-t border-aurivian-blue/20">
        <p className="text-aurivian-gray text-sm text-center">
          {new Date().getFullYear()} Aurivian. For authorized users only.
        </p>
      </footer>
    </div>
  );
}
