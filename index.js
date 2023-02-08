const express = require('express');
const consign = require('consign');

const app = express();

consign()
    .include('db.js')
    .then('models/vehicles.js')
    .then('models/workshops.js')
    .then('models/manufacturers.js')
    .then('models/components.js')
    .then('models')
    .then('auth.js')
    .then('middlewares.js')
    .then('routes')
    .then('boot.js')
    .into(app);