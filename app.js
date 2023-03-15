const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const server = express();
const app = require('http').Server(server);
const cors = require('cors');

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const hobbyRoutes = require('./routes/hobby');

server.use(
  bodyParser.urlencoded({ extended: true })
);

server.use(bodyParser.json());

let whiteList = [
  'http://localhost:4200',
  'http://localhost:3000',
];
server.use(
  // cors({
  //   origin: (origin, cb) => {
  //     if (whiteList.indexOf(origin) !== -1) {
  //       cb(null, true);
  //     } else {
  //       cb(new Error("Not allowed by CORS"));
  //     }
  //   },
  //   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // })
  cors()
);

// Routes
server.use('/', indexRoutes);
server.use('/user', userRoutes);
server.use('/hobby', hobbyRoutes)

app.listen(port);
console.log(`Server listening on port ${port}`);
