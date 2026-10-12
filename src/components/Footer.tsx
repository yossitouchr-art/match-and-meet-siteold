import Link from 'next/link';
import { Logo } from './Brand';
import { InstallButton } from './Pwa';
import { EMAIL, NAME, UPDATED_TEXT } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo width={240} />
            <p style={{ marginTop: 14, maxWidth: '30em' }}>Compatibility-led matchmaking events in Bangkok.</p>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <InstallButton />
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              <li><Link href="/why-match-and-meet">Why we are different</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/passport">Compatibility Passport</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/faq">Questions &amp; answers</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h2>Trust</h2>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <div>© 2026 {NAME}, Bangkok, Thailand. Site last updated {UPDATED_TEXT}.</div>
        </div>
      </div>
    </footer>
  );
}
