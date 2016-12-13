import $ from 'jquery'

var template = `
    <form name="contactform"  class="flexslider__form flexslider__form__principal form_test" id="slider-form" action="sendEmailSectionForm.php" method="post" >
          <div>
            <label for="form_name"></label>
            <input id="form_name" type="text" placeholder="Nombre Completo" name="name" required="required" title="Introduzca su Nombre">
          </div>
          <div>
            <label for="form_lastname"></label>
            <input id="form_lastname" type="text" placeholder="Apellido Completo" title="Introduzca su Apellido">
          </div>
          <div>
            <label for="form_email"></label>
            <input id="form_email" type="email" placeholder="Email" name="email" required="required" title="Introduzca su email">
          </div>
          <div>
            <label for="form_phone"></label>
            <input id="form_phone" type="tel"  placeholder="Teléfono" name="telephone">
          </div>
          <div><textarea id="" cols="20" rows="3"  placeholder="Mensaje" name="message"></textarea></div>
          <div><button type="submit">Enviar</button></div>
    </form>`
export default () => {
  $('.flexslider__picture').append(template)
}
