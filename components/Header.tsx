
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 text-center border-b border-gray-800">
      <div className="flex items-center justify-center gap-2 mb-2">
        <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
        <h1 className="text-3xl font-bold tracking-tight">X-Threader</h1>
      </div>
      <p className="text-gray-400 max-w-md mx-auto px-4">
        Turn any YouTube knowledge into a viral X thread in seconds.
      </p>
    </header>
  );
};

export default Header;
