'use strict'
import createHome from './createHome'
import Alenta from './alenta'
import Localization from './localizacion'
import Proyectos from './proyectos'
import Formulario from './proyectos/formulario'
import menuFlotante from './menuFlotante'
import menuFlotanteAnimations from './menuFlotante/animations'
import JqueryOptions from './jquery.options'

export default () => {
  createHome()
  document.title = 'Alenta - Que es Alenta'
  const Home = document.getElementById('home')

  Home.appendChild(Alenta)
  Home.appendChild(Localization)
  Home.appendChild(Proyectos)
  Formulario()
  Home.appendChild(menuFlotante)
  menuFlotanteAnimations()
  JqueryOptions()
}
