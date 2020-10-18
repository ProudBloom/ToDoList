var data = [
    {taskName: 'take the trash', taskPriority: 'low'},
    {taskName: 'get milk', taskPriority: 'low'},
    {taskName: 'walk the dog', taskPriority: 'high'},
]

module.exports = function(app)
{
    app.get('/todolist', function(req, res)
    {
        res.render('todolist', {todos: data});
    });

    app.post('/todolist', function(req, res)
    {

    });

    app.delete('/todolist', function(req, res)
    {

    });
}