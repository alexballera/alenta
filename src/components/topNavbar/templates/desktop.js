'use strict'
import yo from 'yo-yo'

const Desktop = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="active" id="link-home"><a class='dropdown-button waves-effect waves-blue' href='#' data-activates='dropdown'>Qué es Alenta<i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion"><a href="/" >Qué es Alenta</a></li>
  <li class="waves-effect waves-blue" id="li-consultorios"><a href="/consultorios">Consultorios</a></li>
  <li class="waves-effect waves-blue" id="li-medicas"><a href="areas-medicas">Áreas Médicas</a></li>
  <li class="waves-effect waves-blue" id="li-cirugias"><a href="/cirugias">Salas de Cirugía</a></li>
  <li class="waves-effect waves-blue" id="li-hotel"><a href="/hotel">Hotel</a></li>
  <li class="waves-effect waves-blue" id="li-contactenos"><a href="/contacto" >Contactenos</a></li>
</ul>
`
module.exports = Desktop
