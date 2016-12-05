import $ from 'jquery'

  var template = `
<footer class="footer__section">
      <div class="footer__container">
        <div class="footer__item"></div>
        <div class="footer__item flexslider flexslider__mini">
                <ul class="slides">
                    <li class="flexslider__mini__item slide__alenta">
                          <picture class="flexslider__mini__picture">
                              <img class="flexslider__mini__image" src="images/slide1.jpg" height="400" alt="Slider Principal" />
                          </picture>
                    </li>
                    <li class="flexslider__mini__item slide__cirugia">
                          <picture class="flexslider__mini__picture">
                              <img class="flexslider__mini__image" src="images/slide2.jpg" height="400" alt="Slider Principal" />
                          </picture>
                    </li>
                    <li class="flexslider__mini__item slide__area-medica">
                          <picture class="flexslider__mini__picture">
                              <img class="flexslider__mini__image" src="images/slide3.jpg" height="400" alt="Slider Principal" />
                          </picture>
                    </li>
                    <li class="flexslider__mini__item slide__hotel">
                          <picture class="flexslider__mini__picture">
                              <img class="flexslider__mini__image" src="images/slide4.jpg" height="400" alt="Slider Principal" />
                          </picture>
                    </li>
                    <li class="flexslider__mini__item slide__consultorio">
                          <picture class="flexslider__mini__picture">
                              <img class="flexslider__mini__image" src="images/slide5.jpg" height="400" alt="Slider Principal" />
                          </picture>
                    </li>
                </ul>
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

export default function () {
	$('article.contenido__alenta.seccion__consultorios').hide('slow')
	$('article.contenido__alenta.seccion__areas').hide('slow')
	$('article.contenido__alenta.seccion__cirugia').hide('slow')
	$('article.contenido__alenta.seccion__hotel').hide('slow')
	$('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')

	$('.gotoalenta').click(function (e) {
		e.preventDefault()
		$('section.slider__container').show('slow')
		$('article.contenido__alenta.seccion__alenta').show('slow')
		$('article.contenido__alenta.seccion__consultorios').hide('slow')
		$('article.contenido__alenta.seccion__areas').hide('slow')
		$('article.contenido__alenta.seccion__cirugia').hide('slow')
		$('article.contenido__alenta.seccion__hotel').hide('slow')
		$('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')
	})

	$('.gotoconsultorio').click(function (e) {
		e.preventDefault()
		$('.seccion__consultorios').append(template)
		$('section.slider__container').hide('slow')
		$('article.contenido__alenta.seccion__alenta').hide('slow')
		$('article.contenido__alenta.seccion__consultorios').show('slow')
		$('article.contenido__alenta.seccion__areas').hide('slow')
		$('article.contenido__alenta.seccion__cirugia').hide('slow')
		$('article.contenido__alenta.seccion__hotel').hide('slow')
		$('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')
	})

	$('.gotomedicas').click(function (e) {
		e.preventDefault()
		$('.seccion__areas').append(template)
		$('section.slider__container').hide('slow')
		$('article.contenido__alenta.seccion__alenta').hide('slow')
		$('article.contenido__alenta.seccion__consultorios').hide('slow')
		$('article.contenido__alenta.seccion__areas').show('slow')
		$('article.contenido__alenta.seccion__cirugia').hide('slow')
		$('article.contenido__alenta.seccion__hotel').hide('slow')
		$('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')
	})

	$('.gotocirugias').click(function (e) {
		e.preventDefault()
		$('.seccion__cirugia').append(template)
		$('section.slider__container').hide('slow')
		$('article.contenido__alenta.seccion__alenta').hide('slow')
		$('article.contenido__alenta.seccion__consultorios').hide('slow')
		$('article.contenido__alenta.seccion__areas').hide('slow')
		$('article.contenido__alenta.seccion__cirugia').show('slow')
		$('article.contenido__alenta.seccion__hotel').hide('slow')
		$('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')
	})

	$('.gotohotel').click(function (e) {
		e.preventDefault()
		$('.seccion__hotel').append(template)
		$('section.slider__container').hide('slow')
		$('article.contenido__alenta.seccion__alenta').hide('slow')
		$('article.contenido__alenta.seccion__consultorios').hide('slow')
		$('article.contenido__alenta.seccion__areas').hide('slow')
		$('article.contenido__alenta.seccion__cirugia').hide('slow')
		$('article.contenido__alenta.seccion__hotel').show('slow')
		$('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').hide('slow')
	})

	$('.gotocontactanos').click(function (e) {
		e.preventDefault()
		$('.seccion__contacto').append(template)
		$('section.slider__container').hide('slow')
		$('article.contenido__alenta.seccion__alenta').hide('slow')
		$('article.contenido__alenta.seccion__consultorios').hide('slow')
		$('article.contenido__alenta.seccion__areas').hide('slow')
		$('article.contenido__alenta.seccion__cirugia').hide('slow')
		$('article.contenido__alenta.seccion__hotel').hide('slow')
		$('article.contenido__seccion.localizacion.contactenos.contacto.seccion__contacto').show('slow')
	})
}