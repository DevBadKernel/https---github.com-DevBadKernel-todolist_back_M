'use strict'

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const Todo = require('./todoslist/routes/todo.routes');

Todo.TodoRoutes(app);

app.listen(3000,'localhost',()=>{
    console.log('server listening on port %s',3000);
})