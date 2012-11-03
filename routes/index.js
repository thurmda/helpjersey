function Page(name){
    return {
            name: name,
            title: 'Help Jersey',
            layout: 'layouts/default',
            header: Math.floor((Math.random()*3)+1),
            description: '',
            bodyClass: name
        };
}
var routes = {
    basic: {},
    params: {}
}
routes.basic.index = function(req, res){
  var page = Page('index');
  res.render(page.name, page);
};

//routes.basic.info = function(req, res){
//  var page = Page('info');
//      page.title = 'Information';
//  res.render(page.name,page);
//};

routes.basic.need = function(req, res){
  var page = Page('need');
      page.title = 'Need Help';
  res.render(page.name,page);
};
routes.basic.give = function(req, res){
  var page = Page('give');
      page.title = 'Give Help';
  res.render(page.name, page);
};

routes.basic.map = function(req, res){
  var page = Page('map');
      page.title = 'New Jersey';
  res.render(page.name, page);
}


routes.params.info = function(req, res){
  var page = Page('info');
      page.title = 'Information';
      page.params = req.params;
  res.render(page.name,page);
};
routes.params.info.params = ['town']; 

module.exports=routes
