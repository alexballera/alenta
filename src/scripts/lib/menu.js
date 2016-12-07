import $ from 'jquery'

var navbar = $('#navbar')

export default function () {
  $('.third__level, .second__level').hide()

  navbar.find('#dropdown__firstlevel').on({
    'mouseover': function () {
      $('.second__level').show('400')
    },
    'mouseleave': function () {
      $('.second__level').hide('400')
    }
  })

  navbar.find('#item__dropdown').on({
    'mouseover': function () {
      $('.third__level').show('400')
    },
    'mouseleave': function () {
      $('.third__level').hide('400')
    }
  })
}
