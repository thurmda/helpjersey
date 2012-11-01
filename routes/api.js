var municipal = require('../data/municipal');

exports.municipal = function(req, res){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(municipal));
    res.end();
}
