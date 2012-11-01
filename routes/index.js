
exports.index = function(req, res){
  var page = 'index';
  res.render(page, { 
        title: 'Help Jersey',
        layout: 'layouts/default',
        header: Math.floor((Math.random()*3)+1),
        bodyClass: page
  });
};

exports.about = function(req, res){
  var page = 'about';
  res.render(page, {
        title: 'About', 
        layout: 'layouts/default',
        header: Math.floor((Math.random()*3)+1),
        bodyClass: page
  });
};

exports.contact = function(req, res){
  var page = 'contact';
  res.render(page, {
        title: 'Contact Us', 
        layout: 'layouts/default',
        header: Math.floor((Math.random()*3)+1),
        bodyClass: page
  });
}

exports.donate = function(req, res){
  var page = 'donate';
  res.render(page, {
        title: 'Donate', 
        layout: 'layouts/donate',
        header: Math.floor((Math.random()*3)+1),
        bodyClass: page
  });
}
