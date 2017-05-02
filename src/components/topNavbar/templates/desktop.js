'use strict'
import yo from 'yo-yo'
import {onClickshowHome} from '../../../components/navigation/showHome'
import onClickShowConsultorios from '../../../components/navigation/showConsultorios'

const Desktop = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="active" id="link-home"><a class='dropdown-button waves-effect waves-blue' href='#' data-activates='dropdown'>Qué es Alenta<i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion"><a href="" onclick=${onClickshowHome}>Qué es Alenta</a></li>
  <li class="waves-effect waves-blue"><a href="" onclick=${onClickShowConsultorios}>Consultorios</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotomedicas">Áreas Médicas</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotocirugias">Salas de Cirugía</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotohotel">Hotel</a></li>
  <li class="waves-effect waves-blue"><a href="" class="gotocontactanos">Contactenos</a></li>
</ul>
`
module.exports = Desktop
