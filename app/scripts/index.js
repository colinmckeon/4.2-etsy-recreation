//
// alert ("colin");


var $ = require('jquery');
var handlebars = require("handlebars");


var source = $('#id').html();
var template = handlebars.compile(source);



//use .append instead of html to continue stamping, otherwise .html will replace the first
$('#id').html(template());
$('#id').append(template());

/************************************************
JSON
************************************************/
var url = 'https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=golf&includes=Images,Shop&sort_on=score';

function displayProducts(data) {
  console.log(data);
};

fetchJSONP(url, displayProducts);
/************************************************
JSON ^^^^^^^^^
************************************************/
