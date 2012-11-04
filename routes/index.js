var fs = require('fs');
function Page(name, req){
    return {
            name: name,
            title: 'Help Jersey',
            layout: 'layouts/default',
            header: Math.floor((Math.random()*3)+1),
            host: req.headers.host,
            CANONICAL_URL : 'http://' +req.headers.host + req.url,
            description: 'Help Jersey is a mobile optimized site for sharing information about recovery from Hurricane Sandy.',
            bodyClass: name
        };
}
var routes = {
    basic: {},
    params: {}
}
var townPartials = {};
routes.basic.index = function(req, res){
  var page = Page('index', req);
  res.render(page.name, page);
};

//routes.basic.info = function(req, res){
//  var page = Page('info');
//      page.title = 'Information';
//  res.render(page.name,page);
//};

routes.basic.need = function(req, res){
  var page = Page('need', req);
      page.title = 'Need Help';
      page.layout = 'layouts/fb';
      page.stub = 'need';
  res.render(page.name,page);
};
routes.basic.give = function(req, res){
  var page = Page('give', req);
      page.title = 'Give Help';
      page.layout = 'layouts/fb';
      page.stub = 'give';
  res.render(page.name, page);
};

routes.basic.about = function(req, res){
  var page = Page('about', req);
      page.title = 'Aboout Help Jersey';
      page.layout = 'layouts/default';
      page.stub = 'about';
  res.render(page.name, page);
};

routes.basic.map = function(req, res){
  var page = Page('map', req);
      page.title = 'New Jersey';
  res.render(page.name, page);
}


routes.params.info = function(req, res){
  var file,
      page = Page('info', req);
      page.layout = 'layouts/fb';
      page.title = 'Help ' + req.params.town;
      page.params = req.params;
  if(townPartials[req.params.town]){
      page.townPartial = 'partials/town/' + req.params.town
      res.render(page.name,page);
  }else{
    file = process.env.PWD + '/views/partials/town/' + req.params.town +'.ejs';
    fs.stat(file, function(err, data) {
      if (!err) {
        townPartials[req.params.town] = true;
      } else {
        page.townPartial = 'partials/town/howto'
      }
      res.render(page.name,page);
    });
  }

};
routes.params.info.params = ['town']; 

module.exports=routes
