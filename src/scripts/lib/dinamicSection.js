import $ from 'jquery'

var body = $('body')

var navbar = body.find('#navbar')

var firstLevel = navbar.find('#dropdown__firstlevel')

var linkAlenta = navbar.find('#link-alenta')

var logo = $('#header-picture')

var botonNumeral = logo.find('#boton-numeral')

var botonAlenta = logo.find('#boton-alenta')

var gotoalenta = navbar.find('.gotoalenta')

var consultorios = navbar.find('.gotoconsultorio')

var gotomedicas = navbar.find('.gotomedicas')

var gotocirugias = navbar.find('.gotocirugias')

var gotohotel = navbar.find('.gotohotel')

var gotocontactanos = navbar.find('.gotocontactanos')

var footer = `
<footer class="footer__section dinamic">
      <div class="footer__container">
        <div class="footer__item"></div>
        <div class="footer__item flexslider flexslider__mini">
        </div>
        <div class="footer__item footer__item__contact">
              <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
              <div class="footer__item__title">
                    <h3>Sala de negocios:</h3>
                    <address>
                      <strong>Dirección:</strong> Carrera 18 # 80-74<br>
                      Bogota-Colombia
                    </address>
              </div>
        </div>
        <div class="footer__item footer__item__contact">
              <i class="fa fa-mobile fa-3x" aria-hidden="true"></i>
              <div class="footer__item__title">
                    <h3>Números de contacto:</h3>
                    <address>
                      <strong>Teléfono:</strong> 6949729 <br>
                      <strong>Celular:</strong> 310 2 47 62 54
                    </address>
              </div>
        </div>
      </div>
</footer>`

var removeFooter = () => {
  $('.footer_areas').remove()
  $('.footer_consultorios').remove()
  $('.footer_cirugia').remove()
  $('.footer_hotel').remove()
  $('.footer_contacto').remove()
  $('.footer__creditos').remove()
}

var appendFooter = () => {
  body.append(footer)
}

var addFooterConsultorio = () => {
  appendFooter()
  $('.footer__section').addClass('footer_consultorios')
}

var addFooterAreas = () => {
  appendFooter()
  $('.footer__section').addClass('footer_areas')
}

var addFooterCirugia = () => {
  appendFooter()
  $('.footer__section').addClass('footer_cirugia')
}

var addFooterHotel = () => {
  appendFooter()
  $('.footer__section').addClass('footer_hotel')
}

var addFooterContacto = () => {
  appendFooter()
  $('.footer__section').addClass('footer_consultorios')
}

var hideSections = () => {
  linkAlenta.hide()
  botonAlenta.hide()
  $('article.contenido__alenta.seccion__consultorios').hide('slow')
  $('article.contenido__alenta.seccion__areas').hide('slow')
  $('article.contenido__alenta.seccion__cirugia').hide('slow')
  $('article.contenido__alenta.seccion__hotel').hide('slow')
  $('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')
}

var backgroundActivo = {
  'backgroundColor': '#0079C0',
  'color': 'white'
}

var backgroundDesactivo = {
  'backgroundColor': 'transparent',
  'color': 'rgba(0,0,0,.5)'
}

var desactivarBackground = () => {
  consultorios.css(backgroundDesactivo)
  gotomedicas.css(backgroundDesactivo)
  gotocirugias.css(backgroundDesactivo)
  gotohotel.css(backgroundDesactivo)
  gotocontactanos.css(backgroundDesactivo)
}

var hideSlideAlentaSection = () => {
  $('section.slider__container').hide('slow')
  $('article.contenido__alenta.seccion__alenta').hide('slow')
  firstLevel.hide()
  linkAlenta.show()
  botonAlenta.show()
  botonNumeral.hide()
  desactivarBackground()
}

export default () => {
  hideSections()

  gotoalenta.click(function (e) {
    e.preventDefault()
    hideSections()
    firstLevel.show('slow')
    botonNumeral.show('slow')
    document.title = 'Alenta'
    desactivarBackground()
    firstLevel.find('a').css(backgroundActivo)
    $('section.slider__container').show('slow')
    $('article.contenido__alenta.seccion__alenta').show('slow')
  })

  consultorios.click(function (e) {
    e.preventDefault()
    hideSections()
    hideSlideAlentaSection()
    document.title = 'Consultorios'
    consultorios.css(backgroundActivo)
    $('article.contenido__alenta.seccion__consultorios').show('slow')
    if (!$('.footer__section').length) {
      addFooterConsultorio()
    } else {
      removeFooter()
      addFooterConsultorio()
    }
  })

  gotomedicas.click(function (e) {
    e.preventDefault()
    hideSections()
    hideSlideAlentaSection()
    document.title = 'Áreas Médicas'
    gotomedicas.css(backgroundActivo)
    $('article.contenido__alenta.seccion__areas').show('slow')
    if (!$('.footer__section').length) {
      addFooterAreas()
    } else {
      removeFooter()
      addFooterAreas()
    }
  })

  gotocirugias.click(function (e) {
    e.preventDefault()
    hideSections()
    hideSlideAlentaSection()
    document.title = 'Salas de Cirugía'
    gotocirugias.css(backgroundActivo)
    $('article.contenido__alenta.seccion__cirugia').show('slow')
    if (!$('.footer__section').length) {
      addFooterCirugia()
    } else {
      removeFooter()
      addFooterCirugia()
    }
  })

  gotohotel.click(function (e) {
    e.preventDefault()
    hideSections()
    hideSlideAlentaSection()
    document.title = 'Hotel'
    gotohotel.css(backgroundActivo)
    $('article.contenido__alenta.seccion__hotel').show('slow')
    if (!$('.footer__section').length) {
      addFooterHotel()
    } else {
      removeFooter()
      addFooterHotel()
    }
  })

  gotocontactanos.click(function (e) {
    e.preventDefault()
    hideSections()
    hideSlideAlentaSection()
    document.title = 'Contáctenos'
    gotocontactanos.css(backgroundActivo)
    $('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').show('slow')
    if (!$('.footer__section').length) {
      addFooterContacto()
    } else {
      removeFooter()
      addFooterContacto()
    }
  })
}
