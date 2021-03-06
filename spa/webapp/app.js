'use strict';
var http     = require( 'http' ),
    express  = require( 'express' ),
    app      = express(),
    server   = http.createServer( app );

//----------------SERVER CONFIG START----------------
app.configure( function() {
    app.use( express.bodyParser() );
    app.use( express.methodOverride() );
});

app.configure( 'development', function() {
    app.use( express.logger() );
    app.use( express.errorHandler({
        dumpExceptions : true,
        showStack      : true
    }) );
});

app.configure( 'production', function() {
   app.use( express.errorHandler() ); 
});

app.get('/', function( request, response) {
    response.send( 'Hello Express');
});
//----------------SERVER CONFIG END------------------
server.listen(3000);
console.log(
    'Express-сервер прослушивает порт %d в режиме %s',
    server.address().port, app.settings.env
);