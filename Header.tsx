'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogoNav } from './Brand';
import { TopNav } from './Chrome';
import { NAME, applyLink } from '@/lib/site';

/** Floats transparent over the opening picture, then settles into frosted glass as you scroll. */
export default function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`topbar${solid ? ' solid' : ''}`}>
      <div className="wrap topbar-in">
        <Link href="/" className="brand" aria-label={`${NAME} home`}>
          <LogoNav />
        </Link>
        <TopNav />
        <a className="btn btn-primary btn-sm" href={applyLink()}>Apply</a>
      </div>
    </header>
  );
}
