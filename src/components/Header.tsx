"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#products", label: "Продукция" },
    { href: "#fleet", label: "Автопарк" },
    { href: "#quality", label: "Качество" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-charcoal/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center">
            <Logo className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-light hover:text-amber transition-colors font-semibold text-sm uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="relative bg-amber hover:bg-amber-dark text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-amber/50 overflow-hidden group"
            >
              <span className="relative z-10">Оставить заявку</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-light to-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-light hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-light hover:text-amber transition-colors font-semibold text-sm uppercase tracking-wider px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-amber hover:bg-amber-dark text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all text-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Оставить заявку
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
