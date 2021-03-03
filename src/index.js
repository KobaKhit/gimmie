// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

window.location.pathname;

// nav active
$(function($) {
    let url = window.location.href;
    $('#nav > a').each(function() {
      if (this.href === url) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });