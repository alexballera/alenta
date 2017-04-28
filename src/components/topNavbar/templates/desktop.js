'use strict'
import yo from 'yo-yo'

const Desktop = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="active"><a class='dropdown-button waves-effect waves-blue' href='#' data-activates='dropdown'>Qué es Alenta<i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotoconsultorio">Consultorios</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotomedicas">Áreas Médicas</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotocirugias">Salas de Cirugía</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotohotel">Hotel</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotocontactanos">Contactenos</a></li>
</ul>
`
module.exports = Desktop
