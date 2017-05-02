'use strict'
import yo from 'yo-yo'
import {app} from '../../components/layout/app'
import {FooterHotel} from '../footer'

const Hotel = yo`
<article id="seccion-hotel" class="blue-grey lighten-5 contenido__alenta seccion__consultorios">
  <div id="hotel"></div>
  <section class="contenido__seccion secciones" style="min-height:474px;">
    <div class="row contenido__container">
      <div class="col s12 l6 contenido__texto">
        <img className="secciones-img" src="images/sala-cirugia.png" alt="Consultorio Img" />
      </div>
      <div className="col s12 l6 secciones-texto">
        <div className="row contenedor-interno">
          <div class="col s12 hide-on-med-and-down contenido__texto">
            <img src="images/logo2.png" alt="" />
          </div>
          <div class=" col s12 contenido__texto">
            <h3>SALAS DE CIRUGIA AMBULATORIA</h3>
            <ul>
              <li>
                <img src="images/logo2.png" alt="">
                <span>4 quirófanos dotados con última tecnología</span>
              </li>
              <li>
                <img src="images/logo2.png" alt="">
                <span>Destinados para cirugía ambulatoria</span>
              </li>
              <li>
                <img src="images/logo2.png" alt="">
                <span>Comercialización a través de 100 derechos fiduciarios</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  ${FooterHotel}
</article>
`
export default () => {
  app.appendChild(Hotel)
}
