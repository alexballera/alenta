import $ from 'jquery'

export default () => {
  $('.form_test').html5form({
    allBrowsers: true,
    responseDiv: '#response',
    messages: 'es',
    method: 'GET',
    colorOn: '#6b6764',
    colorOff: '#0d85a5'
  })
}
