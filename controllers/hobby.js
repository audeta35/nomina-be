const response = require('../response/index');
const conn = require('../config/mysql');

exports.addHobby = (req, res) => {
  let {
    name,
    status
  } = req.body;
  let addUser = `INSERT INTO hobby SET name=?, status=?`;
  conn.query(
    addUser,
    [
      name,
      status
    ],
    (err, result, field) => {
      if (err) {
        return res.status(422).send(err);
      } else {
        response.success(res, result);
      }
    }
  );
};

exports.editHobby = (req, res) => {
  let {
    name,
    status
  } = req.body;
  let editQuery = `UPDATE hobby SET name=?, status=? WHERE id = ?`;
  conn.query(
    editQuery,
    [
      name,
      status
    ],
    (err, result, field) => {
      if (err) {
        return res.status(422).send(err);
      } else {
        response.success(res, result);
      }
    }
  );
};

exports.deleteHobby = (req, res) => {
  let { id } = req.params;
  let deleteQuery = `DELETE FROM hobby WHERE id=?`;

  conn.query(
    deleteQuery,
    [id],
    (err, result, field) => {
      if (err) {
        return res.status(422).send(err);
      } else {
        response.success(res, result);
      }
    }
  );
};

exports.getAllHobby = (req, res) => {
  let getUser = `SELECT * FROM hobby`;
  conn.query(getUser, [], (err, users, field) => {
    if (!err) {
      response.success(res, users);
    } else {
      res.status(422).send(err);
    }
  });
};

exports.getHobbyById = (req, res) => {
  let {id} = req.body;
  let getUser = `SELECT * FROM hobby WHERE id=?`;
  conn.query(getUser, [id], (err, users, field) => {
    if (!err) {
      response.success(res, users);
    } else {
      res.status(422).send(err);
    }
  });
};
