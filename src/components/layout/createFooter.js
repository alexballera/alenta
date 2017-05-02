'use strict'
import { app } from './app'

const footer = document.createElement('footer')
footer.setAttribute('class', 'footer')
footer.setAttribute('id', 'footer')

export default () => {
  app.appendChild(footer)
}
