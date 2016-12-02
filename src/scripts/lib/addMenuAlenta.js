import $ from 'jquery'

export default function () {
  var template = `
  <ul id="navbar" class="contenido__nav--responsive">
    <li><a href="#alenta" class="gotoalenta">Qué es Alenta</a></li>
    <li><a href="#localizacion" class="gotolocalizacion">Localización</a></li>
    <li><a href="#proyecto" class="gotoproyectos">Proyecto</a></li>
    <li><a href="#etapa1" class="gotoetapa1">Alenta <span>epata 1</span></a></li>
    <li><a href="#etapa2" class="gotoetapa2">Alenta <span>etapa 2</span></a></li>
    <li><a href="#etapa3" class="gotoetapa3">Alenta <span>etapa 3</span></a></li>
    <li><a href="#promotores" class="gotopromotores">Promotores</a></li>
    <li><a href="#contactenos" class="gotocontacto">Contactenos</a></li>
  </ul>`
  $('.add_navbar').append(template)
}
