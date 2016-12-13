import $ from 'jquery'

var addForm = $('.add_form')

var template = `
<div class="formulario">
  <h3 class="formulario__titulo">Contáctenos</h3>
  <p class="formulario__texto">
    Uno de nuestros asesores le orientará y resolver á sus inquietudes.
  </p>
  <form name="contactform" class="formulario__section form_test" id="formulario" action="send.php" method="post" >
      <div>
        <label for="form_name"></label>
        <input type="text" placeholder="Nombre" name="name" required="required" id="form_name">
      </div>
      <div>
        <label for="form_email"></label>
        <input type="email" placeholder="Email" name="email" required="required" id="form_email">
      </div>
      <div>
        <label for="form_phone"></label>
        <input type="tel"  placeholder="Teléfono" name="telephone" id="form_phone">
      </div>
      <div>
        <textarea id="" cols="30" rows="10"  placeholder="Mensaje" name="message"></textarea>
      </div>
      <p class="formulario__texto politicas">
        Acepto políticas de tratamiento de datos personales
      </p>
      <div>
        <button type="submit" class="botonenviar">Enviar</button>
      </div>
  </form>
  <div id="success" style="display:none">
      Sus datos han sido recibidos con éxito.
  </div>
  <div id="fracaso" style="display:none">
      Se ha producido un error durante el envío de datos.
  </div>
</div>`
export default () => {
  addForm.append(template)
}
