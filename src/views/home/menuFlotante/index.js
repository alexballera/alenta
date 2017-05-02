'use strict'
import yo from 'yo-yo'

const menuFlotante = yo`
<nav class="menu-flotante">
  <ul class="menu-flotante-contenedor" id="menu-flotante-contenedor">
    <li class="menu-flotante-item"><a href="#etapa1"><span>1 Etapa</span></a></li>
    <li class="menu-flotante-item"><a href="#etapa2"><span>2 Etapa</span></a></li>
    <li class="menu-flotante-item"><a href="#etapa3"><span>3 Etapa</span></a></li>
  </ul>
</nav>
`
module.exports = menuFlotante
