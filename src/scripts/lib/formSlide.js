import $ from 'jquery'
import queryUi from '../vendors/jquery-ui.js'

var formSlide = `
<form name="formulario" class="formulario__form flexslider__form flexslider__form__principal form_test" id="formularioSlide" method="post" action="sendMail.php" >
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
</form>`

export default () => {
  $('.flexslider__picture>.formulario').append(formSlide)

  $('#dialog').hide()

  $('#formularioSlide').submit(function(event) {

    $('.form-group').removeClass('has-error'); // remove the error class
    $('.help-block').remove(); // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'      : $('input#name').val(),
            'lastname'  : $('input#lastname').val(),
            'email'     : $('input#email').val(),
            'phone'     : $('input#phone').val(),
            'msg'       : $('textarea#msg').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'sendMail.php', // the url where we want to POST
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
                      duration: 700
                    },
                    hide: {
                      effect: "explode",
                      duration: 700
                    }
                  });
                  $('input#name').val('')
                  $('input#lastname').val('')
                  $('input#email').val('')
                  $('input#phone').val('')
                  $('textarea#msg').val('')

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
