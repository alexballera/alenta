'use strict'
import { app } from './app'

const navbar = document.createElement('div')
navbar.setAttribute('id', 'navbar-top')

export default () => {
  app.appendChild(navbar)
}
