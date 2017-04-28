'use strict'

export default () => {
  const main = document.getElementById('main')

  const home = document.createElement('div')
  home.setAttribute('class', 'container')
  home.setAttribute('id', 'home')

  main.appendChild(home)
}
