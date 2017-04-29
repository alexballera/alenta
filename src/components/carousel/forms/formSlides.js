'use strict'

const Data = {
  formSlide1: {
    first_name: 'first_name1',
    last_name: 'last_name1',
    email: 'email1',
    telephone: 'telephone1',
    textarea1: 'textarea1'
  },
  formSlide2: {
    first_name: 'first_name2',
    last_name: 'last_name2',
    email: 'email2',
    telephone: 'telephone2',
    textarea1: 'textarea2'
  }
}

const formSlide1 = `
<div class="row formulario-slide">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide1.first_name} type="text" >
        <label for=${Data.formSlide1.first_name}>Nombre</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide1.last_name} type="text" >
        <label for=${Data.formSlide1.last_name}>Apellido</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide1.email} type="email" >
        <label for=${Data.formSlide1.email}>Email</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide1.telephone} type="tel" >
        <label for=${Data.formSlide1.telephone}>Teléfono</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <textarea id=${Data.formSlide1.textarea1} class="materialize-textarea"></textarea>
        <label for=${Data.formSlide1.textarea1}>Mensaje</label>
      </div>
    </div>
    <div class="row center">
      <button type="submit" class="waves-effect waves-light btn" id="submit">Enviar</button>
    </div>
  </form>
</div>
`
const formSlide2 = `
<div class="row formulario-slide">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide2.first_name} type="text" >
        <label for=${Data.formSlide2.first_name}>Nombre</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide2.last_name} type="text" >
        <label for=${Data.formSlide2.last_name}>Apellido</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide2.email} type="email" >
        <label for=${Data.formSlide2.email}>Email</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide2.telephone} type="tel" >
        <label for=${Data.formSlide2.telephone}>Teléfono</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <textarea id=${Data.formSlide2.textarea1} class="materialize-textarea"></textarea>
        <label for=${Data.formSlide2.textarea1}>Mensaje</label>
      </div>
    </div>
    <div class="row center">
      <button type="submit" class="waves-effect waves-light btn" id="submit">Enviar</button>
    </div>
  </form>
</div>
`
export {Data, formSlide1, formSlide2}
