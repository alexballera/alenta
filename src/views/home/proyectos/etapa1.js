'use strict'
import yo from 'yo-yo'

const Etapa1 = yo`
<section class="blue-grey lighten-5 contenido__seccion localizacion etapa1">
  <div id="etapa1" class="section scrollspy"></div>
  <div class="container">
    <h2 class="contenido__titulo">Alenta <span>etapa 1</span></h2>
    <div class="row contenido__container">
      <div class="col s12 l6 contenido__texto">
          <img src="images/etapa1-2.png" alt="" class="contenido__texto-img etapa1"/>
          <h3>Consultorios en venta</h3>
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
              <span>Posibilidad de construcción de acabados y mobiliario interior
              a través de proveedores aliados</span>
            </li>
          </ul>
      </div>
      <div class="col s12 l6 contenido__texto" id="etapa1-left">
          <img src="images/etapa1.jpg" alt="" class="contenido__texto-img etapa1"/>
          <h3>Sótano 1 y 2:</h3>
          <ul>
            <li>
              Parqueaderos, planta eléctrica, cuartos y equipos técnicos
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Primer piso: Recepción principal, sala de espera,  hall de ascensores,
                salón de eventos, baños, oficina de administración, cuarto de seguridad
              y control, zona de residuos.</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Pisos 2,3 y 4: Consultorios médicos, recepción y sala de espera, baños</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Piso 5: Salas de cirugía ambulatoria.</span>
            </li>
            <li>
              <img src="images/logo2.png" alt="">
              <span>Cubierta: Zona de comedor para residentes, 3 jaulas de golf, terraza verde.</span>
            </li>
          </ul>
      </div>
    </div>
  </div>
</section>
`
module.exports = Etapa1
