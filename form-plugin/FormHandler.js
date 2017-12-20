(function( $ ) {
	$.fn.autocompleteForm = function(options) {

    var opts = $.extend( {}, $.fn.autocompleteForm.defaults, options );
		
    Sepomex.where({zip_code: $.fn.autocompleteForm.defaults.zipCodeContainer}).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error);
    });


		$.fn.autocompleteForm.defaults = {
    suburbContainer: "#AddressSuburb",
    cityContainer: "#AddressCity",
    stateContainer: "#AddressState",
    zipCodeContainer: "#AddressZipCode"
  };

	}


}( jQuery ));