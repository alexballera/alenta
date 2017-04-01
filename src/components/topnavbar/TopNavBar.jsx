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
        <NavItem className='navbar-top-item'><Dropdown item='Alenta' /></NavItem>
        <NavItem className='navbar-top-item' href=''>Consultorios</NavItem>
        <NavItem className='navbar-top-item' href=''>Áreas Médicas</NavItem>
        <NavItem className='navbar-top-item' href=''>Salas De Cirugía</NavItem>
        <NavItem className='navbar-top-item' href=''>Hotel</NavItem>
        <NavItem className='navbar-top-item' href=''>Contáctenos</NavItem>
      </Navbar>
    </ReactCSSTransitionGroup>
  )
}
