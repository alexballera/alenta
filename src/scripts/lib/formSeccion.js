import $ from 'jquery'
import queryUi from '../vendors/jquery-ui.js'

var formSection = `
<div class="formulario">
  <h3 class="formulario__titulo">Contáctenos</h3>
  <p class="formulario__texto">
    Uno de nuestros asesores le orientará y resolver a sus inquietudes.
  </p>
  <form name="formulario" class="formulario__section form_test" id="formulario" action="formularios.php" method="post" >
      <div>
        <label for="name"></label>
        <input type="text" placeholder="Nombre" name="name" required="required" id="nameSeccion">
      </div>
      <div>
        <label for="email"></label>
        <input type="email" placeholder="Email" name="email" required="required" id="emailSeccion">
      </div>
      <div>
        <label for="phone"></label>
        <input type="tel"  placeholder="Teléfono" name="phone" id="phoneSeccion">
      </div>
      <div>
        <label for="msg"></label>
        <textarea id="msg" cols="30" rows="10"  placeholder="Mensaje" name="msgSeccion"></textarea>
      </div>
      <p class="formulario__texto politicas">
        Acepto políticas de tratamiento de datos personales
      </p>
      <div>
        <button type="submit" class="botonenviar">Enviar</button>
      </div>
  </form>
</div>`

export default () => {
  $('.add_form').append(formSection)

  $('#dialog').hide()

  $('form').submit(function(event) {

    $('.form-group').removeClass('has-error'); // remove the error class
    $('.help-block').remove(); // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'      : $('input#nameSeccion').val(),
            'lastname'  : $('input#lastnameSeccion').val(),
            'email'     : $('input#emailSeccion').val(),
            'phone'     : $('input#phoneSeccion').val(),
            'msg'       : $('textarea#msgSeccion').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'formularios.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
                if ( ! data.success) {

                  // handle errors for name ---------------
                  if (data.errors.name) {
                      $('#name-group').addClass('has-error'); // add the error class to show red input
                      $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
                  }

                  // handle errors for email ---------------
                  if (data.errors.email) {
                      $('#email-group').addClass('has-error'); // add the error class to show red input
                      $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
                  }

                } else {

                  // ALL GOOD! just show the success message!
                  // $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                  // usually after form submission, you'll want to redirect
                  // window.location = '/thank-you'; // redirect a user to another page
                  console.log(data.message)
                  $( "#dialog" ).dialog({
                    show: {
                      effect: "explode",
                      duration: 1000
                    },
                    hide: {
                      effect: "explode",
                      duration: 1000
                    }
                  });

              }


            })

            // using the fail promise callback
            .fail(function(data) {

                // show any errors
                // best to remove for production
                console.log(data);
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

}
