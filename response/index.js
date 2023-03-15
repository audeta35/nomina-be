'use strict';

exports.root = (res) => {
  res.send({
    status: 'root',
    message: 'welcome to api',
    code: 200,
  });
};

exports.getData = (res, rows, message) => {
  res.status(200).send({
    status: 200,
    result: rows,
    message: message
  });
};

exports.notFound = (res, message) => {
  const result = {
    code: 404,
    message: message,
  };
  res.status(404).json(result);
  res.end();
};

exports.success = (res, value) => {
  const result = {
    status: {
      code: 200,
      message: 'success',
    },
    result: value,
  };
  res.status(200).json(result);
  res.end();
};


