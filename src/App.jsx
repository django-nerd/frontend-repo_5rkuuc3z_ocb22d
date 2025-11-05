import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CompanyInfo from './components/CompanyInfo';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-tight text-black">
          <span className="inline-block h-3 w-3 rounded-sm bg-[#F26522]" />
          Simplium Technologies
        </a>
        <nav className="hidden gap-6 text-sm font-semibold text-[#333333] md:flex">
          <a href="#products" className="hover:text-[#F26522]">Products</a>
          <a href="#testimonials" className="hover:text-[#F26522]">Testimonials</a>
          <a href="#about" className="hover:text-[#F26522]">About</a>
          <a href="#contact" className="hover:text-[#F26522]">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-[#F26522] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#e45b1d]"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#666666]">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Simplium Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-[#F26522]">About</a>
            <a href="#associates" className="hover:text-[#F26522]">Associates</a>
            <a href="#contact" className="hover:text-[#F26522]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Testimonials />
        <CompanyInfo />
      </main>
      <Footer />
    </div>
  );
}
