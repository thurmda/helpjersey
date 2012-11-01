module.exports = {
    mapRoutes : function(app, routes){
        var route;
        app.get('/', routes.index);
        for(route in routes){
            app.get('/'+route, routes[route]);    
        }
    }

}
