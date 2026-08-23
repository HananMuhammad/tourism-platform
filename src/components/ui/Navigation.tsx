'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/hotels', label: 'Hotels' },
  { href: '/tours', label: 'Tours' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        className="md:hidden text-slate-700 text-2xl"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className="hidden md:flex gap-6 text-sm text-slate-600">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-cyan-600">
            {link.label}
          </Link>
        ))}
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 hover:text-cyan-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
