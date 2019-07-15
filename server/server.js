const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api', Router);

app.listen(3000);

