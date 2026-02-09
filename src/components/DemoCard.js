import React from 'react';
import { ExternalLink } from 'lucide-react';

export function DemoCard({ demo }) {
  const Icon = demo.icon;

  const handleClick = () => {
    if (demo.url) {
      window.open(demo.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left bg-aurivian-dark-gray rounded-xl p-6 border border-aurivian-blue/20 hover:border-aurivian-blue/50 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-aurivian-blue/10 flex items-center justify-center group-hover:bg-aurivian-blue/20 transition-colors duration-200">
          <Icon className="w-6 h-6 text-aurivian-blue" />
        </div>
        <ExternalLink className="w-5 h-5 text-aurivian-gray group-hover:text-aurivian-blue transition-colors duration-200" />
      </div>

      <h3 className="text-lg font-medium text-aurivian-white mb-2 group-hover:text-aurivian-blue transition-colors duration-200">
        {demo.title}
      </h3>

      <p className="text-aurivian-gray text-sm leading-relaxed">
        {demo.description}
      </p>
    </button>
  );
}
