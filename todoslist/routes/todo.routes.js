'use strict'

const TaskController = require('../controllers/todo.controller');

exports.TodoRoutes = function(app){

    app.get('/api/get_tasks', TaskController.getALLTask);

    app.post('/api/add_task', TaskController.addTask);

    app.delete('/api/delete_task/:id', TaskController.deleteTask);

    app.put('/api/update_product/', TaskController.editTask);

    //importante que las urls coincidan en front y en back
    
}