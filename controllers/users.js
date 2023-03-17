const response = require('../response/index');
const conn = require('../config/mysql');

exports.loginUsers = (req, res) => {
  let { email, password } = req.body;
  let loginUser = `SELECT * FROM user WHERE email=? AND password=?`;
  conn.query(
    loginUser,
    [email, password],
    (err, users, field) => {
      if (err) {
        return res.status(422).send(err);
      } else {
        console.log('users', users)
        console.log('email', email)
        console.log('password', password);
        if (users.length !== 0) {
          return response.getData(
            res,
            users,
            'login success'
          );
        } else {
          return response.notFound(
            res,
            'email atau password salah'
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
    age,
  } = req.body;
  let addUser = `INSERT INTO user SET  first_name=?, last_name=?, email=?, password=?, hobby=?, age=?`;
  conn.query(
    addUser,
    [
      first_name,
      last_name,
      email,
      password,
      hobby,
      age,
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
    age,
    id,
  } = req.body;
  let editQuery = `UPDATE user SET  first_name=?, last_name=?, email=?, password=?, hobby=?, age=? WHERE id = ?`;
  conn.query(
    editQuery,
    [
      first_name,
      last_name,
      email,
      password,
      hobby,
      age,
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
