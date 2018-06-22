'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const service = require('./recipe-management.service');
let app = express(); //Call express factory to create an 'app'
//An app can be thought of a http server,
//that you can add end-points to.
//setup app 'middleware'
//we need Cors and Body parser
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(bodyParser.json()); //Parse json http bodies
let store = '';
app.get('/recipelist/', function(req, res) {
  res.header('Content-Type', 'application/json');
  // console.log(service.recipes);
  res.json(service.recipes);
});
app.get('/retrieverecipe/:id', function(req, res) {
  res.header('Content-Type', 'application/json');
  // let menu = new service.RecipesList();
  console.log(service.recipes[req.params.id]);
  res.json(service.recipes[req.params.id]);
});
app.post('/addrecipe', function(req, res) {
  // console.log('body', req.body); //should be request body
  service.recipes.push(req.body);
  // console.log(service.recipes);
  res.send(service.recipes);
});
// Delete recipe
app.delete('/deleterecipe/:id', function(req, res) {
  console.log('body', req.body);
  if (req.params.id >= 0 && service.recipes.length > req.params.id) {
    service.recipes.splice(req.params.id, 1);
    res.send('{"success": true }');
  } else {
    res.send('{"success": false }');
  }
  console.log(service.recipes);
});
//Start the server
app.listen(8000, function() {
  console.log('server started');
});
console.log('Setup script finised. Notice console.log runs before the above one.');
//# sourceMappingURL=server.js.map
