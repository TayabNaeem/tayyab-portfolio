/**
 * Base URL for hosted assets (screenshots, client logos).
 *
 * Set NEXT_PUBLIC_ASSET_BASE in .env.local to point at a CDN / object store,
 * e.g. https://f004.backblazeb2.com/file/your-bucket
 *
 * Absolute URLs are passed through untouched, so individual entries can keep
 * pointing at a client's own CDN.
 */
export const ASSET_BASE = (process.env.NEXT_PUBLIC_ASSET_BASE || "").replace(/\/$/, "");

export function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  return `${ASSET_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}
