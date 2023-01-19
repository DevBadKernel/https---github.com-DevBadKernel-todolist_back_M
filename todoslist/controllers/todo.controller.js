'use strict'

const todoModel = require('../models/todo.model');
//importación del productModel

exports.getALLTask = (request,response)=>{
    console.log('received getALLTodo request');
    
    todoModel.getTask().then((task,error)=>{
        
        if(error){
            throw error.message;
        }

        if(task){
            return response.status(200).send(task);
        }else{
            return response.status(204);
        }

    }).catch(error=>{
        throw error.message;
    })
}

exports.addTask = (request,response)=>{
    console.log('received addTask request');
    
    todoModel.addTask(request.body.info).then((task,error)=>{
        //"body" contiene todos los objetos

        if(error){
            throw error.message;
        }

        if(task){
            return response.status(200).send({info:true});
        }else{
            console.error('error adding task');
            return response.status(500);
        }

    }).catch(error=>{
        throw error.message;
    })
}

exports.deleteTask = (request,response)=>{
    //función síncrona
    console.log('receive deleteTask request');

    todoModel.deleteTask(request.params.id).then((task,error)=>{

        if(error){
            throw error.message;
        }

        if(task){
            return response.status(200).send({info:true});
        }else{
            console.error('error on delete task');
            return response.status(500);
        }

    }).catch(error=>{
        throw error.message;
    })
}

exports.editTask = (request,response)=>{
    //función síncrona
    console.log('receive editTask request');
    console.log('receive body',request.body);

    todoModel.editTask(request.body).then((task,error)=>{

        if(error){
            throw error.message;
        }

        if(task){
            return response.status(200).send({info:true});
        }else{
            console.error('error edit task');
            return response.status(500);
        }
        
    }).catch(error=>{
        throw error.message;
    })
}