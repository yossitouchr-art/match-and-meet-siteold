import Link from 'next/link';
import type { Metadata } from 'next';
import Scene from '@/components/Scene';

export const metadata: Metadata = { title: 'You are offline', robots: { index: false, follow: false } };

export default function Offline() {
  return (
    <Scene as="section" variant="e" pattern={2} className="final">
      <div className="wrap narrow">
        <h1 style={{ fontSize: '2.4rem' }}>You are <em>offline</em></h1>
        <p className="lead" style={{ margin: '16px auto 0' }}>We could not reach the internet. Pages you have already visited still open. Please check your connection and try again.</p>
        <div className="btnrow" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" href="/">Back to home</Link>
        </div>
      </div>
    </Scene>
  );
}
