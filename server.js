// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

app.set('views engine','pug');
app.set('views','./views');
// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});
app.get('/todos', (request, response) => {
  response.render('todos.pug', {list:[{work:'Đi Chợ'},{work:'Nấu Cơm'},{work:'Rửa Bát'},{work:'Học tại CoderX'}]});
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
