'use strict'
import yo from 'yo-yo'

const Preyecto = yo`
<section class="contenido__seccion localizacion proyecto">
  <div id="proyecto" class="section scrollspy"></div>
  <div class="blue-grey lighten-5">
    <div class="container">
      <h2 class="contenido__titulo">El Proyecto</h2>
    </div>
    <div class="contenido__container">
      <header class="proyecto-header">
        <img src="images/banner-proyecto.jpeg" alt="El Proyecto">
        <img src="images/etapas.jpeg" alt="Etapas" id="barra-proyectos">
        <p>El proyecto se desarrolla <span>en 3 etapas</span>, en un lote de terreno
              aproximado de 2.568 m2, un área de construcción total
              aproximada de 14.418,32 m2.</p>
      </header>
    </div>
  </div>
  <div class="row container contenido__container">
    <div class="col s12 l6 contenido__texto">
      <img src="images/proyecto.png" alt="" class="contenido__texto-img" />
      <p style="font-size:12px;">La imagen es una representación grafica y esta sujeta a cambio sin previo aviso</p>
    </div>
    <div class="white col s12 l6 contenido__texto">
      <p>En ALENTA MEDICAL CARE podrá encontrar espacios disponibles
        para:</p>
      <ul>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Consultorios médicos</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Áreas médicas especializadas</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Oficinas de uso en salud</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Salas de cirugía ambulatoria.</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Salón de eventos</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Espacios para servicios complementarios como laboratorios,
          farmacias, etc. </span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Servicios de comida y entretenimiento para médicos y pacientes.</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Un hotel con estadía principalmente para pacientes y familiares</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>Gimnasio – Spa</span>
        </li>
        <li>
          <img src="images/logo2.png" alt="">
          <span>236 parqueaderos</span>
        </li>
      </ul>
    </div>
  </div>
<picture class="contenido__seccion__banner hide-on-small-only barra-proyectos"><img src="images/barra3.png" alt="" id="barra-proyectos2"></picture>
</section>
`
module.exports = Preyecto
