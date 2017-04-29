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
    title: 'Alenta',
    text: 'Primer Centro de Servicios Médicos Ambulatorios y Complementarios de Colombia.'
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
export {Slide1, Slide2}
