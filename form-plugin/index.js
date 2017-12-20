const { Sepomex } = require('../models/Sepomex.js');

Sepomex.where({zip_code: 64000}).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error);
    });