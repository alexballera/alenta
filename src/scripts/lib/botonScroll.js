import $ from 'jquery'
import jQuery from 'jquery'

export default function (){
  // $(document).scroll(function(e){
  //   document.title = $(document).scrollTop()
  // })

  $('.gotoalenta').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'713'},500);
  })

  $('.gotoconsultorio').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'7429'},500);
  })

  $('.gotomedicas').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'7981'},500);
  })

  $('.gotocirugias').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'8523'},500);
  })

  $('.gotohotel').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'9068'},500);
  })

  $('.gotocontactanos').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'9710'},500);
  })

  $('.gotolocalizacion').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'1366'},500);
  })

  $('.gotoproyectos').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'2157'},500);
  })

  $('.gotoetapa1').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'2898'},500);
  })

  $('.gotoetapa2').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'3851'},500);
  })

  $('.gotoetapa3').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'4745'},500);
  })

  $('.gotopromotores').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'5870'},500);
  })

  $('.gotocontacto').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'6301'},500);
  })

  $('.gototop').click(function(e){
    e.preventDefault()
    $('body,html').animate({scrollTop:'0'},1500);
  })

}
