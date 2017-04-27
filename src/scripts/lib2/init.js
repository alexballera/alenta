'use strict'
import $ from 'jquery'

var App = $('#dropdown__firstlevel')
var SecondLevel = `
<ul class="dropdown second__level" id="dropdown__secondlevel">
  <li class="item"><a href="#alenta">¿Qué es Alenta?</a></li>
  <li class="item"><a href="#localizacion">Localización</a></li>
  <li class="item"><a href="#proyecto">El Proyecto</a></li>
</ul>
`

export default () => {
  App.append(SecondLevel)
}
