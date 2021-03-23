'use strict';
const cors    = require('cors');


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = function(app) {
  var statu = require('../controllers/controller');

  // todoList Routes
  app.route('/statu')
    .get(cors(corsOptions),statu.Get_statu)
    .post(cors(corsOptions),statu.create_a_statu)
    .delete(cors(corsOptions),statu.delete_a_statu);

  // app.delete('/statu/:statuid', cors(corsOptions),statu.delete_a_statu);
};