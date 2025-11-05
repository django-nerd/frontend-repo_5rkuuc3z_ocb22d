import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[520px] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient to improve text contrast; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Simplium Technologies
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Building modern digital products that simplify commerce, identity, organizations, and retail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-[#F26522] px-5 py-3 font-semibold text-white shadow hover:bg-[#e45b1d] transition-colors">
              Explore Products
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
