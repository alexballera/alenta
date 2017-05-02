'use strict'
import createHome from './createHome'
import Alenta from './alenta'
import Localization from './localizacion'
import Proyectos from './proyectos'
import Formulario from './proyectos/formulario'
import menuFlotante from './menuFlotante'
import menuFlotanteAnimations from './menuFlotante/animations'
import JqueryOptions from './jquery.options'
import animateBanners from './animateBanners'
import loader from '../../components/loader'

export default () => {
  createHome()
  const Home = document.getElementById('home')

  loader()
  Home.appendChild(Alenta)
  Home.appendChild(Localization)
  Home.appendChild(Proyectos)
  Formulario()
  Home.appendChild(menuFlotante)
  menuFlotanteAnimations()
  JqueryOptions()
  animateBanners()
}
