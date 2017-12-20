const { JsModel } = require('javascript-models');
const { Sepomex } = require('../models/Sepomex.js');
const { SepomexesApi } = require('../models/SepomexesApi');
const { performGetRequest } = require('../form-plugin/application_helper.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



(function( $ ) {
  $.fn.autocompleteForm = function(options) {
    var opts = $.extend( {}, $.fn.autocompleteForm.defaults, options );
    $("#AddressZipCode").focusout(function(){
      debugger
      /*Sepomex.where({zip_code: 64000}).then((response) => {
          $("#AddressCity").val("ANAPAO")
        }).catch((error) => {
          console.log("ERROR")
          console.log(error);
      });*/
    });

    $.fn.autocompleteForm.defaults = {
      suburbContainer: "#AddressSuburb",
      cityContainer: "#AddressCity",
      stateContainer: "#AddressState",
      zipCodeContainer: "#AddressZipCode"
    };

  }


}( jQuery ));


