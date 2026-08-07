// import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import { books } from '../../data/books'
import { news } from '../../data/news'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { interviews } from '../../data/interviews'
import AmazonPopup from './AmazonPopup'
import { useState } from 'react'


const featuredBooks = books.slice(0, 3)
const latestNews = news.slice(0, 2)
const lastinterviews = interviews.slice(0, 3)


export function HomePage() {

  const [mostrarPopup, setMostrarPopup] = useState(false);

  return (
    <main>
      <Navbar />
      <Hero />

      <section className="section" id="libros">
        <div className="section-heading">
          <p className="eyebrow">Últimos libros</p>
          <h2>Obras que abren una puerta interior.</h2>
        </div>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <article className="card book-card" key={book.id}>
              <img src={book.coverImage} alt={`Portada de ${book.title}`} />
              <div className="card-body" onClick={() => window.open(book.link, '_blank')}>
                <p className="card-meta">{book.year}</p>
                <h3>{book.title}</h3>
                <p>{book.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>



      <section className="section" id="editorial">
        <div className="section-heading">
          <p className="eyebrow">Editorial</p>
          <h2>Publicá tu libro con nosotros.</h2>
        </div>
        <div className="panel">
          <div className="panel-content">
            <h3>
              Acompañamos a cada autor desde el manuscrito hasta la publicación de su obra.
            </h3>

            <h3 className="section-title">Servicios editoriales</h3>

            <ul className="service-list">
              <li>Corrección y edición de textos.</li>
              <li>Maquetación profesional para formato impreso y Kindle.</li>
              <li>Diseño de portada.</li>
              <li>Publicación y configuración en Amazon KDP.</li>
              <li>Asesoramiento durante todo el proceso editorial.</li>
            </ul>

            <h3 className="section-title">Ghostwriting — Escribimos tu historia</h3>

            <p>
              ¿Tenés una historia para contar pero no sabés cómo convertirla en un libro?
            </p>

            <p>
              En <strong>Marconi Publishing</strong> ofrecemos un servicio profesional de
              ghostwriting o escritura por encargo. A partir de entrevistas,
              conversaciones, documentos y material proporcionado por el autor,
              desarrollamos una obra con calidad editorial.
            </p>

            <p>
              Podemos trabajar en español o inglés y definir junto al cliente cómo
              figurará la autoría de la obra.
            </p>

            <p>
              Ideal para historias de vida, memorias, testimonios, experiencias
              personales y proyectos autobiográficos.
            </p>

            <h3 className="section-title">Publicación, difusión y promoción</h3>

            <p>
              No alcanza con terminar un libro: también hay que hacerlo llegar a los
              lectores.
            </p>

            <h4 className="subsection-title">Ofrecemos</h4>

            <ul className="service-list">
              <li>Publicación internacional en Amazon.</li>
              <li>eBook y libro impreso bajo demanda.</li>
              <li>Book trailers.</li>
              <li>Prensa y difusión en medios.</li>
              <li>Estrategias de promoción y marketing para autores.</li>
              <li>Servicios individuales para autores que ya tienen su libro terminado.</li>
            </ul>

            <p className="closing-text">
              ¿Tenés una historia o un manuscrito y querés saber cómo publicarlo?
              <strong> Contactanos y contanos tu proyecto.</strong>
            </p>

            <div className="button-container">
              <button className="button button-primary">
                <a onClick={() => setMostrarPopup(true)} >
                  Ventajas de publicar tu libro en Amazon
                </a>
              </button>
            </div>
            {mostrarPopup && <AmazonPopup onClose={() => setMostrarPopup(false)} />}
          </div>
        </div>

      </section>




      {/* <section className="section split-section" id="documental">
        <div>
          <p className="eyebrow">Documental</p>
          <h2>Una mirada íntima a los lugares que inspiraron su escritura.</h2>
          <p>
            Un recorrido visual entre cuadernos, ventanas, jardines y paisajes que
            acompañan la voz de la autora.
          </p>
        </div>
        <div className="panel">
          <p>Próximamente disponible</p>
          <a href="#contacto" className="button button-secondary">
            Solicitar acceso anticipado
          </a>
        </div>
      </section> */}

      <section className="section" id="novedades">
        <div className="section-heading">
          <p className="eyebrow">Últimas noticias</p>
          <h2>Actualizaciones sobre libros, entrevistas y eventos.</h2>
        </div>
        <div className="news-grid">
          {latestNews.map((item) => (
            <article className="card" key={item.id}>
              <p className="card-meta">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="prensa">
        <div className="section-heading">
          <p className="eyebrow">Entrevistas</p>
          <h2>Conversaciones que revelan la fuerza de la palabra.</h2>
        </div>
        <div className="interviews-grid" >
          {lastinterviews.map((interview) => (
            // const url = {interview.link}
            <article className="card" key={interview.id} onClick={() => window.open(interview.link, '_blank')}>
              <p className="card-meta">{interview.publication}</p>
              <h3>{interview.title}</h3>
              <p>{interview.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contacto">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de libros, entrevistas o nuevas colaboraciones.</h2>
        </div>
        <a href="mailto:contacto@silvana.com" className="button button-primary">
          contacto@silvana.com
        </a>
      </section>

      <Footer />
    </main >
  )
}
