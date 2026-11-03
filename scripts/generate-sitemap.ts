import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

// Genera dist/sitemap.xml después del build de Vite.
const SITE_URL = 'https://www.silvanamarconi.com'

const pages = ['/']

const today = new Date().toISOString().slice(0, 10)

const urls = pages
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const outDir = resolve(process.cwd(), 'dist')
mkdirSync(outDir, { recursive: true })
writeFileSync(resolve(outDir, 'sitemap.xml'), xml)
console.log('sitemap.xml generado en dist/')
