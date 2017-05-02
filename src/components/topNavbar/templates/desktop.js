'use strict'
import yo from 'yo-yo'
import {onClickshowHome} from '../../../components/navigation/showHome'
import onClickShowConsultorios from '../../../components/navigation/showConsultorios'
import onClickShowMedicas from '../../../components/navigation/showMedicas'
import onClickShowCirugias from '../../../components/navigation/showCirugias'
import onClickShowHotel from '../../../components/navigation/showHotel'
import onClickShowContacto from '../../../components/navigation/showContacto'

const Desktop = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="active" id="link-home"><a class='dropdown-button waves-effect waves-blue' href='#' data-activates='dropdown'>Qué es Alenta<i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion"><a href="" onclick=${onClickshowHome}>Qué es Alenta</a></li>
  <li class="waves-effect waves-blue" id="li-consultorios"><a href="" onclick=${onClickShowConsultorios}>Consultorios</a></li>
  <li class="waves-effect waves-blue" id="li-medicas"><a href="" onclick=${onClickShowMedicas}>Áreas Médicas</a></li>
  <li class="waves-effect waves-blue" id="li-cirugias"><a href="" onclick=${onClickShowCirugias}>Salas de Cirugía</a></li>
  <li class="waves-effect waves-blue" id="li-hotel"><a href="" onclick=${onClickShowHotel}>Hotel</a></li>
  <li class="waves-effect waves-blue" id="li-contactenos" onclick=${onClickShowContacto}><a href="" >Contactenos</a></li>
</ul>
`
module.exports = Desktop
