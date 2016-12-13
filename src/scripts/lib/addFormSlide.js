import $ from 'jquery'

var template = `
<div id="formularioslide">
    <form name="contactform" action="send.php"  class="flexslider__form flexslider__form__principal form_test" id="slider-form" method="post" >
          <div>
            <label for="form_name"></label>
            <input id="form_name" type="text" placeholder="Nombre Completo" name="form_name" required="required" title="Introduzca su Nombre">
          </div>
          <div>
            <label for="form_lastname"></label>
            <input id="form_lastname" type="text" placeholder="Apellido Completo" name="form_lastname" title="Introduzca su Apellido">
          </div>
          <div>
            <label for="form_email"></label>
            <input id="form_email" type="email" placeholder="Email" name="form_email" required="required" title="Introduzca su email">
          </div>
          <div>
            <label for="form_phone"></label>
            <input id="form_phone" type="tel"  placeholder="Teléfono" name="form_phone">
          </div>
          <div>
            <label for="form_msg"></label>
            <textarea id="form_msg" cols="20" rows="3"  placeholder="Mensaje" name="form_msg"></textarea>
          </div>
          <div><button type="submit" id="submit" name="submit">Enviar</button></div>
    </form>
</div>
<div id="success" style="display:none;">
    Sus datos han sido recibidos con éxito.
</div>
<div id="err" style="display:none;">
    Se ha producido un error durante el envío de datos.
</div>`
export default () => {
  $('.flexslider__picture').append(template)
}
