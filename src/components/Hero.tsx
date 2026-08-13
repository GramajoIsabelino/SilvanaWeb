import FotoHero from '../pages/images/HeroImage.jpeg';
import firmaImag from '../pages/images/FirmaRgb.png'

export function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-copy">
                <img src={firmaImag}>

                </img>
                <p className="eyebrow">Escritora • Narradora • Observadora</p>
                <h1>Donde termina el silencio, comienza la historia.</h1>
                <p className="hero-text">
                    Una escritura atravesada por la memoria, la violencia, la supervivencia y las historias que muchas veces permanecen en silencio.
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
                    src={FotoHero}
                    alt="Retrato editorial de la escritora"
                />
            </div>
        </section>
    )
}
