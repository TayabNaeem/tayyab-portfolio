/**
 * Base URL for hosted assets (project screenshots, client logos).
 *
 * Points at the public Backblaze B2 bucket. This is a public read URL, not a
 * secret — B2 application keys must never appear in this app, and never in a
 * NEXT_PUBLIC_* variable, since those are shipped to every visitor's browser.
 *
 * Override with NEXT_PUBLIC_ASSET_BASE if the bucket ever changes.
 */
const DEFAULT_BASE = "https://f005.backblazeb2.com/file/SKillmentor";

export const ASSET_BASE = (process.env.NEXT_PUBLIC_ASSET_BASE || DEFAULT_BASE).replace(/\/$/, "");

/** Absolute URLs pass through untouched; bare paths resolve against the bucket. */
export function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  return `${ASSET_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}
