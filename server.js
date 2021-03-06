const express = require('express');
const todoController = require('./controllers/todo-cotroller');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');  //template engine
app.use(express.static(__dirname + '/assets')); //static files handler (css, js)

todoController(app);

app.listen(port);
console.log('listening on port: ' + port);