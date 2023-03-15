# Documentation

- this project using express js and mysql database

# Instalation

- clone repo
- create database `nomina`
- use `nomina` database and import `nomina.sql` from folder /database
- run `yarn / npm install`
- run `yarn / npm start`
- default port started: `3001`

# Endpoint List

1. user

- (GET) `user/` get all user

- (POST) `user/add` create user with `request body`:
-- `first_name` string
-- `last_name` string
-- `email` string
-- `password` string (no encrypted)
-- `hobby` integer (relation to table hobby by id)
-- `age` integer

- (PUT) `user/edit` edit user with payload
-- `first_name` string
-- `last_name` string
-- `email` string
-- `password` string (no encrypted)
-- `hobby` integer (relation to table hobby by id)
-- `age` integer
-- `id` integer (id user)

- (DELETE) `user/delete/:id` delete user by id user

- (POST) `user/login` get logged in user with `request body`:
-- `email` string
-- `password` string

2. hobby

- (GET) `hobby/` get all hobbies

- (POST) `hobby/add` create hobby with `request body`:
-- `name` string
-- `status` integer (0 = `false`; 1 = `true`)

- (PUT) `hobby/edit` edit hobby with `request body`:
-- `name` string
-- `status` integer (0 = `false`; 1 = `true`)
-- `id` integer (id hobby)

- (DELETE) `hobby/delete/:id` delete hoby by id hobby

- (POST) `hobby/detail/:id` get hobby by id from request body `id`