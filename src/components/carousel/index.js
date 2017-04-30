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
<div class="carousel carousel-slider hide-on-med-and-down">
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
