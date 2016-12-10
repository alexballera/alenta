import $ from 'jquery'

var navbar = $('#navbar')

var firstLevel = navbar.find('#dropdown__firstlevel')

var itemAlenta = `
<li class="item dropdown__firstlevel" id="itemAlenta"><a href="" class="gotoalenta">Qué es Alenta</a></li>
`
var itemAlentaDropdown = `
<li class="item dropdown__firstlevel" id="dropdown__firstlevel"><a href="" class="gotoalenta">Qué es Alenta <i class="fa fa-caret-down" aria-hidden="true"></i></a>
      <ul class="dropdown second__level" id="dropdown__secondlevel">
        <li class="item"><a href="#localizacion">Localización</a></li>
        <li class="item"><a href="#proyecto">El Proyecto</a></li>
        <li class="item"><a href="#promotores">Promotores</a></li>
        <li class="item" id="item__dropdown"><a href="#proyecto">Alenta Etapas</a>
              <ul class="dropdown third__level" id="dropdown__thirdlevel">
                    <li class="item"><a href="#etapa1">Etapa 1</a></li>
                    <li class="item"><a href="#etapa2">Etapa 2</a></li>
                    <li class="item"><a href="#etapa3">Etapa 3</a></li>
              </ul>
        </li>
      </ul>
</li>
`

var footer = `
<footer class="footer__section">
      <div class="footer__container">
        <div class="footer__item"></div>
        <div class="footer__item flexslider flexslider__mini">
        </div>
        <div class="footer__item footer__item__contact">
              <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
              <div class="footer__item__title">
                    <h3>Sala de negocios:</h3>
                    <address>
                      <strong>Dirección:</strong> Carrera 18N* 80-68 <br>
                      Bogota-Colombia
                    </address>
              </div>
        </div>
        <div class="footer__item footer__item__contact">
              <i class="fa fa-mobile fa-3x" aria-hidden="true"></i>
              <div class="footer__item__title">
                    <h3>Números de contacto:</h3>
                    <address>
                      <strong>Teléfono:</strong> 6185923 <br>
                      <strong>Celular:</strong> 320 233 9218
                    </address>
              </div>
        </div>
      </div>
</footer>`

var hideItemAlentaDropdown = () => {
  if (!$('#itemAlenta').length) {
    firstLevel.hide()
    navbar.prepend(itemAlenta)
  }
}

var showItemAlentaDropdown = () => {
  firstLevel.hide()
  navbar.prepend(itemAlentaDropdown)
}

var removeFooter = () => {
  $('.footer_areas').remove()
  $('.footer_consultorios').remove()
  $('.footer_cirugia').remove()
  $('.footer_hotel').remove()
  $('.footer_contacto').remove()
}

var addFooterConsultorio = () => {
  $('.seccion__consultorios').append(footer)
  $('.footer__section').addClass('footer_consultorios')
}

var addFooterAreas = () => {
  $('.seccion__areas').append(footer)
  $('.footer__section').addClass('footer_areas')
}

var addFooterCirugia = () => {
  $('.seccion__cirugia').append(footer)
  $('.footer__section').addClass('footer_cirugia')
}

var addFooterHotel = () => {
  $('.seccion__hotel').append(footer)
  $('.footer__section').addClass('footer_hotel')
}

var addFooterContacto = () => {
  $('.seccion__contacto').append(footer)
  $('.footer__section').addClass('footer_consultorios')
}

var hideSections = () => {
  $('article.contenido__alenta.seccion__consultorios').hide('slow')
  $('article.contenido__alenta.seccion__areas').hide('slow')
  $('article.contenido__alenta.seccion__cirugia').hide('slow')
  $('article.contenido__alenta.seccion__hotel').hide('slow')
  $('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')
}

var hideSlideAlentaSection = () => {
  $('section.slider__container').hide('slow')
  $('article.contenido__alenta.seccion__alenta').hide('slow')
}

export default () => {
  hideSections()

  $('.gotoalenta').click(function (e) {
    e.preventDefault()
    showItemAlentaDropdown()
    hideSections()
    $('section.slider__container').show('slow')
    $('article.contenido__alenta.seccion__alenta').show('slow')
  })

  $('.gotoconsultorio').click(function (e) {
    e.preventDefault()
    hideItemAlentaDropdown()
    hideSections()
    hideSlideAlentaSection()
    $('article.contenido__alenta.seccion__consultorios').show('slow')
    if (!$('.footer__section').length) {
      addFooterConsultorio()
    } else {
      removeFooter()
      addFooterConsultorio()
    }
  })

  $('.gotomedicas').click(function (e) {
    e.preventDefault()
    hideItemAlentaDropdown()
    hideSections()
    hideSlideAlentaSection()
    $('article.contenido__alenta.seccion__areas').show('slow')
    if (!$('.footer__section').length) {
      addFooterAreas()
    } else {
      removeFooter()
      addFooterAreas()
    }
  })

  $('.gotocirugias').click(function (e) {
    e.preventDefault()
    hideItemAlentaDropdown()
    hideSections()
    hideSlideAlentaSection()
    $('article.contenido__alenta.seccion__cirugia').show('slow')
    if (!$('.footer__section').length) {
      addFooterCirugia()
    } else {
      removeFooter()
      addFooterCirugia()
    }
  })

  $('.gotohotel').click(function (e) {
    e.preventDefault()
    hideItemAlentaDropdown()
    hideSections()
    hideSlideAlentaSection()
    $('article.contenido__alenta.seccion__hotel').show('slow')
    if (!$('.footer__section').length) {
      addFooterHotel()
    } else {
      removeFooter()
      addFooterHotel()
    }
  })

  $('.gotocontactanos').click(function (e) {
    e.preventDefault()
    hideItemAlentaDropdown()
    hideSections()
    hideSlideAlentaSection()
    $('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').show('slow')
    if (!$('.footer__section').length) {
      addFooterContacto()
    } else {
      removeFooter()
      addFooterContacto()
    }
  })
}
