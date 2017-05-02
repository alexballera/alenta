'use strict'
import yo from 'yo-yo'
import {app} from '../../components/layout/app'
import {FooterConsultorios} from '../footer'

const Consultorios = yo`
<article id="seccion-consultorios" class="blue-grey lighten-5 contenido__alenta seccion__consultorios">
  <div id="consultorios"></div>
  <section class="contenido__seccion secciones" style="min-height:474px;">
    <div class="row contenido__container">
      <div class="col s12 l6 contenido__texto">
        <img className="secciones-img" src="images/consultorio.jpg" alt="Consultorio Img" />
      </div>
      <div className="col s12 l6 secciones-texto">
        <div className="row contenedor-interno">
          <div class="col s12 hide-on-med-and-down contenido__texto">
            <img src="images/logo2.png" alt="" />
          </div>
          <div class=" col s12 contenido__texto">
            <h3>ALENTA, primer centro médico <br> ambulatorio de Colombia</h3>
            <ul>
              <li>
              <img src="images/logo2.png" alt="">
              <span>Desde 29mt2 hasta 77 m2</span>
              </li>
              <li>
              <img src="images/logo2.png" alt="">
              <span>Para entrega en agosto de 2017</span>
              </li>
              <li>
              <img src="images/logo2.png" alt="">
              <span>Consultorios entregados en obra gris</span>
              </li>
              <li>
              <img src="images/logo2.png" alt="">
              <span>Posibilidad de construcción de acabados y mobiliario interior a través de
              proveedores aliados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  ${FooterConsultorios}
</article>
`
export default () => {
  app.appendChild(Consultorios)
}
