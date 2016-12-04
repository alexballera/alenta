import $ from 'jquery'

export default function () {
  var template = `
      <!-- Menu Flotante -->
              <nav class="menu__flotante">
                    <ul class="menu__flotante__contenedor">
                          <li class="menu__flotante__item"><a href="#alenta"><span>Qué es Alenta</span></a></li>
                          <li class="menu__flotante__item"><a href="#localizacion"><span>Ubicación</span></a></li>
                          <li class="menu__flotante__item"><a href="#proyecto"><span>Proyecto</span></a></li>
                          <li class="menu__flotante__item"><a href="#etapa1"><span>Etapa 1</span></a></li>
                          <li class="menu__flotante__item"><a href="#etapa2"><span>Etapa 2</span></a></li>
                          <li class="menu__flotante__item"><a href="#etapa3"><span>Etapa 3</span></a></li>
                          <li class="menu__flotante__item"><a href="#promotores"><span>Promotores</span></a></li>
                          <li class="menu__flotante__item"><a href="#contactenos"><span>Contáctenos</span></a></li>
                    </ul>
              </nav>`
  $('.seccion__alenta').prepend(template)
}
