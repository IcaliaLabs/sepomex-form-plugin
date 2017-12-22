const { JsModel } = require('javascript-models');
const { Sepomex } = require('../models/Sepomex.js');
const { SepomexesApi } = require('../models/SepomexesApi');
const { performGetRequest } = require('../form-plugin/application_helper.js');
var axios = require('axios')

(function( $ ) {
  $.fn.autocompleteForm = function(options) {

    $.fn.autocompleteForm.defaults = {
      suburbContainer: "#AddressSuburb",
      cityContainer: "#AddressCity",
      stateContainer: "#AddressState",
      zipCodeContainer: "#AddressZipCode"
    };

    var opts = $.extend( {}, $.fn.autocompleteForm.defaults, options );

    function completeCity(response){
      $($.fn.autocompleteForm.defaults.cityContainer).val(response[0].d_mnpio);
    }
    function completeState(response){
      $($.fn.autocompleteForm.defaults.stateContainer).val(response[0].d_estado);
    }
    function completeZipCode(response){
      $($.fn.autocompleteForm.defaults.zipCodeContainer).val(response[0].d_codigo);
    }

    $($.fn.autocompleteForm.defaults.zipCodeContainer).focusout(function(){
      Sepomex.where({zip_code: $($.fn.autocompleteForm.defaults.zipCodeContainer)[0].value, colony: $($.fn.autocompleteForm.defaults.suburbContainer)[0].value, city:  $($.fn.autocompleteForm.defaults.cityContainer)[0].value}).then((response) => {
          completeCity(response);
          completeState(response);
        }).catch((error) => {
          console.log("Error in autocompleting zipcode")
      });
    });

    $($.fn.autocompleteForm.defaults.suburbContainer).focusout(function(){
      Sepomex.where({zip_code: $($.fn.autocompleteForm.defaults.zipCodeContainer)[0].value, colony: $($.fn.autocompleteForm.defaults.suburbContainer)[0].value, city:  $($.fn.autocompleteForm.defaults.cityContainer)[0].value}).then((response) => {
          completeZipCode(response)
          completeCity(response);
          completeState(response);
        }).catch((error) => {
          console.log("Error in autocompleting suburb")
      });
    });

    $($.fn.autocompleteForm.defaults.cityContainer).focusout(function(){
      Sepomex.where({zip_code: $($.fn.autocompleteForm.defaults.zipCodeContainer)[0].value, colony: $($.fn.autocompleteForm.defaults.suburbContainer)[0].value, city:  $($.fn.autocompleteForm.defaults.cityContainer)[0].value}).then((response) => {
          completeState(response);
        }).catch((error) => {
          console.log("Error in autocompleting city")
      });
    });
  }

}( jQuery ));


