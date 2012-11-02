var mongo = require('mongodb');
var config, collection;
function initMongo(cb){
    //if(config.mongo.servers.length > 1){
    //    var servers = [];
    //    config.mongo.servers.forEach(function(server){
    //        servers.push(new mongo.Server(server.host, server.port, server.options));
    //    });
    //    s = new mongo.ReplSetServers( servers, config.mongo.replicasetOptions || {});
    //}else{
    //    s = new mongo.Server(config.mongo.servers[0].host,
    //                              config.mongo.servers[0].port,
    //                              config.mongo.servers[0].options || {});
    //}
    console.dir(config);
    //console.dir(mongo);
    var s = new mongo.Server(config.mongo.host, config.mongo.port, {});
    new mongo.Db(config.mongo.db, s, {safe:false})
        .open(function (err, client) {
          if (err || !client) {
              throw err;
          }
          collection = new mongo.Collection(client, 'towns');
          cb();
        });
}

module.exports = {
    mapRoutes : function(app, routes, prefix){
        prefix = prefix || '';
        var route;
        app.get('/', routes.index);
        for(route in routes){
            app.get(prefix + '/' + route, routes[route]);    
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
    parseMongoConnection: function(connectionString, obj){
        obj = obj || {};
        var rx = /mongodb:\/\/(\w*:)?(\w*@)?(\w+):(\d+)\/?(\w+)?/;
        var m = rx.exec(connectionString);
        //console.dir(m);
        obj.user = m[1];
        obj.password = m[2];
        obj.host = m[3];
        obj.port = parseInt(m[4], 10);
        obj.db = m[5];
        return obj;
    },
    testMongo : function(connectionString){
        console.log(connectionString);
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
            initMongo(function(){command(where, filter, cb);});
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
