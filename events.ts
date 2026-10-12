export type EventRow = {
  slug: string;
  name: string;
  starts_at: string | null;
  venue: string | null;
  price_label: string | null;
  early_price_label: string | null;
  early_ends_at: string | null;
};

/**
 * Events that are open for applications, read from the same database as the apply app (public read, the
 * same publishable key the apply app uses). Refreshes at most every 5 minutes. Never throws: if the
 * database is not configured or unreachable, the pages show the "first event" placeholder instead.
 */
export async function getOpenEvents(): Promise<EventRow[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return [];
  try {
    const res = await fetch(
      `${url}/rest/v1/events?select=slug,name,starts_at,venue,price_label,early_price_label,early_ends_at&status=eq.open&order=starts_at.asc`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 300 } },
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as EventRow[];
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

/** "Men&Men" -> "Men & Men" (the admin stores the short form). */
export const prettyName = (n: string) => n.replace(/\s*&\s*/g, ' & ').trim();

export function fmtDate(iso: string | null): string {
  if (!iso) return 'Date to be announced';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Bangkok' });
}

export function fmtTime(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok' });
}

function fmtDateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok' });
}

/** The price line for an event: the early-bird price until it ends, then the regular price. */
export function priceLine(ev: EventRow, at: Date = new Date()): string {
  const early = !!ev.early_price_label && !!ev.early_ends_at && at.getTime() < new Date(ev.early_ends_at).getTime();
  if (early) return `${ev.early_price_label} early bird until ${fmtDateTime(ev.early_ends_at!)}${ev.price_label ? ` (then ${ev.price_label})` : ''}`;
  return ev.price_label ?? '';
}

/** The numeric baht price in a free-text label such as "THB 2,590 or US$75", or null. */
export function baht(label: string | null | undefined): number | null {
  const m = (label ?? '').match(/(?:THB|฿)\s*([\d,]+)/i);
  return m ? parseInt(m[1].replace(/,/g, ''), 10) : null;
}
