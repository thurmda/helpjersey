function Page(name){
    return {
            name: name,
            title: 'Help Jersey',
            layout: 'layouts/minimal',
            header: Math.floor((Math.random()*3)+1),
            description: '',
            bodyClass: name
        };
}

exports.index = function(req, res){
  var page = Page('index');
      page.layout = 'layouts/default';
  res.render(page.name, page);
};

exports.info = function(req, res){
  var page = Page('info');
      page.title = 'Information';
  res.render(page.name,page);
};


exports.need = function(req, res){
  var page = Page('need');
      page.title = 'Need Help';
  res.render(page.name,page);
};

exports.give = function(req, res){
  var page = Page('give');
      page.title = 'Give Help';
      page.layout = 'layouts/default';
  res.render(page.name, page);
};

exports.map = function(req, res){
  var page = Page('map');
      page.title = 'New Jersey';
  res.render(page.name, page);
}

