'use strict'
import yo from 'yo-yo'
import {app} from '../../components/layout/app'
import {FooterContactanos} from '../footer'
import formulario from './formulario'

const Contacto = yo`
<article id="seccion-contacto" class="blue-grey lighten-5 contenido__alenta seccion__consultorios">
  <div id="contacto"></div>
  <section class="contenido__seccion secciones" style="min-height:474px;">
    <div className="contenido__texto">
      <h3 class="center-align" style="padding-left:15%;">CONTACTENOS</h3>
    </div>
    <div class="contenido__container" id="seccion-contactenos"></div>
  </section>
  <img class="promotores-banner hide-on-small-only" src="images/patrocinadores.png" alt="">
  ${FooterContactanos}
</article>
`
export default () => {
  app.appendChild(Contacto)
  formulario()
}
