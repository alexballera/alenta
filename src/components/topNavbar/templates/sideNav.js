'use strict'
import yo from 'yo-yo'
import {onClickshowHome} from '../../../components/navigation/showHome'
import onClickShowConsultorios from '../../../components/navigation/showConsultorios'

const sideNav = yo`
<ul class="side-nav" id="mobile-demo">
  <li id="link-alenta"><a class='dropdown-button' href='#' data-activates='dropdown2'>Qué es Alenta <i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion-sidenav"><a href="" onclick=${onClickshowHome}>Qué es Alenta</a></li>
  <li class="divider"></li>
  <li><a href="" onclick=${onClickShowConsultorios}>Consultorios</a></li>
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
