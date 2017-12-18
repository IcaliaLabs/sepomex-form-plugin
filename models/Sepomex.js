const {JsModel} = require('javascript-models');
const { SepomexApi } = require('./SepomexApi');

class Sepomex extends JsModel {
  static ATTRIBUTES() {
    return ["id", "d_codigo", "d_asenta", "d_tipo_asenta", "d_mnpio", "d_estado", "d_ciudad",
                   "d_cp", "c_estado", "c_oficina", "c_cp", "c_tipo_asenta", "c_mnpio", "id_asenta_cpcons",
                   "d_zona", "c_cve_ciudad"]
  }

  static API_CLASS() {
    return SepomexApi
  }
}

exports.Sepomex = Sepomex
