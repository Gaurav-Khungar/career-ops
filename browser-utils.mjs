#!/usr/bin/env node

/**
 * browser-utils.mjs — Resolves a usable Chromium executable for Playwright.
 *
 * Playwright's default chromium.executablePath() points at the exact
 * revision pinned by the installed `playwright` package. If a pre-provisioned
 * browser cache (PLAYWRIGHT_BROWSERS_PATH) holds a different revision, the
 * default path won't exist even though a working Chromium is available.
 * This falls back to scanning that cache for any usable chromium binary.
 */

import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

export async function resolveChromiumExecutable() {
  const { chromium } = await import('playwright');
  const defaultPath = chromium.executablePath();
  if (existsSync(defaultPath)) {
    return defaultPath;
  }

  const browsersPath = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (!browsersPath || !existsSync(browsersPath)) {
    return undefined;
  }

  // Prefer the conventional 'chromium' symlink if present.
  const symlink = join(browsersPath, 'chromium');
  if (existsSync(symlink)) {
    return symlink;
  }

  // Otherwise scan for any chromium-* revision directory with a binary.
  const candidates = ['chrome-linux/chrome', 'chrome-linux64/chrome'];
  for (const entry of readdirSync(browsersPath)) {
    if (!entry.startsWith('chromium-')) continue;
    for (const rel of candidates) {
      const candidate = join(browsersPath, entry, rel);
      if (existsSync(candidate)) {
        return candidate;
      }
    }
  }
  return undefined;
}
