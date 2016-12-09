import $ from 'jquery'

export default () => {
  var template = `
      <div class="formulario">
          <h3 class="formulario__titulo">Contáctenos</h3>
          <p class="formulario__texto">
            Uno de nuestros asesores le orientará y resolver á sus inquietudes.
          </p>
          <form class="formulario__section" id="formulario" action="#" method="post" >
              <div>
                <label for="Nombre"></label>
                <input type="text" placeholder="Nombre">
              </div>
              <div>
                <label for="E-mail"></label>
                <input type="email" placeholder="Email">
              </div>
              <div>
                <label for="Teléfono"></label>
                <input type="text"  placeholder="Teléfono">
              </div>
              <div>
                <textarea name="Mensaje" id="" cols="30" rows="10"  placeholder="Mensaje"></textarea>
              </div>
              <p class="formulario__texto politicas">
                Acepto políticas de tratamiento de datos personales
              </p>
              <div>
                <button type="submit">Enviar</button>
              </div>
          </form>
        </div>`
  $('.add_form').append(template)
}
