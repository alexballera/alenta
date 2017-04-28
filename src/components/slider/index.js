'use strict'

import yo from 'yo-yo'
import {app} from '../layout/app'

const Slider = yo`
<div class="carousel carousel-slider">
  <picture class="carousel-item" href="#one!">
      <img src="images/slide1.jpg" height="600" alt="Slider Principal" />
      <div class="carousel-item-text text-right">
        <h3>Alenta</h3>
        <p>Primer Centro de Servicios Médicos Ambulatorios <br>
          y Complementarios de Colombia.</p>
      </div>
      <div class="formulario formulario-slider"></div>
  </picture>
  <picture class="carousel-item" href="#two!">
      <img src="images/slide1.jpg" height="600" alt="Slider Principal" />
      <div class="carousel-item-text text-right">
        <h3>Alenta</h3>
        <p>Primer Centro de Servicios Médicos Ambulatorios <br>
          y Complementarios de Colombia.</p>
      </div>
      <div class="formulario formulario-slider"></div>
  </picture>
</div>
`
export default () => {
  app.appendChild(Slider)
}

/* <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/800/400/food/2"></a>
  <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/800/400/food/3"></a>
  <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/800/400/food/4"></a> */

/* <div class="carousel carousel-slider center">
  <div class="carousel-item red white-text" href="#one!">
    <h2>First Panel</h2>
    <p class="white-text">This is your first panel</p>
  </div>
  <div class="carousel-item amber white-text" href="#two!">
    <h2>Second Panel</h2>
    <p class="white-text">This is your second panel</p>
  </div>
  <div class="carousel-item green white-text" href="#three!">
    <h2>Third Panel</h2>
    <p class="white-text">This is your third panel</p>
  </div>
  <div class="carousel-item blue white-text" href="#four!">
    <h2>Fourth Panel</h2>
    <p class="white-text">This is your fourth panel</p>
  </div>
</div> */
