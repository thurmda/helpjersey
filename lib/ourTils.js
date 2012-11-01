module.exports = {
    mapRoutes : function(app, routes, prefix){
        prefix = prefix || '';
        var route;
        app.get('/', routes.index);
        for(route in routes){
            //console.log('mapping ' + prefix + '/' + route + ' to method ' + routes[route]);
            app.get(prefix + '/' + route, routes[route]);    
        }
    }

}
