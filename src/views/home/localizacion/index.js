'use strict'
import yo from 'yo-yo'

const Alenta = yo`
<section class="contenido__seccion acerca localizacion">
  <div id="localizacion" class="section scrollspy"></div>
  <div class="container">
    <h2 class="contenido__titulo">Localización</h2>
  </div>
  <div class="row valign-wrapper contenido__container">
    <div class="col s12 l6 contenido__texto localizacion-mapa">
      <img class="imagen-localizacion" src="images/localizacion.png" alt="" />
      <div class="localizacion__items">
        <p class="localizacion__item">Autopista Norte</p>
        <p class="localizacion__item">Carrera 15</p>
        <p class="localizacion__item">Calle 85</p>
        <p class="localizacion__item">Calle 82</p>
        <p class="localizacion__item">Sendero peatonal Calle 80</p>
      </div>
      <div class="localizacion_direccion">
        <address class="localizacion_direccion-item oficina">
          <strong>Sala de negocios:</strong> Carrera 18 No 80-74 / Chicó / Bogotá - Teléfonos: 6949729 - Celular: 3144628174
        </address>
        <p class="localizacion_direccion-item horario">
          <strong>Horario de atención:</strong> Lunes a Viernes: 7:30 am - 5:30pm - Sábados: 9:00am - 12:00pm
        </p>
      </div>
    </div>
  </div>
  <picture class="contenido__seccion__banner hide-on-small-only barra-localizacion"><img src="images/barra2.png" alt="" id="barra-localization"></picture>
</section>
`
module.exports = Alenta
