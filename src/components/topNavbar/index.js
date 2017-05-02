'use strict'
import yo from 'yo-yo'
import Desktop from './templates/desktop'
import sideNav from './templates/sideNav'
import { DropdownDesktop, DropdownMobile } from './templates/dropdown'
import JqueryOptions from './templates/jquery.options'
import {onClickshowHome} from '../navigation/showHome'

const elem = yo`
<div>
  <div class="navbar-fixed">
    <nav class="navbar-top">
      <div class="nav-wrapper">
        <a href="" onclick=${onClickshowHome} class="brand-logo">
          <img src="images/alenta-medical-care.png" alt="" class="header__image">
        </a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        ${Desktop}
      </div>
    </nav>
  </div>
  ${sideNav}
  ${DropdownDesktop}
  ${DropdownMobile}
</div>
`

export default () => {
  document.getElementById('navbar-top').appendChild(elem)
  JqueryOptions()
}
