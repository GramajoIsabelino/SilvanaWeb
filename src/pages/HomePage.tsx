// import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import { books } from '../../data/books'
import { news } from '../../data/news'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { interviews } from '../../data/interviews'
import { EditorialPage } from './EditorialPage'




const featuredBooks = books.slice(0, 3)
const latestNews = news.slice(0, 3)
const lastinterviews = interviews.slice(0, 3)


export function HomePage() {



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
              <img src={book.coverImage} alt={`Portada de ${book.title}`} onClick={() => window.open(book.link, '_blank')} />
              <div className="card-body" onClick={() => window.open(book.link, '_blank')} >
                <p className="card-meta">{book.year}</p>
                <h3>{book.title}</h3>
                <p>{book.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <EditorialPage />


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
            <article className="card" key={item.id} onClick={() => window.open(item.link, '_blank')}>
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



      <section className="section" id="contacto">
        <div className="section-heading">
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
