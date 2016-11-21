import headerLittle from './lib/headerLittle'
import $ from 'jquery'

(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad() {
    headerLittle()
  }
})()
