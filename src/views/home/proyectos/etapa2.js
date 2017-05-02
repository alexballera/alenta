'use strict'
import yo from 'yo-yo'

const Etapa2 = yo`
<section class="contenido__seccion localizacion etapa2">
  <div id="etapa2" class="section scrollspy"></div>
  <div class="container">
    <h2 class="contenido__titulo">Alenta <span>etapa 2</span></h2>
    <div class="row contenido__container">
      <div class="col s12 l6 contenido__texto">
          <img src="images/etapa2-2.png" alt="" class="contenido__texto-img etapa1"/>
          <h3>Áreas para oficinas <br> y consultorios médicos en arriendo</h3>
          <ul>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Desde 115 metros 549 hasta m2</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Para entrega en diciembre de 2017</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Áreas de oficinas y consultorios entregados en obra gris</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Posibilidad de construcción de acabados y mobiliario interior a través
              de proveedores aliados</span>
            </li>
          </ul>
      </div>
      <div class="col s12 l6 contenido__texto" id="etapa1-left">
          <img src="images/etapa2.jpg" alt="" class="contenido__texto-img etapa1"/>
          <ul>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Sótano 1 y 2: Parqueaderos, cuartos y equipos técnicos</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Primer piso: Locales comerciales, hall de ascensores</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Pisos 2,3 y 4: Areas de oficinas y consultorios médicos,
              recepción, sala de espera, baños</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Piso 5: Salas de cirugía ambulatoria</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Cubierta: Zona de gimnasio, terraza verde</span>
            </li>
          </ul>
      </div>
    </div>
  </div>
</section>
`
module.exports = Etapa2
