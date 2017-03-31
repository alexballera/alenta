'use strict'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Header extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup transitionName='anim' transitionAppear transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
        <h2>{'Este es el Título'}</h2>
      </ReactCSSTransitionGroup>
    )
  }
}
export default Header
