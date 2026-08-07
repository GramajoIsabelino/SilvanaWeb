

export default function PublicarAmazonModal({ onClose }: { onClose: () => void }) {


    return (
        <>
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl relative">
                    <button onClick={onClose} className="absolute top-2 right-2 cerrar-button">
                        cerrar
                    </button>

                    <div className="p-8 md:p-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            Publica tu libro en Amazon
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Lleva tu obra a un mercado internacional con el acompañamiento de
                            <span className="font-semibold text-black"> Marconi Publishing</span>.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-gray-200 p-4">
                                <h3 className="font-semibold text-lg mb-2">Alcance internacional</h3>
                                <p className="text-gray-600">
                                    Tu libro puede estar disponible para millones de lectores a través
                                    de las tiendas de Amazon en distintos países.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-4">
                                <h3 className="font-semibold text-lg mb-2">Impresión bajo demanda</h3>
                                <p className="text-gray-600">
                                    El ejemplar se imprime únicamente cuando alguien lo compra, sin
                                    necesidad de financiar grandes tiradas ni almacenar stock.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-4">
                                <h3 className="font-semibold text-lg mb-2">Formato digital e impreso</h3>
                                <p className="text-gray-600">
                                    Publicación disponible como eBook Kindle, tapa blanda y tapa dura.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-4">
                                <h3 className="font-semibold text-lg mb-2">Regalías competitivas</h3>
                                <p className="text-gray-600">
                                    Los eBooks pueden generar hasta un 70% de regalías y los libros
                                    impresos hasta un 60%, según precio, mercado y condiciones aplicables.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-4">
                                <h3 className="font-semibold text-lg mb-2">Control total del autor</h3>
                                <p className="text-gray-600">
                                    Conservas los derechos sobre tu obra y decides el precio, el
                                    contenido y el momento de publicación.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-4">
                                <h3 className="font-semibold text-lg mb-2">Kindle Unlimited</h3>
                                <p className="text-gray-600">
                                    Si el eBook se incorpora a KDP Select, puede ser leído por
                                    suscriptores de Kindle Unlimited y generar ingresos por páginas leídas.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-4 md:col-span-2">
                                <h3 className="font-semibold text-lg mb-2">
                                    Disponibilidad permanente y proyección profesional
                                </h3>
                                <p className="text-gray-600">
                                    Tu libro permanece disponible de forma continua gracias a la
                                    impresión bajo demanda y cuenta con una página de venta en Amazon
                                    que puedes compartir con lectores, prensa y redes sociales.
                                </p>
                            </div>
                        </div>

                        {/* Frase comercial */}
                        <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-6">

                            <p className="text-gray-700 leading-relaxed">
                                “En Marconi Publishing transformamos tu manuscrito en un libro
                                profesional y lo llevamos a un mercado internacional, acompañándote
                                en todo el proceso hasta verlo publicado en Amazon.”
                            </p>
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src="images/hero/Logo_horizontal.jpeg"
                                    alt="Marconi Publishing"
                                    className="logoEditorial"
                                />

                            </div>
                            < h3 className="text-xl font-semibold" > Marconi Publishing</h3>
                        </div>

                        {/* Contacto */}
                        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Contacto editorial</p>
                                <a
                                    href="mailto:marconipublishing@gmail.com"
                                    className="text-lg font-medium text-black hover:underline"
                                >
                                    marconipublishing@gmail.com
                                </a>
                            </div>

                            <a
                                href="mailto:marconipublishing@gmail.com?subject=Consulta sobre publicación en Amazon"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
                            >
                                Quiero publicar mi libro
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}   