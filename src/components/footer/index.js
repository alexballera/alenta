'use strict'
import yo from 'yo-yo'

export default () => {
  const footer = document.getElementById('footer')
  const elem = yo`
  <div class="row">
    <div class="row footer_alenta">
      <picture class="col s12 m6"><img src="images/logo.png" alt=""></picture>
      <picture class="col s12 m6"><img src="images/alenta-medical-care.png" alt=""></picture>
    </div>
    <div class="row footer_creditos">
      <p class="col">Derechos Reservados <i class="fa fa-copyright" aria-hidden="true"></i> 2016 Agencia de Publicidad en Bogotá - Colombia Creativo Z Publicidad y Estrategias SAS <a href="http://creativoz.co/">CreatiVoz</a> </p>
    </div>
  </div>
  `
  footer.appendChild(elem)
}
