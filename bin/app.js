
/**
 * Module dependencies.
 */

var express = require('express'),
    config = require('../config'),
    ourTils = require('../lib/ourTils'),
    routes = require('../routes'),
    api = require('../routes/api');

ourTils.override(process.env, config); 
ourTils.setConfig(config);

if(process.env.freshDB){
    ourTils.setupDB();
}
//ourTils.upsert({name: "Add"}, {name : "Add", info: "woot!"});

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/../views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'help jersey' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/../public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
ourTils.mapRoutes(app, routes);
ourTils.mapRoutes(app, api, '/api');

app.listen(config.PORT);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
