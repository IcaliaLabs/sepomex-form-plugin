class SepomexesApi {
  // Wired up to `Model.create(params)` and `model.save()`
  static postCreate(params) {
    return Promise.resolve({})
  }

  // Wired up to `model.update()`
  static putUpdate(params) {

  }

  // Wired up to `Model.updateAll(params)`
  static putUpdateAll(params) {

  }

  // Wired up to `model.destroy()`
  static deleteDestroy(params) {

  }

  // Wired up to `Model.find(params)`
  static getFind(params) {

  }

  // Wired up to `Model.all(params)`
  static getAll(params) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Wired up to `Model.first(params)`
  static getFirst(params) {

  }

  // Wired up to `Model.findBy(params)`
  static getFindBy(params) {

  }

  // Wired up to `Model.where(params)`
  static getWhere(params) {

  }
}


exports.SepomexesApi = SepomexesApi
