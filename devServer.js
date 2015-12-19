var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

var todos = [
    {
        id: 1,
        title: 'Learn React.js',
        description: 'Learn React.js, Redux, React Router etc.'
    },
    {
        id: 2,
        title: 'Build Apps',
        description: 'Build Frontend, backend etc.'
    }
];
app.get('/todos', function(req, res) {
   res.send(todos);
});
app.get('/todos/:id', function (req, res) {
    var todo = todos.filter(function(todo) { return todo.id == req.params.id})[0];
    res.send(todo);
});
app.post('/todos', function(req, res) {
    var allIds = todos.map(function(todo) { return todo.id});
    var nextId = Math.max.apply(Math, allIds) + 1;
    var todo = {id: nextId, title: req.body.title, description: req.body.description};
    todos.push(todo);
    res.send(todo);
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
