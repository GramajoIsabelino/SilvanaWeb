// Promoción "Noviembre Violeta": 50% de descuento en todos los libros.
// Fuera de este rango de fechas, el popup y las etiquetas de oferta se ocultan solos.
export const promo = {
  discount: 50,
  name: 'Noviembre Violeta',
  start: new Date('2026-11-01T00:00:00'),
  end: new Date('2026-12-01T00:00:00'),
}

export function isPromoActive(now: Date = new Date()) {
  return now >= promo.start && now < promo.end
}
