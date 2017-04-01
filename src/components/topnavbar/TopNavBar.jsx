'use strict'

import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Dropdown from './Dropdown.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default () => {
  return (
    <ReactCSSTransitionGroup
      transitionName='anim'
      transitionAppear
      transitionAppearTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}>
      <Navbar brand='Alenta' right className='navbar-top'>
        <NavItem><Dropdown item='Alenta' /></NavItem>
        <NavItem href=''>Consultorios</NavItem>
        <NavItem href=''>Áreas Médicas</NavItem>
        <NavItem href=''>Salas De Cirugía</NavItem>
        <NavItem href=''>Hotel</NavItem>
        <NavItem href=''>Contáctenos</NavItem>
      </Navbar>
    </ReactCSSTransitionGroup>
  )
}
