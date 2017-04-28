'use strict'
import { app } from './app'

const main = document.createElement('main')
main.setAttribute('class', 'main')
main.setAttribute('id', 'main')

export default () => {
  app.appendChild(main)
}
