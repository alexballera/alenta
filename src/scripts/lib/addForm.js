import $ from 'jquery'

var addForm = $('.add_form')

var template = `
<div class="formulario">
  <h3 class="formulario__titulo">Contáctenos</h3>
  <p class="formulario__texto">
    Uno de nuestros asesores le orientará y resolver á sus inquietudes.
  </p>
  <form name="contactform" class="formulario__section form_test" id="formulario" action="mail.php" method="post" >
      <div>
        <label for="contactName"></label>
        <input type="text" placeholder="Nombre" name="contactName" required="required" id="contactName">
      </div>
      <div>
        <label for="contactEmail"></label>
        <input type="email" placeholder="Email" name="contactEmail" required="required" id="contactEmail">
      </div>
      <div>
        <label for="contactPhone"></label>
        <input type="tel"  placeholder="Teléfono" name="contactPhone" id="contactPhone">
      </div>
      <div>
        <label for="contactMessage"></label>
        <textarea id="contactMessage" cols="30" rows="10"  placeholder="Mensaje" name="contactMessage"></textarea>
      </div>
      <p class="formulario__texto politicas">
        Acepto políticas de tratamiento de datos personales
      </p>
      <div>
        <button type="submit" class="botonenviar">Enviar</button>
      </div>
  </form>
  <div id="dialog" title="Alenta" class="formulario__dialog">
    <p>Tu mensaje ha sido enviado, a la brevedad posible uno de nuestros agentes se estará comunicando con usted</p>
  </div>
</div>`
export default () => {
  addForm.append(template)
}
