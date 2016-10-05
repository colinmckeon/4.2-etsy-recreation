// //
// // alert ("colin");


var $ = require('jquery');
var Handlebars = require("handlebars");



//NOTES
// var source = $('#id').html();
// var template = handlebars.compile(source);
//
// //use .append instead of html to continue stamping, otherwise .html will replace the first
// $('#id').html(template());
// $('#id').append(template());
//NOTES^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^























/************************************************
JSON
************************************************/
var url = 'https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=golf&includes=Images,Shop&sort_on=score';

fetchJSONP(url, run);

function run(data) {
  var golfItems = data.results;
  console.log(data);
  listGolfItems(golfItems)
};

function listGolfItems(loopItems){
  var source = $('#individualProduct').html();

  var template = Handlebars.compile(source);

  loopItems.forEach(function(golfItem){

    var productHTML = $(template(golfItem));

    $('#productContainer').append(productHTML);

  });
};


/*
  (url: String, callback: Function) -> undefined

  Execute a callback function with the JSON results from the url specified.

  Examples
      var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=yarn&includes=Images,Shop";

      fetchJSONP(url, function(data) {
        // do something with data
      });

      // OR

      function logData(data) {
        console.log(data);
      }

      fetchJSONP(url, logData);
*/
function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
