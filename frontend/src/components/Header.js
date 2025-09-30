import React from "react";

const Header = () => {
  return (
    <header
      className="section-bridge"
      style={{
        background: "hsl(var(--offwhite))",
        "--this-bg": "hsl(var(--offwhite))",
        "--next-bg": "hsl(var(--primary-baby))",
      }}
    >
      <div className="bridge-content max-w-7xl mx-auto px-4 pt-6 pb-10">
        <div className="flex items-center justify-center">
          <h1
            className="flex items-baseline gap-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-[hsl(0,0%,11%)]"
            style={{ fontFamily: "Sinerva, ui-sans-serif, system-ui" }}
          >
            <img
              src="/favicon.png"
              alt="Logo Mabra"
              className="inline-block h-[1em] w-auto align-text-top relative top-[2px] opacity-90"
            />
            <span>
              <span className="text-[hsl(var(--primary))]">Drop</span> da Mari
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
