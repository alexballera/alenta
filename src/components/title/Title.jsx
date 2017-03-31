'use strict'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default props => {
  return (
    <ReactCSSTransitionGroup
      transitionName='anim'
      transitionAppear
      transitionAppearTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}>
      <h2>{props.title}</h2>
    </ReactCSSTransitionGroup>
  )
}
