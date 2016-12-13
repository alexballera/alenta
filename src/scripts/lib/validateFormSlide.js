import $ from 'jquery'

export default () => {

  var form = $('#slider-form')

  var data = {
    name: form.find("#form_name").val(),
    lastname: form.find("#form_lastname").val(),
    telephone: form.find("#form_phone").val(),
    email: form.find("#form_email").val(),
    message: form.find("#form_msg").val()
  };

  form.find('#success').hide()
  form.find('#err').hide()


  $('input#submit').click(function() {
    console.log('Me hicieron click')
    $.ajax({
        type: "POST",
        url: "./send.php",
        data: data,
        success: function(){
            // $('#success').show('slow');
            console.log('Éxito')
            console.log(data)
        },
        error: function(){
          console.log('Error')
        }
    })
    return false;
  })







  // function validaForm(){
      // Campos de texto
    // if($("#form_name").val() == ""){
    //     alert("El campo Nombre no puede estar vacío.");
    //     $("#form_name").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
    //     return false;
    // }
    // if($("#apellidos").val() == ""){
    //     alert("El campo Apellidos no puede estar vacío.");
    //     $("#apellidos").focus();
    //     return false;
    // }
  //   if($("#form_email").val() == ""){
  //       alert("El campo Dirección no puede estar vacío.");
  //       $("#form_email").focus();
  //       return false;
  //   }
  //
  //   return true; // Si todo está correcto
  // }

  // $("#botonenviar").click( function() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
  //     alert('click')
  //     if(validaForm()){                               // Primero validará el formulario.
  //         $.post("send.php",$("#slider-form").serialize(),function(res){
  //             $("#formularioslide").fadeOut("slow");   // Hacemos desaparecer el div "formulario" con un efecto fadeOut lento.
  //             if(res == 1){
  //                 $("#exito").delay(500).fadeIn("slow");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
  //             } else {
  //                 $("#fracaso").delay(500).fadeIn("slow");    // Si no, lo mismo, pero haremos aparecer el div "fracaso"
  //             }
  //         });
  //     }
  // });
}
