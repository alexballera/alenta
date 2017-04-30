import $ from 'jquery'
import {formSlide1, formSlide2, formSlide3, formSlide4, formSlide5} from './formSlides'

export default () => {
  $('.carousel-item > #formSlide1').append(formSlide1)
  $('.carousel-item > #formSlide2').append(formSlide2)
  $('.carousel-item > #formSlide3').append(formSlide3)
  $('.carousel-item > #formSlide4').append(formSlide4)
  $('.carousel-item > #formSlide5').append(formSlide5)

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
