const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

/*we have to tell our server to serve static files from the
 public directory. You need to enable it using the following 
 built-in middleware:*/
// Make everything inside of public/ available
app.use(express.static('public'));

/*you don’t have to put public/ in the relative path when want 
to use anything from the public folder - the app will know that
if the static file is what you want to show/use, it will look for it inside public folder by default */

/*
//app - our express server (represents Express app object),
//.get() - the HTTP verb/method needed to access this page,
///home -> is the route
app.get('/home', (request, response, next) => {
    
    console.log(request);
    //response- response is the HTTP response object that we’ll send to the client. 
    response.send('<h1>Welcome Ironhacker. :)</h1>');
  });

  app.get('/cat', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Cat</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Cat</h1>
          <p>This is my second route</p>
          <img src="/images/cool-cat.jpg" />
        </body>
      </html>
    `);
  });

*/

//Rewrite express code to use views and return files
// our first Route:
app.get('/home', (request, response, next) => 
response.sendFile(__dirname + '/views/home-page.html'));

// cat route:
app.get('/cat', (request, response, next) => 
//use send file method to return a file
response.sendFile(__dirname + '/views/cat-page.html'));


  app.listen(3000, () => 
  console.log('My first app listening on port 3000! '));