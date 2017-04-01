'use strict'

import React from 'react'
import { Dropdown, Button, NavItem, Icon } from 'react-materialize'

export default (props) => {
  var estilos = {
    color: 'white',
    height: 64,
    lineHeight: '64px',
    textTransform: 'capitalize',
    backgroundColor: 'transparent',
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
