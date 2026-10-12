import Link from 'next/link';
import Scene, { type Variant } from './Scene';
import { JsonLd, breadcrumbs } from '@/lib/jsonld';
import type { SlotKey } from '@/lib/media';

/** Inner-page opening: a calm moving scene with a big title, breadcrumb (also sent as structured data) and a one-sentence answer. */
export default function PageHead({ title, intro, path, crumb, wide, variant = 'e', slot, pattern = 1 }: { title: React.ReactNode; intro: React.ReactNode; path: string; crumb: string; wide?: boolean; variant?: Variant; slot?: SlotKey; pattern?: 0 | 1 | 2 }) {
  return (
    <Scene as="header" className="pagehead" variant={variant} slot={slot} pattern={pattern}>
      <div className={wide ? 'wrap' : 'wrap narrow'}>
        <nav className="crumbs rise" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <span>{crumb}</span>
        </nav>
        <h1 className="rise" style={{ ['--dl' as string]: '120ms' } as React.CSSProperties}>{title}</h1>
        <p className="lead rise" style={{ ['--dl' as string]: '280ms' } as React.CSSProperties}>{intro}</p>
      </div>
      <JsonLd data={{ '@context': 'https://schema.org', ...breadcrumbs([{ name: 'Home', path: '/' }, { name: crumb, path }]) }} />
    </Scene>
  );
}
