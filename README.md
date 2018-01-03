<img src="https://gist.githubusercontent.com/ReneSG/edd816da93cc78288962a6846587c644/raw/9ffb21419aa19eb8414c56982ff8c59eeddab60b/Sepomexlogo.jpg" width="700">
[![Made with Love by Icalia Labs](https://img.shields.io/badge/With%20love%20by-Icalia%20Labs-ff3434.svg)]



_SepomexForm with Google Maps integration facilitates the use of forms with addresses in your application._

## About
SepomexForm helps you to easily manage your forms with address
information.

SepomexForm brings you easy implementation of form filling using Google Maps Api, by automatically filling
fields based on a Google Maps marker, and by placing markers based on form information.

SepomexForm has a second functionality, by using the Sepomex API, it allows fields of your form to be automatically filled when typing more specific information. See below for examples and a more thorough explanation.

SepomexForm has even a third functionality! It migrates all data from [Sepomex Api](https://github.com/IcaliaLabs/sepomex) to [JSModels](https://github.com/IcaliaLabs/javascript-models)

## Installation of Google Map Sepomex Form: 

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include Google Maps Api. You will need an API key, if you don't have one you can get it [here](https://developers.google.com/maps/documentation/javascript/get-api-key):

	```html
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
	```

3. Include plugin's code:

	```html
	<script src="dist/sepomex-form-plugin.js"></script>
	```

4. Call the plugin:

	```javascript
    $.fn.sepomexForm();
	```

## Installation of Autocompleting with Sepomex Api: 

1. Include jQuery:

  ```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  ```

2. Install all Node packages dependencies

  ```bash
    npm install
  ```

3. Install browserify, you can see the instructions [here](https://github.com/browserify/browserify)


4. Include plugin's code:

  ```html
  <script src="dist/sepomex-form-plugin.js"></script>
  ```

5. Use browserify command to bundle all Node.JS requires. Please look for more information [here](https://github.com/browserify/browserify#example)

6. Call the plugin:

  ```javascript
    $.fn.sepomexForm();
  ```


## Table of Contents
* [Configuring SepomexForm](#configuring-sepomexform)
  - [Default config](#default-config)
  - [Generator](#custom-config)
* [Configuring AutocompleteForm](#configuring-autocompleteform)
  - [Default config](#default-config-autocomplete)
  - [Generator](#custom-config-autocomplete)
* [Using JS Models]
  - [Usage](#JsModels-usage)
* [Contributing](#contributing)
* [Heroes](#heroes)


## Configuring SepomexForm
### Default config
By default SepomexForm uses the following IDs in order to know what
fields have to be filled, if you wish to use the default
configuration then you must use these ids in you containers otherwise SepomexForm will not
behave as expected.

```javascript
  {
    formContainer: "#AddressForm",
    mapContainer: "#MapWrapper",
    numberContainer: "#AddressNumber",
    streetContainer: "#AddressStreet",
    suburbContainer: "#AddressSuburb",
    cityContainer: "#AddressCity",
    stateContainer: "#AddressState",
    countryContainer: "#AddressCountry",
    zipCodeContainer: "#AddressZipCode"
  }
```
Attribute			| Type				| Default		| Description
---						| ---					| ---				| ---
`formContainer`		| *String*		| `#AddressForm`		| Specifies the container of the form to be filled.
`mapContainer`		| *String*		| `#MapWrapper`		| Specifies the container for the Map.
`numberContainer`	| *String*		| `#AddressNumber`		| Specifies the input for the number.
`streetContainer`	| *String*		| `#AddressStreet`		| Specifies the input for the Street.
`suburbContainer`	| *String*		| `#AddressSuburb`		| Specifies the input for the Suburb.
`cityContainer`	| *String*		| `#AddressCity`		| Specifies the input for the City.
`stateContainer`	| *String*		| `#AddressState`		| Specifies the input for the State.
`countryContainer`	| *String*		| `#AddressCountry`		| Specifies the input for the Country.
`zipCodeContainer`	| *String*		| `#AddressZipCode`		| Specifies the input for the Zipcode.

### Custom config
If you wish to use different ids as the default ones, SepomexForm
allows you to override them. In order to do that use the following,
before calling the plugin.

```javascript
  $.fn.sepomexForm.defaults.formContainer = "#CustomFormContainer";
  $.fn.sepomexForm.defaults.mapContainer = "#CustomMapContainer";

  // Plugin call
  $.fn.sepomexForm();
```


## Configuring AutoCompleteForm
### Default config AutoCompleteForm
By default AutCompleteForm uses the following IDs in order to know what
fields have to be filled, if you wish to use the default
configuration then you must use these ids in you containers otherwise AutCompleteForm will not
behave as expected.

```javascript
  {
    suburbContainer: "#AddressSuburb",
    cityContainer: "#AddressCity",
    stateContainer: "#AddressState",
    zipCodeContainer: "#AddressZipCode"
  }
```
Attribute     | Type        | Default   | Description
---           | ---         | ---       | ---
`suburbContainer` | *String*    | `#AddressSuburb`    | Specifies the input for the Suburb.
`cityContainer` | *String*    | `#AddressCity`    | Specifies the input for the City.
`stateContainer`  | *String*    | `#AddressState`   | Specifies the input for the State.
`zipCodeContainer`  | *String*    | `#AddressZipCode`   | Specifies the input for the Zipcode.

### Custom config
If you wish to use different ids as the default ones, AutoCompleteForm
allows you to override them. In order to do that use the following,
before calling the plugin.

```javascript
  $.fn.autocompleteForm.defaults.suburbContainer = "#CustomSuburbContainer";
  $.fn.autocompleteForm.defaults.cityContainer = "#CustomCityContainer";
  $.fn.autocompleteForm.defaults.stateContainer = "#CustomStateContainer";
  $.fn.autocompleteForm.defaults.zipCodeContainer = "#CustomZipCodeContainer";

  // Plugin call
  $.fn.autocompleteForm();
```

## JSModels
 
 SepomexForm migrates the data from [SepomexApi] to JsModels. Please refer to its documentation for more about it. [here](https://github.com/IcaliaLabs/javascript-models)

 



## Contributing
Please submit all pull requests against a separate branch. Please follow the standard for naming the variables, mixins, etc.

## Heroes
**Ana Paola Treviño**

+ [http://github.com/Anapaotrev](http://github.com/Anapaotrev)

**Erik Torres**

+ [http://github.com/erik0686](http://github.com/erik0686)

**René García**

+ [http://github.com/ReneSG](http://github.com/ReneSG)

## License

Code and documentation copyright 2015 Icalia Labs. Code released under [the MIT license](LICENSE).
