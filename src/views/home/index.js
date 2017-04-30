'use strict'
import createHome from './createHome'
import Alenta from './alenta'
import Localization from './localizacion'
import Proyectos from './proyectos'

export default () => {
  createHome()
  document.title = 'Alenta - Que es Alenta'
  const Home = document.getElementById('home')

  Home.appendChild(Alenta)
  Home.appendChild(Localization)
  Home.appendChild(Proyectos)
}
