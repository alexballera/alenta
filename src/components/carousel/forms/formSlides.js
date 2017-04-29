'use strict'

const Data = {
  formSlide1: {
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    textarea1: 'msg'
  },
  formSlide2: {
    name: 'name2',
    lastname: 'lastname2',
    email: 'email2',
    phone: 'phone2',
    textarea1: 'msg2'
  }
}

const formSlide1 = `
<div class="row formulario-slide">
  <form name="formulario" class="col s12" id="formularioSlide1">
    <div class="row">
      <div id="name-group" class="input-field col s6">
        <input id=${Data.formSlide1.name} name=${Data.formSlide1.name} type="text" >
        <label for=${Data.formSlide1.name}>Nombre</label>
      </div>
      <div id="lastname-group" class="input-field col s6">
        <input id=${Data.formSlide1.lastname} name=${Data.formSlide1.lastname} type="text" >
        <label for=${Data.formSlide1.lastname}>Apellido</label>
      </div>
    </div>
    <div class="row">
      <div id="email-group" class="input-field col s6">
        <input id=${Data.formSlide1.email} name=${Data.formSlide1.email} type="email" >
        <label for=${Data.formSlide1.email}>Email</label>
      </div>
      <div id="phone-group" class="input-field col s6">
        <input id=${Data.formSlide1.phone} name=${Data.formSlide1.phone} type="tel" >
        <label for=${Data.formSlide1.phone}>Teléfono</label>
      </div>
    </div>
    <div class="row">
      <div id="msg-group" class="input-field col s12">
        <textarea id=${Data.formSlide1.textarea1} name=${Data.formSlide1.textarea1} class="materialize-textarea"></textarea>
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
  <form name="formulario" class="col s12" id="formularioSlide2">
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide2.name} type="text" >
        <label for=${Data.formSlide2.name}>Nombre</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide2.lastname} type="text" >
        <label for=${Data.formSlide2.lastname}>Apellido</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide2.email} type="email" >
        <label for=${Data.formSlide2.email}>Email</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide2.phone} type="tel" >
        <label for=${Data.formSlide2.phone}>Teléfono</label>
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
