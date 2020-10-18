const bodyParser = require('body-parser');

var data = [];
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app)
{
    app.get('/todolist', function(req, res)
    {
        res.render('todolist', {todos: data});
    });

    app.post('/todolist', urlEncodedParser, function(req, res)
    {
        data.push(req.body);
        res.json({todos: data});
    });

    app.delete('/todolist/:taskName', function(req, res)
    {
        data = data.filter(function(todo){
            return todo.taskName.replace(/ /g, '-') !== req.params.taskName;
        });
        res.json({todos: data})
    });
}