'use strict'
import yo from 'yo-yo'

const Desktop = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li><a class='dropdown-button waves-effect waves-light' href='#' data-activates='dropdown'>Qué es Alenta</a></li>
  <li class="waves-effect waves-light active"><a href="" class="gotoconsultorio">Consultorios</a></li>
  <li class="waves-effect waves-light"><a href="" class="gotomedicas">Áreas Médicas</a></li>
  <li class="waves-effect waves-light"><a href="" class="gotocirugias">Salas de Cirugía</a></li>
  <li class="waves-effect waves-light"><a href="" class="gotohotel">Hotel</a></li>
  <li class="waves-effect waves-light"><a href="" class="gotocontactanos">Contactenos</a></li>
</ul>
`
module.exports = Desktop
