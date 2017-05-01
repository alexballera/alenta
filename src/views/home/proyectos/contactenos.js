'use strict'
import yo from 'yo-yo'

const Contactenos = yo`
<section class="contenido__seccion localizacion contactenos">
  <div id="contactenos" class="contenido__seccion"></div>
  <picture class="contacto-banner"><img src="images/banner-contacto.jpeg" alt=""></picture>
  <h2 class="contenido__titulo">Contáctenos</h2>
  <div class="contenido__container">
    <div class="contenido__texto contenido__texto-formulario">
      <div class="formulario" id="formulario_alenta"></div>
    </div>
  </div>
  <img class="promotores-banner hide-on-small-only" src="images/patrocinadores.png" alt="">
  <address class="alenta-address">
    Carrera 18 # 80-74 Bogotá, Colombia. Teléfono: 6949729 Celular: 3144628174 comercial@alenta.co www.alenta.com.co
  </address>
</section>
`
module.exports = Contactenos
