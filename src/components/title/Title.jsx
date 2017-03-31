'use strict'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class TitleH2 extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName='nombre-de-clase'
        transitionAppear
        transitionAppearTimeout={5000}
        transitionEnter={false}
        transitionLeave={false}>
        <h2>{this.props.title}</h2>
      </ReactCSSTransitionGroup>
    )
  }
}
export default TitleH2
