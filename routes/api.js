var municipal = require('../data/municipal');

exports.municipal = function(req, res){

res.writeHead(200, {"Content-Type": "application/json"});

res.write(
    JSON.stringify(municipal)
); 
  //res.render(page, { 
        //title: 'Help Jersey',
        //layout: 'layouts/default',
        //header: Math.floor((Math.random()*3)+1),
        //bodyClass: page,
  //});
};


