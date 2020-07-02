const express = require('express');

const routes = express.Router();

const StudentController = require('./Controllers/StudentController');

routes.get('/students', StudentController.index);
routes.post('/students/register', StudentController.create);
routes.post('/students/login', StudentController.login);

module.exports = routes;
