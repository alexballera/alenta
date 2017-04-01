'use strict'

import React from 'react'
import { Dropdown, Button, NavItem, Icon } from 'react-materialize'

export default (props) => {
  var estilos = {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '1.2rem',
    height: 64,
    lineHeight: '64px',
    textTransform: 'uppercase',
    padding: 0
  }
  return (
    <Dropdown
      hover
      belowOrigin
      trigger={
        <Button flat style={estilos} >{props.item} <Icon right>arrow_drop_down</Icon></Button>
      } >
      <NavItem>¿Qué Es Alenta?</NavItem>
      <NavItem divider />
      <NavItem>Localización</NavItem>
      <NavItem divider />
      <NavItem>El Proyecto</NavItem>
    </Dropdown>
  )
}
