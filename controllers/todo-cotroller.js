const bodyParser = require('body-parser');

var data = [
    
];
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

    app.delete('/todolist', function(req, res)
    {

    });
}