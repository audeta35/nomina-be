'use strict';
const response = require('../response/index');

exports.welcomeMessage = (req, res) => {
  response.root(res);
};
