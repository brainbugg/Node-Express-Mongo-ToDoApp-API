var express = require('express');
var app = express();

var mongoose = require('mongoose');
var config = require('./config');

var setupController = require('./controllers/setupControllers');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('./assets', express.static(__dirname + '/pubic'));

app.use('/', function(req, res)
{
	res.send('Hey.')
});

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.listen(port);