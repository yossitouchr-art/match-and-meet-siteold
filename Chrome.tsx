'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '@/lib/site';

const isHere = (path: string, href: string) => (href === '/' ? path === '/' : path === href || path.startsWith(href + '/'));

export function TopNav() {
  const path = usePathname() || '/';
  return (
    <nav className="topnav" aria-label="Main">
      {NAV.map((n) => (
        <Link key={n.href} href={n.href} aria-current={isHere(path, n.href) ? 'page' : undefined}>{n.label}</Link>
      ))}
    </nav>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  '/': <path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z" />,
  '/how-it-works': (<><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>),
  '/events': (<><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></>),
  '/faq': (<><circle cx="12" cy="12" r="9" /><path d="M9.6 9.4a2.6 2.6 0 1 1 3.7 2.3c-.8.4-1.3 1-1.3 1.8M12 17v.01" /></>),
};

/** Phone navigation: the four main places, always within thumb reach. */
export function TabBar() {
  const path = usePathname() || '/';
  return (
    <nav className="tabbar" aria-label="Main">
      <div className="tabbar-in">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className="tab" aria-current={isHere(path, n.href) ? 'page' : undefined}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[n.href]}</svg>
            <span>{n.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
