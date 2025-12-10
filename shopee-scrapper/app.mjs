import StealthPlugin from "puppeteer-extra-plugin-stealth";
import puppeteerExtra from "puppeteer-extra";
import { existsSync, readFileSync } from "fs";
import { saveJSON } from "./utils/save.mjs";
import getProductLinks from "./collectors/listPage.mjs";
import { loadLinks } from "./utils/loadLinks.mjs";
import getProductDetail from "./scrappers/detailPage.mjs";
import { isMatch } from "./utils/filterKey.mjs";

puppeteerExtra.use(StealthPlugin());

// CONNECT ke Chrome Debug yang sudah login
const browser = await puppeteerExtra.connect({
  browserURL: "http://127.0.0.1:9222",
  defaultViewport: null,
});

const pages = await browser.pages();
const page = pages[0];
// await page.goto("https://shopee.co.id/", { waitUntil: "networkidle2" });

let links = loadLinks();

if (!links) {
  console.log("🔄 No existing links, scraping fresh list...");
  links = await getProductLinks(page, "earphone", 16);
  saveJSON(links, "shopee-scrapper/data/links.json");
  await browser.close();
}

console.log(`there are ${links.length} links`);

const output_patch="shopee-scrapper/data/products_v2.json"

// PRODUK YANG SUDAH ADA
let existingProducts = [];
if (existsSync(output_patch)) {
  try {
    const raw = readFileSync(output_patch, "utf-8");
    existingProducts = JSON.parse(raw);

    if (!Array.isArray(existingProducts)) existingProducts = [];

    console.log(`📦 Produk existing: ${existingProducts.length}`);
  } catch {
    existingProducts = [];
  }
} else {
  console.log("📁 products_v2.json tidak ditemukan → scrape dari awal");
}

// HAPUS LINK YANG SUDAH DISCRAPE
const scrapedUrls = new Set(existingProducts.map((p) => p.url));
const filteredLinks = links.filter((link) => !scrapedUrls.has(link));

console.log(`🔍 Total Links: ${links.length}`);
console.log(`🧹 Links setelah reduksi: ${filteredLinks.length}`);

// SCRAPE SISANYA
const newProducts = [];

for (const link of filteredLinks) {
  try {
    const detail = await getProductDetail(page, link, browser);
    console.log("✔ Scraped:", detail.url);
    newProducts.push(detail)
  } catch (err) {
    console.error("❌ Gagal scrape:", link, err.message);
  }
}

// Gabungkan produk lama + baru
const finalProducts = [...existingProducts, ...newProducts];
saveJSON(finalProducts, output_patch);

console.log("🎉 DONE. Total data sekarang:", finalProducts.length);

// await browser.close();
