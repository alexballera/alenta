'use strict'
import yo from 'yo-yo'

const data = {
  slide1: {
    img: {
      src: 'images/slide1.jpg',
      alt: 'Alenta'
    },
    title: 'Alenta',
    text: 'Primer Centro de Servicios Médicos Ambulatorios y Complementarios de Colombia.'
  },
  slide2: {
    img: {
      src: 'images/slide2.jpg',
      alt: 'Alenta'
    },
    title: 'Salas de Cirugía',
    text: 'Podrán acceder los médicos cirujanos para sus procedimientos ambulatorios a través de los convenios que se establezcan.'
  },
  slide3: {
    img: {
      src: 'images/slide3.jpg',
      alt: 'Alenta'
    },
    title: 'Áreas médicas y oficinas de servicios médicos',
    text: 'Hasta 549 m2 por piso en la etapa 2 Hasta 377 m2 por piso en la etapa 3'
  },
  slide4: {
    img: {
      src: 'images/slide4.jpg',
      alt: 'Alenta'
    },
    title: 'Hotel',
    text: 'Diseñado, especialmente para la estadía corta de pacientes y familiares que viajan a sus tratamientos médicos.'
  },
  slide5: {
    img: {
      src: 'images/slide5.jpg',
      alt: 'Alenta'
    },
    title: 'Consultorios',
    text: 'Primer centro médico ambulatorio de Colombia Desde 29 m2 en adelante'
  }
}

const Slide1 = yo`
<picture class="carousel-item" href="#one!">
    <img src=${data.slide1.img.src} height="600" alt=${data.slide1.img.alt} />
    <div class="carousel-item-text text-right">
      <h3>${data.slide1.title}</h3>
      <p>${data.slide1.text}</p>
    </div>
    <div id="formSlide1" class="formulario formulario-slider formulario-container">
    </div>
</picture>
`
const Slide2 = yo`
<picture class="carousel-item" href="#one!">
    <img src=${data.slide2.img.src} height="600" alt=${data.slide2.img.alt} />
    <div class="carousel-item-text text-right">
      <h3>${data.slide2.title}</h3>
      <p>${data.slide2.text}</p>
    </div>
    <div id="formSlide2" class="formulario formulario-slider formulario-container">
    </div>
</picture>
`
const Slide3 = yo`
<picture class="carousel-item" href="#one!">
    <img src=${data.slide3.img.src} height="600" alt=${data.slide3.img.alt} />
    <div class="carousel-item-text text-right">
      <h3>${data.slide3.title}</h3>
      <p>${data.slide3.text}</p>
    </div>
    <div id="formSlide3" class="formulario formulario-slider formulario-container">
    </div>
</picture>
`
const Slide4 = yo`
<picture class="carousel-item" href="#one!">
    <img src=${data.slide4.img.src} height="600" alt=${data.slide4.img.alt} />
    <div class="carousel-item-text text-right">
      <h3>${data.slide4.title}</h3>
      <p>${data.slide4.text}</p>
    </div>
    <div id="formSlide4" class="formulario formulario-slider formulario-container">
    </div>
</picture>
`
const Slide5 = yo`
<picture class="carousel-item" href="#one!">
    <img src=${data.slide5.img.src} height="600" alt=${data.slide5.img.alt} />
    <div class="carousel-item-text text-right">
      <h3>${data.slide5.title}</h3>
      <p>${data.slide5.text}</p>
    </div>
    <div id="formSlide5" class="formulario formulario-slider formulario-container">
    </div>
</picture>
`
export {Slide1, Slide2, Slide3, Slide4, Slide5}
