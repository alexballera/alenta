'use strict'
import yo from 'yo-yo'

const Alenta = yo`
<section class="blue-grey lighten-5 contenido__seccion acerca">
  <div class="container">
    <div id="alenta" class="section scrollspy"></div>
    <h2 class="contenido__titulo">¿Qué es Alenta?</h2>
    <div class="alenta-definicion">
      <p>Es un cluster  de <span>servicios médicos ambulatorios especializados</span>
      con un alto standard de calidad en sus instalaciones.</p>
    </div>
    <div class="row valign-wrapper contenido__container">
      <div class="col s12 l6 contenido__texto">
        <img src="images/que-es-alenta.png" alt="" class="contenido__texto-img" />
      </div>
      <div class="col s12 l6 contenido__texto">
        <h3>Misión</h3>
        <p>Ser el mejor centro de integración de servicios médicos
          ambulatorios que brinde bienestar, seguridad y comodidad a
          médicos y pacientes a través de instalaciones con altos estándares
          de calidad, diseñados bajo la normatividad expedida por el
          Ministerio de Salud y  protección social.
        </p>
        <h3>Visión</h3>
        <p>Ser en diez (10) años una red con cinco (5) sedes a nivel nacional
          y una (1) a nivel internacional
        </p>
      </div>
    </div>
  </div>
  <picture class="contenido__seccion__banner hide-on-small-only barra-alenta"><img src="images/barra1.png" alt="" id="barra-alenta"></picture>
</section>
`
module.exports = Alenta
