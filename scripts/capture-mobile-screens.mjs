import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const projectRoot = resolve(import.meta.dirname, "..");
const screensRoot = join(projectRoot, "mobile-html", "screens");
const browser = await chromium.launch({ headless: true });

try {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    colorScheme: "dark",
  });

  const folders = await readdir(screensRoot, { withFileTypes: true });

  for (const folder of folders.filter((entry) => entry.isDirectory())) {
    const folderPath = join(screensRoot, folder.name);
    const files = await readdir(folderPath);
    const htmlFile = files.find((file) => file.endsWith(".html"));

    if (!htmlFile) {
      continue;
    }

    const page = await context.newPage();
    await page.goto(pathToFileURL(join(folderPath, htmlFile)).href, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: join(folderPath, htmlFile.replace(/\.html$/, ".png")),
      fullPage: true,
    });
    await page.close();
  }
} finally {
  await browser.close();
}
