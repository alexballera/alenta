import $ from 'jquery'

export default function () {
  var template = `
      <form class="flexslider__form" id="slider-form" action="#" method="post" >
            <div>
              <label for="Nombre"></label>
              <input type="text" placeholder="Nombre Completo" required="required">
            </div>
            <div>
              <label for="Nombre"></label>
              <input type="text" placeholder="Apellido Completo" required="required">
            </div>
            <div>
              <label for="E-mail"></label>
              <input type="email" placeholder="Email" required="required">
            </div>
            <div>
              <label for="Teléfono"></label>
              <input type="text"  placeholder="Teléfono">
            </div>
            <div><textarea name="Mensaje" id="" cols="20" rows="3"  placeholder="Mensaje"></textarea></div>
            <div><button type="submit">Enviar</button></div>
      </form>`
  $('.flexslider__picture').append(template)
}
