import fs from "node:fs";
import path from "node:path"


const BASE_URL = "https://silvanamarconi.com";

const routes = [
    "/",
    "/Home",
    "libros",
    "editorial",
    "prensa",
    "novedades",
    "contacto"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
        .map(
            (route) => `    <url>
        <loc>${BASE_URL}${route}</loc>
    </url>`
        )
        .join("\n")}
</urlset>
`;

const distPath = path.resolve("dist");

if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(
    path.join(distPath, "sitemap.xml"),
    sitemap,
    "utf-8"
);

console.log("✅ sitemap.xml generado correctamente");