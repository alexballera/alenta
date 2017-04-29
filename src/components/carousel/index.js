'use strict'

import yo from 'yo-yo'
import {app} from '../layout/app'
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5
} from './slides'

const Slider = yo`
<div class="carousel carousel-slider">
  ${Slide1}
  ${Slide2}
  ${Slide3}
  ${Slide4}
  ${Slide5}
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
