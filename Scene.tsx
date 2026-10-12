import { PHOTOS, type SlotKey } from '@/lib/media';

export type Variant = 'a' | 'b' | 'c' | 'd' | 'e';

/** Soft out-of-focus lights, like candles across a room. Positions differ per pattern so scenes never look identical. */
const BOKEH: Record<number, { x: string; y: string; s: string; d: string; o: number }[]> = {
  0: [
    { x: '8%', y: '62%', s: '120px', d: '19s', o: 0.3 }, { x: '28%', y: '18%', s: '70px', d: '23s', o: 0.22 },
    { x: '52%', y: '70%', s: '160px', d: '27s', o: 0.2 }, { x: '72%', y: '30%', s: '100px', d: '21s', o: 0.28 },
    { x: '88%', y: '66%', s: '84px', d: '25s', o: 0.3 }, { x: '40%', y: '40%', s: '46px', d: '17s', o: 0.35 },
  ],
  1: [
    { x: '14%', y: '30%', s: '90px', d: '22s', o: 0.28 }, { x: '34%', y: '72%', s: '140px', d: '26s', o: 0.22 },
    { x: '58%', y: '22%', s: '64px', d: '18s', o: 0.34 }, { x: '78%', y: '58%', s: '130px', d: '24s', o: 0.22 },
    { x: '92%', y: '20%', s: '76px', d: '20s', o: 0.3 }, { x: '48%', y: '52%', s: '52px', d: '16s', o: 0.3 },
  ],
  2: [
    { x: '5%', y: '20%', s: '110px', d: '24s', o: 0.26 }, { x: '24%', y: '58%', s: '60px', d: '19s', o: 0.34 },
    { x: '46%', y: '84%', s: '150px', d: '28s', o: 0.2 }, { x: '68%', y: '12%', s: '120px', d: '22s', o: 0.24 },
    { x: '84%', y: '48%', s: '70px', d: '18s', o: 0.32 }, { x: '60%', y: '60%', s: '44px', d: '15s', o: 0.3 },
  ],
};

type Props = {
  variant?: Variant;
  /** A photo slot from src/lib/media.ts. When it holds a picture, it replaces the moving background. */
  slot?: SlotKey;
  pattern?: 0 | 1 | 2;
  as?: 'section' | 'div' | 'header' | 'article';
  className?: string;
  children?: React.ReactNode;
  id?: string;
  /** Extra layers drawn inside the background (a film, drifting rings). */
  bg?: React.ReactNode;
};

/**
 * A cinematic backdrop. Empty slot: slowly drifting colour and light. Filled slot: the photograph with a very slow zoom.
 * A soft shade over the bottom keeps white text readable on any picture.
 */
export default function Scene({ variant = 'a', slot, pattern = 0, as = 'div', className = '', children, id, bg }: Props) {
  const Tag = as;
  const photo = slot ? PHOTOS[slot] : null;
  return (
    <Tag id={id} className={`scene scene-${variant}${photo ? ' has-photo' : ''} ${className}`.trim()}>
      <span className="scene-fx" aria-hidden="true">
        {bg}
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="scene-photo" src={photo.src} alt="" loading={slot === 'hero' ? 'eager' : 'lazy'} decoding="async" />
        ) : (
          <span className="bokeh">
            {BOKEH[pattern].map((b, i) => (
              <i key={i} style={{ ['--x' as string]: b.x, ['--y' as string]: b.y, ['--s' as string]: b.s, ['--d' as string]: b.d, ['--o' as string]: b.o } as React.CSSProperties} />
            ))}
          </span>
        )}
        <span className="grain" />
      </span>
      {photo && <span className="sr-only">{photo.alt}</span>}
      <div className="scene-in">{children}</div>
    </Tag>
  );
}

/** Two thin circles that slowly drift together and apart: two people, and the fit between them. */
export function HeroRings() {
  return (
    <svg className="hero-rings" viewBox="0 0 800 500" aria-hidden="true" focusable="false">
      <g className="hr-a"><circle cx="300" cy="250" r="190" fill="none" stroke="rgba(255,244,222,.5)" strokeWidth="1.6" /></g>
      <g className="hr-b"><circle cx="500" cy="250" r="190" fill="none" stroke="rgba(255,244,222,.5)" strokeWidth="1.6" /></g>
    </svg>
  );
}
