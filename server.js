const express = require('express');
const todoController = require('./controllers/todo-cotroller');
//const modalController = require('./controllers/modal-controller');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');  //template engine
app.use(express.static(__dirname + '/assets')); //static files handler

todoController(app);


app.listen(port);
console.log('listening on port: ' + port);
