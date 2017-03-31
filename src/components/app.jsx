'use strict'

import React from 'react'
import TopNavBar from './topnavbar/TopNavBar.jsx'
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'
import Content from './content/Content.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <TopNavBar />
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
export default App
