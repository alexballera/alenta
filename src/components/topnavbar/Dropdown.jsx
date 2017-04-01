'use strict'

import React from 'react'
import { Dropdown, Button, NavItem, Icon } from 'react-materialize'

export default (props) => {
  var estilos = {
    backgroundColor: 'transparent',
    color: 'darkgrey',
    fontSize: '1.15rem',
    height: 64,
    lineHeight: '64px',
    textTransform: 'uppercase',
    padding: 0
  }
  return (
    <Dropdown
      trigger={
        <Button flat style={estilos} >{props.item} <Icon right>arrow_drop_down</Icon></Button>
      } >
      <NavItem className='navbar-top-item' >¿Qué Es Alenta?</NavItem>
      <NavItem divider />
      <NavItem className='navbar-top-item' >Localización</NavItem>
      <NavItem divider />
      <NavItem className='navbar-top-item' >El Proyecto</NavItem>
    </Dropdown>
  )
}
