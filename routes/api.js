var ourTils = require('../lib/ourTils');
var routes = {
    basic: {}
}

routes.basic.allTowns = function(req, res){
    ourTils.find({}, {name:1, _id:0}, function(err, cursor) {
                 if (err) {
                    console.error(err);
                    return;
                 }

                cursor.sort({name: 1}).toArray(function(err,a){
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.write(JSON.stringify(a));
                    res.end();
                });
    });
}
routes.basic.town = function(req, res){
    ourTils.find({name : req.query.town}, {}, function(err, cursor) {
                 if (err) {
                    console.error(err);
                    return;
                 }

                cursor.sort({name: 1}).toArray(function(err,a){
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.write(JSON.stringify(a));
                    res.end();
                });
    });
}
module.exports = routes;
