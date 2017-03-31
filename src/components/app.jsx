'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/Header.jsx'

class App extends React.Component {
  render () {
    return (
      <Header name='Alex' />
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
