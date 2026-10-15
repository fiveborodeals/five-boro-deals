'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
];

/** Retail header: a quiet utility strip, then a clean sticky nav.
 *  No entrance animation, no gimmicks — it is simply there, like a real store. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 z-50">
      <div className="bg-ink text-paper/80">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-2 font-sans text-[11px] tracking-[0.08em] md:px-10">
          <span>Brand new, always — never used, never refurbished</span>
          <span className="hidden md:block">Secure checkout via eBay Buyer Protection</span>
        </div>
      </div>
      <div
        className={`border-b bg-paper/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'border-line shadow-[0_1px_12px_rgba(28,27,24,0.06)]' : 'border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="font-display text-[22px] font-semibold tracking-tight text-ink">
            {siteConfig.storeName}
            <span className="text-brass">.</span>
          </Link>
          <div className="flex items-center gap-7 md:gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-draw font-sans text-sm text-stone transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <span className="hidden items-center gap-2 font-sans text-sm text-stone md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
              Ships from New York
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
