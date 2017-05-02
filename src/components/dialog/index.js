'use strict'
// import { app } from '../layout/app'
import yo from 'yo-yo'

export default () => {
  const app = document.getElementById('app')
  const dialog = yo`
  <div id="dialog" title="Alenta" class="formulario__dialog">
    <p>Tu mensaje ha sido enviado, a la brevedad posible uno de nuestros agentes se estará comunicando con usted</p>
  </div>
  `
  app.appendChild(dialog)
}
