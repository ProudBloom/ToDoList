const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test@todo.bi8uk.mongodb.net/<dbname>?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});

//Schema for a DB collection
var todoSchema = new mongoose.Schema({
    taskName: String,
    taskPriority: String
});

//Model of data inside the collection
var Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app)
{
    app.get('/todolist', function(req, res)
    {
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todolist', {todos: data});
        }); //Get all the items from collection and pass to the view
    });

    app.post('/todolist', urlEncodedParser, function(req, res)
    {
        var newTodo = Todo(req.body).save(function(err, data) {
            if(err) throw err;
            res.json({todos: data});
        });
    });

    app.delete('/todolist/:taskName', function(req, res)
    {
        Todo.find({taskName: req.params.taskName.replace(/\-/g, ' ')}).deleteOne(function(err, data){
            if(err) throw err;
            res.json({todos: data});
        });
    });
}