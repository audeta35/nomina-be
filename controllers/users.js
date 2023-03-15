const response = require('../response/index');
const conn = require('../config/mysql');

exports.loginUsers = (req, res) => {
  let { username, password } = req.body;
  let loginUser = `SELECT * FROM user WHERE email=? AND password=?`;
  conn.query(
    loginUser,
    [username, password],
    (err, users, field) => {
      if (err) {
        return res.status(422).send(err);
      } else {
        if (users.length === 1) {
          return response.getData(
            res,
            users,
            'login success'
          );
        } else {
          return response.notFound(
            res,
            'username atau password salah'
          );
        }
      }
    }
  );
};

exports.addUser = (req, res) => {
  let {
    first_name,
    last_name,
    email,
    password,
    hobby,
  } = req.body;
  let addUser = `INSERT INTO user SET  first_name=?, last_name=?, email=?, password=?, hobby=?`;
  conn.query(
    addUser,
    [
      first_name,
      last_name,
      email,
      password,
      hobby,
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

exports.editUser = (req, res) => {
  let {
    first_name,
    last_name,
    email,
    password,
    hobby,
    id,
  } = req.body;
  let editQuery = `UPDATE user SET  first_name=?, last_name=?, email=?, password=?, hobby=? WHERE id = ?`;
  conn.query(
    editQuery,
    [
      first_name,
      last_name,
      email,
      password,
      hobby,
      id,
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

exports.deleteUser = (req, res) => {
  let { id } = req.params;
  let deleteQuery = `DELETE FROM user WHERE id=?`;

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

exports.getAllUser = (req, res) => {
  let getUser = `SELECT * FROM user`;
  conn.query(getUser, [], (err, users, field) => {
    if (!err) {
      response.success(res, users);
    } else {
      res.status(422).send(err);
    }
  });
};
