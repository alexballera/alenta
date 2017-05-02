'use strict'
import yo from 'yo-yo'
import {app} from '../../components/layout/app'
import {FooterMedicas} from '../footer'

const Medicas = yo`
<article id="seccion-medicas" class="blue-grey lighten-5 contenido__alenta seccion__consultorios">
  <div id="medicas"></div>
  <section class="contenido__seccion secciones" style="min-height:474px;">
    <div class="row contenido__container">
      <div class="col s12 l6 contenido__texto">
        <img className="secciones-img" src="images/etapa2-2.png" alt="Consultorio Img" />
      </div>
      <div className="col s12 l6 secciones-texto">
        <div className="row contenedor-interno">
          <div class="col s12 hide-on-med-and-down contenido__texto">
            <img src="images/logo2.png" alt="" />
          </div>
          <div class=" col s12 contenido__texto">
            <h3>AREAS MEDICAS Y OFICINAS EN VENTA Y ARRIENDO</h3>
            <ul>
              <li>
                <img src="images/logo2.png" alt="">
                <span>Pisos desde En venta desde 377 m2 hasta 549 hasta m2</span>
              </li>
              <li>
                <img src="images/logo2.png" alt="">
                <span>Para entrega en diciembre de 2017</span>
              </li>
              <li>
                <img src="images/logo2.png" alt="">
                <span>Áreas de oficinas y consultorios entregados en obra gris <br>
                Posibilidad de construcción de acabados y mobiliario interior a través de proveedores aliados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  ${FooterMedicas}
</article>
`
export default () => {
  app.appendChild(Medicas)
}

