'use strict'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Header extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName='nombre-de-clase'
        transitionAppear
        transitionAppearTimeout={5000}
        transitionEnter={false}
        transitionLeave={false}>
        <h2>Este es el Título {this.props.name}</h2>
      </ReactCSSTransitionGroup>
    )
  }
}
export default Header
