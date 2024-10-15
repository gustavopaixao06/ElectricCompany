import '../assets/css/Nosotros.css'


export function Nosotros() {
    return (
        <>
            <section className='section-first'>
                <div className="nosotros">
                    <img src="/img/nosotrosImg.jpg" alt="" />

                    <div className="description-nosotros">
                        <h1><span className='electric'>ELECTRIC</span> <span className='company'>COMPANY</span></h1>

                        <p>ELECTRIC COMPANY S&S SAC es una empresa peruana fundada en 2022, especializada en la comercialización
                            e instalación de suministros eléctricos de Baja Tensión. Nos enfocamos en brindar soluciones
                            integrales a nuestros clientes, combinando productos de alta calidad de marcas reconocidas
                            con un servicio excepcional. Nos dirigimos principalmente a universidades, industrias y constructoras,
                            ofreciendo no solo productos, sino también un sólido servicio de postventa que incluye soporte técnico,
                            gestión de garantías y asesoría en compras. Nuestro compromiso es asegurar la eficiencia y seguridad en
                            cada proyecto que realizamos.</p>
                    </div>
                </div>
            </section>

            <section className='section-second'>
                <div className="valores">
                    <h1>Nuestros valores</h1>

                    <div className="icons-nosotros">
                        <div className='Innovacion'>
                            <img src="/img/lanpada.svg" alt="" />
                            <div className="linhaBottom-icons"></div>
                            <h3>Innovación</h3>
                        </div>
                        <div className='Innovacion'>
                            <img src="/img/maos.svg" alt="" />
                            <div className="linhaBottom-icons"></div>
                            <h3>Compromiso</h3>
                        </div>
                        <div className='Respeto'>
                            <img src="/img/mao.svg" alt="" />
                            <div className="linhaBottom-icons"></div>
                            <h3>Respeto</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-third'>
                <div className="compra">
                    <h1>Compra con nosotros</h1>

                    <div className="icons-shop">
                        <div className=''>
                            <img src="/img/caminhao.svg" alt="" />
                            <p></p>
                        </div>
                        <div className=''>
                            <img src="/img/whatsapVerde.svg" alt="" />
                            
                        </div>
                        <div className=''>
                            <img src="/img/escudo.svg" alt="" />
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}