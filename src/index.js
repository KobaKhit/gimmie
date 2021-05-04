// JS Goes here - ES6 supported

import "./css/main.css";

import { generateChart, generateLabels } from './charts.js';

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


var city_data = {
  datasets: [{
      data: [5539, 3000, 1210,1210],
      "backgroundColor":["#808c51","#565f35","#4680b4","#30567a"]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
  'Seattle Donations',
  'Seattle Match',
  'Philadelphia Donations',
  'Philadelphia Match'
  ]
};

var org_data = {
  datasets: [{
      data: [2429, 2129,1199, 1129,1220,500,598,1755],
      "backgroundColor":["#808c51","#565f35","#4680b4","#30567a","#D5A18E","#624CAB","#3B0D11"]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Shared Spaces',
    'FEEST',
    'Black Farmers Collective',
    'ACRS',
    'Hunger Free',
    'SEAMAAC',
    'Tilth Alliance',
    'Other'
  ]
};


generateChart('cityChart', city_data, '', 'left')
generateChart('orgChart', org_data, '', 'right')

$('#updated').append(new Date().toLocaleString()).css("fontSize", 13);