'use strict'
import { app } from './app'

const navbar = document.createElement('nav')
navbar.setAttribute('class', 'navbar-top')
navbar.setAttribute('id', 'navbar-top')

export default () => {
  app.appendChild(navbar)
}
