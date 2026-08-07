
import { useState } from 'react';
import AmazonPopup from './AmazonPopup'
import logoEditorial from './images/Logo_horizontal.jpeg';


interface ServiceItem {
  id: string;
  text: string;
}

const editorialServices: ServiceItem[] = [
  { id: '1', text: 'Corrección y edición de textos.' },
  { id: '2', text: 'Maquetación profesional para formato impreso y Kindle.' },
  { id: '3', text: 'Diseño de portada.' },
  { id: '4', text: 'Publicación y configuración en Amazon KDP.' },
  { id: '5', text: 'Asesoramiento durante todo el proceso editorial.' },
];

const promotionServices: ServiceItem[] = [
  { id: '1', text: 'Publicación Internacional en Amazon.' },
  { id: '2', text: 'eBook y libro impreso bajo demanda.' },
  { id: '3', text: 'Book trailers.' },
  { id: '4', text: 'Prensa y difusión en medios.' },
  { id: '5', text: 'Estrategias de promoción y marketing para autores.' },
  { id: '6', text: 'Servicios individuales para autores que ya tienen su libro terminado.' },
];

export function EditorialPage() {

  const [mostrarPopup, setMostrarPopup] = useState(false);

  return (
    <section className="section"
      id="editorial">
      <div className="section-heading">
        <p className="eyebrow">Editorial</p>
        <h2>Publicá tu libro con nosotros.</h2>
      </div>


      <section className="editorial-section">
        <div
          className="editorial-bg"
          style={{ backgroundImage: `url(${logoEditorial})` }} />
        <div>
          <div>
            <div className="panel-content editorial-content">
              <h3>
                Acompañamos a cada autor desde el manuscrito hasta la publicación de su obra.
              </h3>

              <h3 className="section-title">Servicios editoriales</h3>

              <ul className="clean-list">
                {editorialServices.map((service) => (
                  <li key={service.id}>{service.text}</li>
                ))}
              </ul>

              <h3 className="section-title">Ghostwriting — Escribimos tu historia</h3>

              <p className="editorial-text">
                ¿Tenés una historia para contar pero no sabés cómo convertirla en un libro?
              </p>

              <p className="editorial-text">
                En <strong>Marconi Publishing</strong> ofrecemos un servicio profesional de
                ghostwriting o escritura por encargo. A partir de entrevistas,
                conversaciones, documentos y material proporcionado por el autor,
                desarrollamos una obra con calidad editorial.
              </p>

              <p className="editorial-text">
                Podemos trabajar en español o inglés y definir junto al cliente cómo
                figurará la autoría de la obra.
              </p>

              <p className="editorial-text">
                Ideal para historias de vida, memorias, testimonios, experiencias
                personales y proyectos autobiográficos.
              </p>

              <h3 className="section-title">Publicación, difusión y promoción</h3>

              <p className="editorial-text" >
                No alcanza con terminar un libro: también hay que hacerlo llegar a los
                lectores.
              </p>

              <h4 className="subsection-title">Ofrecemos</h4>

              <ul className="clean-list">
                {promotionServices.map((service) => (
                  <li key={service.id}>{service.text}</li>
                ))}
              </ul>

              <p className="closing-text">
                ¿Tenés una historia o un manuscrito y querés saber cómo publicarlo?
                <strong> Contactanos y contanos tu proyecto.</strong>
              </p>


            </div>
          </div>
        </div>
      </section>
      <div className="button-container">
        <button className="button button-primary">
          <a onClick={() => setMostrarPopup(true)} >
            Ventajas de publicar tu libro en Amazon
          </a>
        </button>
      </div>
      {mostrarPopup && <AmazonPopup onClose={() => setMostrarPopup(false)} />}
    </section>
  );
}

