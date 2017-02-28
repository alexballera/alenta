import $ from 'jquery'
import '../vendors/jquery-ui.js'

var formSection = `
<form name="formulario" class="formulario__section" id="formularioAlenta" action="sendMail.php" method="post" >
    <div id="nameAlenta-group" class="form-item form-item-name">
      <label for="nameAlenta"></label>
      <input type="text" placeholder="Nombre" name="nameAlenta" id="nameAlenta">
    </div>
    <div id="lastnameAlenta-group" style="display:none;">
      <label for="lastnameAlenta"></label>
      <input type="text" placeholder="Apellido" name="lastnameAlenta" id="lastnameAlenta">
    </div>
    <div id="emailAlenta-group" class="form-item form-item-email">
      <label for="emailAlenta"></label>
      <input type="email" placeholder="Email" name="emailAlenta" id="emailAlenta">
    </div>
    <div id="phoneAlenta-group" class="form-item form-item-phone">
      <label for="phoneAlenta"></label>
      <input type="tel"  placeholder="Teléfono" name="phoneAlenta" id="phoneAlenta">
    </div>
    <div id="msgAlenta-group" class="form-item form-item-message">
      <label for="msgAlenta"></label>
      <textarea cols="30" rows="10"  placeholder="Mensaje" name="msgAlenta" id="msgAlenta" ></textarea>
    </div>
    <p class="formulario__texto politicas">
      Acepto políticas de tratamiento de datos personales
    </p>
    <div class="formulario__item">
      <button type="submit" class="submit" id="submit">Enviar</button>
    </div>
</form>`

export default () => {
  $('#formulario_alenta').append(formSection)

  $('#formularioAlenta').submit(function (event) {
    $('.form-group').removeClass('has-error') // remove the error class
    $('.help-block').remove() // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      'name': $('input#nameAlenta').val(),
      'email': $('input#emailAlenta').val(),
      'phone': $('input#phoneAlenta').val(),
      'msg': $('textarea#msgAlenta').val()
    }

        // process the form
    $.ajax({
      type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url: 'sendMail.php', // the url where we want to POST
      data: formData, // our data object
      dataType: 'json', // what type of data do we expect back from the server
      encode: true
    })
            // using the done promise callback
            .done(function (data) {
                // log data to the console so we can see
              console.log(data)

                // here we will handle errors and validation messages
              if (!data.success) {
                  // handle errors for name ---------------
                if (data.errors.name) {
                  $('#nameAlenta-group').addClass('has-error') // add the error class to show red input
                  $('#nameAlenta-group').append('<div class="help-block">' + data.errors.name + '</div>') // add the actual error message under our input
                }

                  // handle errors for email ---------------
                if (data.errors.email) {
                  $('#emailAlenta-group').addClass('has-error') // add the error class to show red input
                  $('#emailAlenta-group').append('<div class="help-block">' + data.errors.email + '</div>') // add the actual error message under our input
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
                $('input#nameAlenta').val('')
                $('input#lastnameAlenta').val('')
                $('input#emailAlenta').val('')
                $('input#phoneAlenta').val('')
                $('textarea#msgAlenta').val('')
              }
            })

            // using the fail promise callback
            .fail(function (data) {
                // show any errors
                // best to remove for production
              console.log(data)
            })

        // stop the form from submitting the normal way and refreshing the page
    event.preventDefault()
  })
}
