(function( $ ) {
  $.fn.sepomexForm = function(options) {
    var opts = $.extend( {}, $.fn.sepomexForm.defaults, options );

    map = new google.maps.Map(document.getElementById($.fn.sepomexForm.defaults.mapContainer.substr(1)), {
      center: {lat: 25.697094, lng: -100.352872},
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
              else if(address_components[i].types.includes('administrative_area_level_2')) {
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

    $($.fn.sepomexForm.defaults.formContainer).focusout(function(){
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
