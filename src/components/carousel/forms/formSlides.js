'use strict'
import contactSlide1 from './contact'
import botonSubmit from './botonSubmit'

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
  },
  formSlide3: {
    name: 'name3',
    lastname: 'lastname3',
    email: 'email3',
    phone: 'phone3',
    textarea1: 'msg3'
  },
  formSlide4: {
    name: 'name4',
    lastname: 'lastname4',
    email: 'email4',
    phone: 'phone4',
    textarea1: 'msg4'
  },
  formSlide5: {
    name: 'name5',
    lastname: 'lastname5',
    email: 'email5',
    phone: 'phone5',
    textarea1: 'msg5'
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
    ${botonSubmit}
    ${contactSlide1}
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
    ${botonSubmit}
    ${contactSlide1}
  </form>
</div>
`
const formSlide3 = `
<div class="row formulario-slide">
  <form name="formulario" class="col s12" id="formularioSlide2">
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide3.name} type="text" >
        <label for=${Data.formSlide3.name}>Nombre</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide3.lastname} type="text" >
        <label for=${Data.formSlide3.lastname}>Apellido</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide3.email} type="email" >
        <label for=${Data.formSlide3.email}>Email</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide3.phone} type="tel" >
        <label for=${Data.formSlide3.phone}>Teléfono</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <textarea id=${Data.formSlide3.textarea1} class="materialize-textarea"></textarea>
        <label for=${Data.formSlide3.textarea1}>Mensaje</label>
      </div>
    </div>
    ${botonSubmit}
    ${contactSlide1}
  </form>
</div>
`
const formSlide4 = `
<div class="row formulario-slide">
  <form name="formulario" class="col s12" id="formularioSlide2">
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide4.name} type="text" >
        <label for=${Data.formSlide4.name}>Nombre</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide4.lastname} type="text" >
        <label for=${Data.formSlide4.lastname}>Apellido</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide4.email} type="email" >
        <label for=${Data.formSlide4.email}>Email</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide4.phone} type="tel" >
        <label for=${Data.formSlide4.phone}>Teléfono</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <textarea id=${Data.formSlide4.textarea1} class="materialize-textarea"></textarea>
        <label for=${Data.formSlide4.textarea1}>Mensaje</label>
      </div>
    </div>
    ${botonSubmit}
    ${contactSlide1}
  </form>
</div>
`
const formSlide5 = `
<div class="row formulario-slide">
  <form name="formulario" class="col s12" id="formularioSlide2">
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide5.name} type="text" >
        <label for=${Data.formSlide5.name}>Nombre</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide5.lastname} type="text" >
        <label for=${Data.formSlide5.lastname}>Apellido</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id=${Data.formSlide5.email} type="email" >
        <label for=${Data.formSlide5.email}>Email</label>
      </div>
      <div class="input-field col s6">
        <input id=${Data.formSlide5.phone} type="tel" >
        <label for=${Data.formSlide5.phone}>Teléfono</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <textarea id=${Data.formSlide5.textarea1} class="materialize-textarea"></textarea>
        <label for=${Data.formSlide5.textarea1}>Mensaje</label>
      </div>
    </div>
    ${botonSubmit}
    ${contactSlide1}
  </form>
</div>
`
export {Data, formSlide1, formSlide2, formSlide3, formSlide4, formSlide5}
