global.jQuery = $ = require('jquery');
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
          $("input[type='text']").trigger("change");
        }).catch((error) => {
          console.log("Error in autocompleting zipcode");
      });
    });

    $($.fn.autocompleteForm.defaults.suburbContainer).focusout(function(){
      Sepomex.where({zip_code: $($.fn.autocompleteForm.defaults.zipCodeContainer)[0].value, colony: $($.fn.autocompleteForm.defaults.suburbContainer)[0].value, city:  $($.fn.autocompleteForm.defaults.cityContainer)[0].value}).then((response) => {
          completeZipCode(response)
          completeCity(response);
          completeState(response);
          $("input[type='text']").trigger("change");
        }).catch((error) => {
          console.log("Error in autocompleting suburb");
      });
    });

    $($.fn.autocompleteForm.defaults.cityContainer).focusout(function(){
      Sepomex.where({zip_code: $($.fn.autocompleteForm.defaults.zipCodeContainer)[0].value, colony: $($.fn.autocompleteForm.defaults.suburbContainer)[0].value, city:  $($.fn.autocompleteForm.defaults.cityContainer)[0].value}).then((response) => {
          completeState(response);
          $("input[type='text']").trigger("change");
        }).catch((error) => {
          console.log("Error in autocompleting city");
      });
    });
  }

}( jQuery ));

(function( $ ) {
  $.fn.sepomexForm = function(options) {
    const MEXICO_COORDINATES = {lat: 25.697094, lng: -100.352872};

    var opts = $.extend( {}, $.fn.sepomexForm.defaults, options );

    map = new google.maps.Map(document.getElementById($.fn.sepomexForm.defaults.mapContainer.substr(1)), {
      center: MEXICO_COORDINATES,
      zoom: 8
    });

    var geocoder= new google.maps.Geocoder();

    var marker = new google.maps.Marker({
      map: map,
      visible: false
    });

    google.maps.event.addListener(map, "click", function (event) {
      geocoder.geocode({
        'latLng': event.latLng
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            document.getElementById($.fn.sepomexForm.defaults.formContainer.substr(1)).reset();
            let address_components =  results[0].address_components
            for(var i = 0; i < address_components.length; i++){
              if(address_components[i].types.includes('route')) {
                $($.fn.sepomexForm.defaults.streetContainer).val(address_components[i].long_name);
              }
              else if(address_components[i].types.includes('street_number')) {
                $($.fn.sepomexForm.defaults.numberContainer).val(address_components[i].long_name);
              }
              else if(address_components[i].types.includes('sublocality_level_1')) {
                $($.fn.sepomexForm.defaults.suburbContainer).val(address_components[i].long_name);
              }
              else if(address_components[i].types.includes('locality')) {
                $($.fn.sepomexForm.defaults.cityContainer).val(address_components[i].long_name);
              }
              else if(address_components[i].types.includes('administrative_area_level_1')) {
                $($.fn.sepomexForm.defaults.stateContainer).val(address_components[i].long_name);
              }
              else if(address_components[i].types.includes('country')) {
                $($.fn.sepomexForm.defaults.countryContainer).val(address_components[i].long_name);
              }
              else if(address_components[i].types.includes('postal_code')) {
                $($.fn.sepomexForm.defaults.zipCodeContainer).val(address_components[i].long_name);
              }
            }
          }
        }
      });
      marker.setPosition(event.latLng);
      marker.setVisible(true);
    });

    function getLatitudeLongitudeAndSetInMap(callback) {
      let address = getAddressFromForm();
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          callback(results[0].geometry.location);
        }
      })
    }

    function getAddressFromForm() {
      var address = "";
      $($.fn.sepomexForm.defaults.formContainer + ' :input').each(function() {
        if(this.value) {
          address += (" " + this.value);
        }
      });
      return address;
    }

    $("input[type='text']").change(function(){
      getLatitudeLongitudeAndSetInMap(function(latLng) {
        map.setCenter(latLng);
        marker.setVisible(true);
        marker.setPosition(latLng);
        map.setZoom(15);
      });
    });
  }

  $.fn.sepomexForm.defaults = {
    formContainer: "#AddressForm",
    mapContainer: "#MapWrapper",
    numberContainer: "#AddressNumber",
    streetContainer: "#AddressStreet",
    suburbContainer: "#AddressSuburb",
    cityContainer: "#AddressCity",
    stateContainer: "#AddressState",
    countryContainer: "#AddressCountry",
    zipCodeContainer: "#AddressZipCode"
  };
}( jQuery ));
