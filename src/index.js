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
      data: [2719, 2719, 560,560],
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
      data: [2600, 338,2000, 200,200,400,200,620],
      "backgroundColor":["#808c51","#565f35","#4680b4","#30567a","#D5A18E","#624CAB","#3B0D11"]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Shared Spaces',
    'Tilth Alliance',
    'FEEST',
    'ACRS',
    'Soil Generation',
    'SEAMAAC',
    'Villa Comunitaria',
    'Other'
  ]
};


generateChart('cityChart', city_data, '', 'left')
generateChart('orgChart', org_data, '', 'right')

$('#updated').append(new Date().toLocaleString()).css("fontSize", 13);