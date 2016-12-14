import $ from 'jquery'
import queryUi from '../vendors/jquery-ui.js'

var template = `
<div id="formularioslide">
    <form name="contactform" action="send.php" id="slider-form" class="flexslider__form flexslider__form__principal form_test" method="post" >
          <div>
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Nombre Completo" required="required" title="Introduzca su Nombre">
          </div>
          <div>
            <label for="lastname"></label>
            <input type="text" placeholder="Apellido Completo" name="lastname" id="lastname" title="Introduzca su Apellido">
          </div>
          <div>
            <label for="email"></label>
            <input type="email" placeholder="Email" name="email" id="email" required="required" title="Introduzca su email">
          </div>
          <div>
            <label for="phone"></label>
            <input type="tel" placeholder="Teléfono" name="phone" id="phone">
          </div>
          <div>
            <label for="message"></label>
            <textarea cols="20" rows="3"  placeholder="Mensaje" name="message" id="message"></textarea>
          </div>
          <div><button type="submit" id="submit">Enviar</button></div>
    </form>
</div>`

export default () => {
  $('.flexslider__picture').append(template)
}
