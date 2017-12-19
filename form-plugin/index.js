//const { ApiHandler } = require('./ApiHandler');
var axios = require('axios')
const { Sepomex } = require('../models/Sepomex.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function createSepomex(attributes) {
  model = new Sepomex();

  model.id = attributes.id;
  model.d_codigo = attributes.d_codigo;
  model.d_asenta = attributes.d_asenta;
  model.d_tipo_asenta = attributes.d_tipo_asenta;
  model.d_mnpio = attributes.d_mnpio;
  model.d_estado = attributes.d_estado;
  model.d_ciudad = attributes.d_ciudad;
  model.d_cp = attributes.d_cp;
  model.c_estado = attributes.c_estado;
  model.c_oficina = attributes.c_oficina;
  model.c_cp = attributes.d_cp;
  model.c_tipo_asenta = attributes.c_tipo_asenta;
  model.c_mnpio = attributes.c_mnpio;
  model.id_asenta_cpcons = attributes.id_asenta_cpcons;
  model.d_zona = attributes.d_zona;
  model.c_cve_ciudad = attributes.c_cve_ciudad;

  return model;
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return JSON.parse(xmlHttp.responseText)
}

function performGetRequest() {
  var BASE_URL = "http://sepomex.icalialabs.com/api/v1/zip_codes";
  var response = new Array;
  var data = httpGet(BASE_URL);
  var code_attributes, zip_codes, _i;
  
  zip_codes = data.zip_codes;
  for (_i = 0; _i < zip_codes.length; _i++) {
    code_attributes = zip_codes[_i];
    response.push(new createSepomex(code_attributes));
  }
  return response;
}

Final = performGetRequest();