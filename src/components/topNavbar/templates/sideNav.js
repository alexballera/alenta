'use strict'
import yo from 'yo-yo'
import onClickShowCirugias from '../../../components/navigation/showCirugias'
import onClickShowHotel from '../../../components/navigation/showHotel'
import onClickShowContacto from '../../../components/navigation/showContacto'

const sideNav = yo`
<ul class="side-nav" id="mobile-demo">
  <li id="link-alenta"><a class='dropdown-button' href='#' data-activates='dropdown2'>Qué es Alenta <i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion-sidenav"><a href="/">Qué es Alenta</a></li>
  <li class="divider"></li>
  <li><a href="/consultorios">Consultorios</a></li>
  <li class="divider"></li>
  <li><a href="/areas-medicas">Áreas Médicas</a></li>
  <li class="divider"></li>
  <li><a href="" onclick=${onClickShowCirugias}>Salas de Cirugía</a></li>
  <li class="divider"></li>
  <li><a href="" onclick=${onClickShowHotel}>Hotel</a></li>
  <li class="divider"></li>
  <li><a href="" onclick=${onClickShowContacto}>Contactenos</a></li>
  <li class="divider"></li>
</ul>
`
module.exports = sideNav
