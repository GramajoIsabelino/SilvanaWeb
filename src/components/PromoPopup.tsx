import { useEffect, useState } from 'react'
import { books } from '../../data/books'
import { isPromoActive, promo } from '../../data/promo'

const STORAGE_KEY = 'promo-noviembre-violeta-visto'

function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // sin almacenamiento disponible: se vuelve a mostrar en la próxima visita
  }
}

export function PromoPopup() {
  const [open, setOpen] = useState(() => isPromoActive() && !alreadySeen())

  const close = () => {
    setOpen(false)
    markSeen()
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        markSeen()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  const goToBooks = () => {
    close()
    document.getElementById('libros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="promo-overlay" onClick={close}>
      <div
        className="promo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="promo-close" onClick={close} aria-label="Cerrar">
          ×
        </button>

        <h2 id="promo-title" className="promo-title">
          <span className="promo-title-gold">Noviembre</span>
          <span className="promo-title-violet">Violeta</span>
        </h2>
        <p className="promo-subtitle">
          En el marco del Mes de la Lucha contra la{' '}
          <span className="promo-gold">Violencia de Género</span>
        </p>

        <div className="promo-covers">
          {books.map((book) => (
            <img key={book.id} src={book.coverImage} alt={`Portada de ${book.title}`} />
          ))}
        </div>

        <p className="promo-pill">Durante todo noviembre</p>
        <p className="promo-discount">
          <span className="promo-discount-number">{promo.discount}%</span>
          <span className="promo-discount-text">de descuento</span>
        </p>
        <p className="promo-all">En todos mis libros</p>

        <button className="promo-cta" onClick={goToBooks}>
          Ver los libros
        </button>
        <p className="promo-note">Desde aquí accedés a Amazon para realizar tu compra.</p>
      </div>
    </div>
  )
}
