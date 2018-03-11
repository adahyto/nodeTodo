const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const handles = require('express-handlebars');
const bodyParser = require('body-parser');
const override  = require('method-override');

const database = 'localhost:27017/toDo';
mongoose.connect('mongodb://' + database).then((db)=>{
    console.log(`mongodb://${database} connected`);    
}).catch(error=>{console.log(error);});


// using static
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.engine('handlebars', handles({defaultLayout: 'landing'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// override
app.use(override('_method'));
// load routes
const landing = require('./routes/landing/index');
const board = require('./routes/board/index');
const tasks = require('./routes/board/tasks');

// use routes
app.use('/', landing);
app.use('/board', board);
app.use('/board/tasks', tasks);

const port = 3000;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});