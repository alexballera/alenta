'use strict'
import yo from 'yo-yo'

const sideNav = yo`
<ul class="side-nav" id="mobile-demo">
  <li id="link-alenta"><a class='dropdown-button gotoalenta' href='#' data-activates='dropdown2'>Qué es Alenta <i class="material-icons">arrow_drop_down</i></a></li>
  <li class="divider"></li>
  <li><a href="" class="gotoconsultorio">Consultorios</a></li>
  <li class="divider"></li>
  <li><a href="" class="gotomedicas">Áreas Médicas</a></li>
  <li class="divider"></li>
  <li><a href="" class="gotocirugias">Salas de Cirugía</a></li>
  <li class="divider"></li>
  <li><a href="" class="gotohotel">Hotel</a></li>
  <li class="divider"></li>
  <li><a href="" class="gotocontactanos">Contactenos</a></li>
  <li class="divider"></li>
</ul>
`
module.exports = sideNav