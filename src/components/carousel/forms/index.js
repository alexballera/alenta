import $ from 'jquery'
import 'jquery-ui'
import {formSlide1} from './formSlides'

/* <form name="formulario" class="formulario__form flexslider__form flexslider__form__principal form_test" id="formularioSlide" method="post" action="sendMail.php" >
    <div id="name-group" class="formulario__item">
      <label for="name"></label>
      <input type="text" placeholder="Nombre" name="name" id="name">
    </div>
    <div id="lastname-group" class="formulario__item">
      <label for="lastname"></label>
      <input type="text" placeholder="Apellido" name="lastname" id="lastname">
    </div>
    <div id="email-group" class="formulario__item">
      <label for="email"></label>
      <input type="email" placeholder="Email" name="email" id="email">
    </div>
    <div id="phone-group" class="formulario__item">
      <label for="phone"></label>
      <input type="tel"  placeholder="Teléfono" name="phone" id="phone">
    </div>
    <div id="msg-group" class="formulario__item">
      <label for="msg"></label>
      <textarea id="msg" cols="30" rows="4"  placeholder="Mensaje" name="msg"></textarea>
    </div>
    <div class="formulario__item">
      <button type="submit" class="submit" id="submit">Enviar</button>
    </div>
    <div class="formulario-slider-contacto">
      <div class="formulario-slider-contacto-item">
        <h3>Sala de negocios:</h3>
        <address>
          Carrera 18 # 80-74<br>
          Bogota-Colombia
        </address>
      </div>
      <div class="formulario-slider-contacto-item">
        <h3>Números de contacto:</h3>
        <address>
          Teléfono: 6949729 <br>
          Celular: 310 2 47 62 54
        </address>
      </div>
    </div>
</form> */

export default () => {
  $('.carousel-item > #formSlide1').append(formSlide1)
  // $('.carousel-item > #formSlide2').append(formSlide2)

  $('#dialog').hide()

  $('#formularioSlide1').submit(function (event) {
    $('.form-group').removeClass('has-error') // remove the error class
    $('.help-block').remove() // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
    const formData = {
      'name': $('input#name').val(),
      'lastname': $('input#lastname').val(),
      'email': $('input#email').val(),
      'phone': $('input#phone').val(),
      'msg': $('textarea#msg').val()
    }
    // const URLprotocol = window.location.protocol
    // const URLdomain = window.location.host
    const url = 'send.php'
    // console.log(URLprotocol + '//' + URLdomain + '/' + url)

    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      encode: true,
      statusCode: {
        404: () => {
          console.log('page not found')
        }
      },
      success: () => {
        console.log('Success')
      }
    })
    .done((data) => {
      console.log(data)
      if (!data.success) {
        if (data.errors.name) {
          $('#name-group').addClass('has-error')
          $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>')
        }
        if (data.errors.email) {
          $('#email-group').addClass('has-error')
          $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>')
        }
      } else {
          // ALL GOOD! just show the success message!
          // $('form').append('<div class="alert alert-success">' + data.message + '</div>');

          // usually after form submission, you'll want to redirect
          // window.location = '/thank-you'; // redirect a user to another page
        console.log(data.message)
        $('#dialog').dialog({
          show: {
            effect: 'explode',
            duration: 700
          },
          hide: {
            effect: 'explode',
            duration: 700
          }
        })
        $('input#name').val('')
        $('input#lastname').val('')
        $('input#email').val('')
        $('input#phone').val('')
        $('textarea#msg').val('')
      }
    })
    .fail((data) => {
      console.log('Error')
      console.log(data)
    })
    .always(() => {
      console.log('complete')
    })
    event.preventDefault()
  })
}
