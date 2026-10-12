import Link from 'next/link';
import type { Metadata } from 'next';
import Scene from '@/components/Scene';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <Scene as="section" variant="e" pattern={2} className="final">
      <div className="wrap narrow">
        <p className="eyebrow">Error 404</p>
        <h1 style={{ fontSize: '2.6rem' }}>We could not find that <em>page</em></h1>
        <p className="lead" style={{ margin: '16px auto 0' }}>It may have moved. Try the home page, or see how it works.</p>
        <div className="btnrow" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" href="/">Back to home</Link>
          <Link className="btn btn-ghost" href="/how-it-works">How it works</Link>
        </div>
      </div>
    </Scene>
  );
}
