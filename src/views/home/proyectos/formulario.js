import $ from 'jquery'

const Formulario = `
<div class="row container blue-grey lighten-5 formulario-slide formulario-alenta">
  <form name="formulario" class="col s12" id="formularioSlide1">
    <div class="row">
      <div id="name-group" class="input-field col s6">
        <input id="name" name="name" type="text" >
        <label for="name">Nombre</label>
      </div>
      <div id="lastname-group" class="input-field col s6">
        <input id="lastname" name="lastname" type="text" >
        <label for="lastname">Apellido</label>
      </div>
    </div>
    <div class="row">
      <div id="email-group" class="input-field col s6">
        <input id="email" name="email" type="email" >
        <label for="email">Email</label>
      </div>
      <div id="phone-group" class="input-field col s6">
        <input id="phone" name="phone" type="tel" >
        <label for="phone">Teléfono</label>
      </div>
    </div>
    <div class="row">
      <div id="msg-group" class="input-field col s12">
        <textarea id="textarea1" name="textarea1" class="materialize-textarea"></textarea>
        <label for="textarea1">Mensaje</label>
      </div>
    </div>
    <div class="row center">
      <button type="submit" class="waves-effect waves-light btn" id="submit">Enviar</button>
    </div>
  </form>
</div>
`

export default () => {
  $('#formulario_alenta').append(Formulario)

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
    // const url = 'send.php'
    // console.log(URLprotocol + '//' + URLdomain + '/' + url)

    $.ajax({
      type: 'POST',
      url: 'send.php',
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
