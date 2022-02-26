import Link from 'next/link'

const Home = () => {
  return (
    <section>
      <div id="header">
        <div className='container'>
          <div className="row">
            <div className="col-6">
              <div className="name text-light">
                <h1 className="ff-custom fw-bold display-1">David</h1>
                <h1 className="ff-custom fw-bold display-1">Marquez</h1>
              </div>
              <div className="divider"></div>
              <ul className='social-block d-flex'>
                <li className='block'>
                  <Link href="http://facebook.com">
                    <a>
                      FB
                    </a>
                  </Link>
                </li>
                <li className='block'>
                  <Link href="http://facebook.com">
                    <a>
                      TW
                    </a>
                  </Link>
                </li>
                <li className='block'>
                  <Link href="http://facebook.com">
                    <a>
                      IG
                    </a>
                  </Link>
                </li>
                <li className='block'>
                  <Link href="http://facebook.com">
                    <a>
                      GIT
                    </a>
                  </Link>
                </li>
                <li className='block'>
                  <Link href="http://facebook.com">
                    <a>
                      BH
                    </a>
                  </Link>
                </li>
                <li className='block'>
                  <Link href="http://facebook.com">
                    <a>
                      LK
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 d-flex flex-direction justify-content-end align-items-end">
              <div className='mark text-end fw-600'>
                <h5>YO</h5>
                <h5 className='cl-red-80'>SOY</h5>
                <h5>TOTTO</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <p className='symbol'>Cont&aacute;cto</p>
              <h2>Tengo m&aacute;s de 4 a&ntilde;os trabajando como Desarrollador.</h2>
              <p>Me apasionan las nuevas tecnolog&iacute;as, trabajar de manera organizada, colaborar y asumir nuevos retos.</p>
              <h2 className='call-to-action'><Link href="mailto:hola@iamtotto.com">hola@iamtotto.com </Link><i className='fa fa-arrow-right'></i></h2>
            </div>
            <div className='col-md-6'>
              <h2>En todos mis proyectos entrego el mayor esfuerzo por brindar un buen asesoramiento, ofreciendo soluciones practicas.</h2>
              <p>He trabajado con clientes puntuales y he colobarodo incluso con equipos completo en retos mas grandes; siempre con la misma responsabilidad y profesionalismo.</p>
              <div className='data'>
                <div className='data-block'>
                  <p>3</p>
                  <h3>A&ntilde;os de Experiencia.</h3>
                </div>
                <div className='data-block'>
                  <p>5</p>
                  <h3>Clientes Satisfechos.</h3>
                </div>
                <div className='data-block'>
                  <p>7</p>
                  <h3>Proyectos Realizados.</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='row projects'>
            <div className='block'>
              <div className='info'>
                <h3>Desarrollo Web</h3>
                <h6>3 Proyectos</h6>
              </div>
            </div>
            <div className='block'>
              <div className='info'>
                <h3>Dise&ntilde;o Web</h3>
                <h6>3 Proyectos</h6>
              </div>
            </div>
            <div className='block'>
              <div className='info'>
                <h3>Desarrollo de Software</h3>
                <h6>3 Proyectos</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portafolio">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <p className='symbol'>Portafolio</p>
              <h2>Estos son mis trabajos mas recientes.<br />Espero te gusten!</h2>
              <p>Puedes ingresar a la web oficial del proyecto o visitame en Behance y dale amor a mis &uacute;ltimos trabajos.</p>
              <h2 className='call-to-action'><Link href="https://www.behance.net/tottodg14">Ver Portafolio </Link><i className='fa fa-arrow-right'></i></h2>
              <div className='project'>
                <div className='title'>
                  <h1>Investment Euro</h1>
                  <p>Dise&ntilde;o, Desarrollo</p>
                </div>
                <img src='./assets/img/project/investmenteuro.png' />
              </div>
            </div>
            <div className='col-md-6 d-md-flex flex-column align-items-end'>
              <div className='project'>
                <div className='title'>
                  <h1>Pedidos Web</h1>
                  <p>Desarrollo, Implementaci&oacute;n</p>
                </div>
                <img src='https://cdn.dribbble.com/users/359064/screenshots/12095302/media/b55de998d0dddcaaadf332352005e868.jpg?compress=1&resize=1200x900&vertical=top' />
              </div>
              <div className='project'>
                <div className='title'>
                  <h1>Gplus</h1>
                  <p>Dise&ntilde;o, E-commerce</p>
                </div>
                <img src='./assets/img/project/gplus.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Home;