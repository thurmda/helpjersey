var mongo = require('mongodb');
var municipal = require('../data/municipal');
var config, collection;

var utilities = {
    mapRoutes : function(app, routes, prefix){
        prefix = prefix || '';
        var route, path;
        if(routes.basic){
            if(routes.basic.index){
                app.get('/', routes.basic.index);
            }
            for(route in routes.basic){
                app.get(prefix + '/' + route, routes.basic[route]);    
            }
        }
        if(routes.params){
            for(route in routes.params){
                path = prefix + '/' + route + '/:' + routes.params[route].params.join('/:');
                app.get(path, routes.params[route]);
            }
        }
    },
    override : function(winner, loser){
        var key;
        for(key in loser){
            loser[key] = winner[key] || loser[key];
        }
    },
    setConfig : function(_config){
        config = _config;
    },
    initMongo : function(cb){
        mongo.Db.connect(config.MONGOHQ_URL, {safe: true}, function(error, client) {
              collection = new mongo.Collection(client, 'towns');
              cb();
        });
    },
    setupDB: function(data){
        utilities.initMongo(function(){
            data = data || municipal;
            data.forEach(function(town){
                utilities.upsert({name: town.name}, {name: town.name, info : town}, function(){console.log('inserted town : '+town.name ); });
            });    
        });
    },
    upsert : function(where, newData, cb){
        if(!collection){
            initMongo(function(){_upsert(where, newData, cb);});
        }else{
            _upsert(where, newData, cb);
        }
        function _upsert(where, newData, cb){
            collection.update(where, newData, {upsert:true, safe: (cb)}, function(err, result) {
                if (err) {
                    console.error(err, null);
                }
                if (cb) {
                    cb(err, result);
                }
                });
            }
        },
        findOne : function(where, filter, cb){
            if(!collection){
                initMongo(function(){command(where, filter, cb);});
            }else{
                command(where, filter, cb);
            }
            function command(where, filter, cb){
                collection.findOne(where, filter, function(err, result) {
                    if (err) {
                        console.error(err, null);
                    }

                    if (cb) {
                        cb(err, result);
                    }
                });
            }
        },
    find : function(where, filter, cb){
        if(!collection){
            utilities.initMongo(function(){command(where, filter, cb);});
        }else{
            command(where, filter, cb);
        }
        function command(where, filter, cb){
            return collection.find(where, filter, function(err, result) {
                if (err) {
                    console.error(err, null);
                }

                if (cb) {
                    cb(err, result);
                }
            });
        }
    },

    randomKey : function (){
        var i, key = '';
        for (i = 0; i < 32; i += 1) {
            key += Math.floor(Math.random() * 16).toString(16);
        }
        return key;
    }
}
module.exports = utilities;
