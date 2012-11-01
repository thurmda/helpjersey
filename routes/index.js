
exports.index = function(req, res){
  var page = 'index';
  res.render(page, { 
        title: 'Help Jersey',
        header: Math.floor((Math.random()*3)+1),
        bodyClass: page
  });
};

exports.about = function(req, res){
  var page = 'about';
  res.render(page, {
        title: 'About', 
        header: Math.floor((Math.random()*3)+1),
        bodyClass: page
  });
};

exports.contact = function(req, res){
  var page = 'contact';
  res.render(page, {
        title: 'Contact Us', 
        header: Math.floor((Math.random()*3)+1),
        bodyClass: page
  });
}
