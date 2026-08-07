export function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-copy">
                <p className="eyebrow">Escritora • Narradora • Observadora</p>
                <h1>La voz que aprende a nombrar el mundo.</h1>
                <p className="hero-text">
                    Novelas, ensayos y conversaciones sobre memoria, identidad y la escritura
                    como forma de cuidado.
                </p>
                <div className="hero-actions">
                    <a href="#libros" className="button button-primary">
                        Ver libros
                    </a>
                    <a href="#contacto" className="button button-secondary">
                        Contacto
                    </a>
                </div>
            </div>
            <div className="hero-media">
                <img
                    src="/images/hero/hero.jpg"
                    alt="Retrato editorial de la escritora"
                />
            </div>
        </section>
    )
}
