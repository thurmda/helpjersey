var municipal = require('../data/municipal');
var ourTils = require('../lib/ourTils');

exports.municipal = function(req, res){
    ourTils.find({}, {}, function(err, cursor) {
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
