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
  res.render(page.name, page);
};

exports.map = function(req, res){
  var page = Page('map');
      page.title = 'New Jersey';
  res.render(page.name, page);
}


//exports.about = function(req, res){
//  var page = 'about';
//  res.render(page, {
//        title: 'About', 
//        layout: 'layouts/default',
//        header: Math.floor((Math.random()*3)+1),
//        bodyClass: page
//  });
//};

//exports.contact = function(req, res){
//  var page = 'contact';
//  res.render(page, {
//        title: 'Contact Us', 
//        layout: 'layouts/default',
//        header: Math.floor((Math.random()*3)+1),
//        bodyClass: page
//  });
//}

//exports.donate = function(req, res){
//  var page = 'donate';
//  res.render(page, {
//        title: 'Donate', 
//        layout: 'layouts/donate',
//        header: Math.floor((Math.random()*3)+1),
//        bodyClass: page
//  });
//}


