const cors = require('cors');
var express = require('express');
  app = express();
  port = process.env.PORT || 8080;
  mongoose = require('mongoose');
  Task = require('./api/models/Business'); //created model loading here
  bodyParser = require('body-parser');
  var path = require('path');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://wizard:laptop1@ds217970.mlab.com:17970/123321', { useNewUrlParser: true }, function (err) {
  if (err) throw err;
  console.log('Successfully connected to mongo database server');

});
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());
var routes = require('./api/routes/businessRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Server started on: ' + port);
