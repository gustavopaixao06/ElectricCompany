import '../assets/css/Contacto.css'

export function Contacto() {
    return (
        <>
            <section className='firstSection'>
                <div className="talkToUs">
                    <h1> <span className='habla'>HABLA CON</span> <span className='noso'>NOSOTROS</span> </h1>
                </div>

                <div className="data">
                    <div className="telefone">
                        <img src="/img/telefone.svg" alt="" />
                        <p>Número de teléfono: (xx) xxxx-xxxx</p>
                    </div>
                    <div className="mail">
                        <img src="/img/mail.svg" alt="" />
                        <p>Email: electriccompany@email.com</p>
                    </div>
                </div>
            </section>
        </>
    )
}