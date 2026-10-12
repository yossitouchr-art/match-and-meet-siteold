/** Two overlapping circles: two people, and the overlap where they fit. Used as the brand mark and the hero picture. */

export function BrandMark({ size = 36 }: { size?: number }) {
  // The pulse "M" from the logo, light-coloured for the dark header and footer. Width is about three times the old mark.
  const w = Math.round(size * 1.9);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="brand-mark" src="/brand/mark-light.png" width={w} height={Math.round(w / 3)} alt="" decoding="async" />
  );
}

/** Compact logo for the top bar: pulse and wordmark, no tagline. */
export function LogoNav({ height = 50 }: { height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="logo-nav" src="/brand/logo-nav-light.png" height={height} width={Math.round(height * 2.77)} alt="MATCH & MEET" decoding="async" />
  );
}

/** The full logo: pulse, wordmark and tagline. Light version for dark backgrounds, colour version for light ones. */
export function Logo({ width = 260, tone = 'light', className = '' }: { width?: number; tone?: 'light' | 'color'; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={className} src={`/brand/logo-${tone}.png`} width={width} height={Math.round(width / 2)} alt="MATCH & MEET: Connecting people meaningfully again" decoding="async" />
  );
}

export function Ring() {
  return (
    <svg className="ring" viewBox="0 0 360 260" role="img" aria-label="Two circles overlapping: you, your match, and the compatibility between you">
      <circle cx="130" cy="130" r="100" fill="rgba(122,21,38,.07)" stroke="#7A1526" strokeWidth="2.5" />
      <circle cx="230" cy="130" r="100" fill="rgba(122,21,38,.07)" stroke="#7A1526" strokeWidth="2.5" />
      <path d="M180 43.4A100 100 0 0 1 180 216.6A100 100 0 0 1 180 43.4Z" fill="#7A1526" />
      <g style={{ fontFamily: 'var(--display)' }} textAnchor="middle">
        <text x="80" y="138" fontSize="24" fill="#2B2829">You</text>
        <text x="282" y="124" fontSize="24" fill="#2B2829">Your</text>
        <text x="282" y="152" fontSize="24" fill="#2B2829">match</text>
        <text x="180" y="138" fontSize="22" fontStyle="italic" fill="#F4F2F0">fit</text>
      </g>
    </svg>
  );
}
