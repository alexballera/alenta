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
        <label for=""></label>
        <input type="text" placeholder="Nombre" name="" required="required" id="">
      </div>
      <div>
        <label for=""></label>
        <input type="email" placeholder="Email" name="" required="required" id="">
      </div>
      <div>
        <label for=""></label>
        <input type="tel"  placeholder="Teléfono" name="" id="">
      </div>
      <div>
        <textarea id="" cols="30" rows="10"  placeholder="Mensaje" name=""></textarea>
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
