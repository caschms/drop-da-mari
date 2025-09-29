import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-800"
            style={{ fontFamily: 'Sinerva, ui-sans-serif, system-ui' }}
          >
            <span className="text-pink-500">Drop</span> da Mari
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
