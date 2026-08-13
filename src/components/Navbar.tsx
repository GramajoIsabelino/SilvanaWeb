const links = [
  { label: 'Home', href: '#home' },
  // { label: 'Sobre mí', href: '#about' },
  { label: 'Libros', href: '#libros' },
  // { label: 'Documental', href: '#documental' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'Prensa', href: '#prensa' },
  { label: 'Novedades', href: '#novedades' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  return (
    <header className="site-header">
      <meta name="google-site-verification" content="-pdMM3xPEEqvkbq3DvRhl233WcWz-_E2KKi3jw0aabA" />
      <a className="brand" href="#home">
        Silvana Marconi
      </a>
      <nav aria-label="Navegación principal">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
