'use strict'
import createHome from './createHome'
import Alenta from './sections/alenta'
import Localization from './sections/localization'

export default () => {
  createHome()
  document.title = 'Alenta - Que es Alenta'
  const Home = document.getElementById('home')

  Home.appendChild(Alenta)
  Home.appendChild(Localization)
}
