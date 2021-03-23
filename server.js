const express = require('express')
const cors    = require('cors')

app = express(),
port = process.env.PORT || 8080,

mongoose    = require('mongoose'),
Statu       = require('./api/models/model'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise ; 
mongoose.connect('mongodb://localhost/3shanAbbass');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/route.js');
routes(app);

app.listen(port);

app.use((req, res) =>{
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

console.log('RESTful API server started on: ' + `http://localhost:${port}/`)