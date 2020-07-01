const express = require('express');

const routes = express.Router();

const StudentController = require('./Controllers/StudentController');

routes.get('/students', StudentController.index);

module.exports = routes;
