/**
 * browser-launch.mjs — Chromium launch helper with environment fallback.
 *
 * Some sandboxed environments pre-install a Chromium build under
 * PLAYWRIGHT_BROWSERS_PATH that doesn't match the exact revision the
 * installed `playwright` package expects, and outbound downloads to
 * Playwright's CDN are blocked. In that case fall back to the
 * environment's `chromium` alias instead of failing outright.
 */

import { existsSync } from 'fs';
import { join } from 'path';

export function resolveChromiumExecutablePath(chromium) {
  const defaultPath = chromium.executablePath();
  if (existsSync(defaultPath)) return undefined; // let Playwright use its default

  const browsersPath = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (browsersPath) {
    const aliasPath = join(browsersPath, 'chromium');
    if (existsSync(aliasPath)) return aliasPath;
  }

  return undefined;
}

export async function launchChromium(chromium, options = {}) {
  const executablePath = resolveChromiumExecutablePath(chromium);
  return chromium.launch({ ...options, ...(executablePath ? { executablePath } : {}) });
}
