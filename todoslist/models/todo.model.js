'use strict'

// const { editTask } = require('../controllers/todo.controller');

const mongoose = require('../../common/services/mongoose.service').mongoose;
const tasksSchema = new mongoose.Schema({

    description:{
        type:mongoose.Schema.Types.String
    },
    data:{
        type:mongoose.Schema.Types.Number
    },
    time:{
        type:mongoose.Schema.Types.Number
    }

},{versionKey:false})

tasksSchema.set('toJSON', {virtuals:false});
const tasks = mongoose.model('tasks', tasksSchema, 'tasks');

exports.getTodo = () =>{

    return new Promise((resolve,reject)=>{

        tasks.find({}).exec((error,result)=>{

            if(error){
                reject(error.message);
            }
            
            if(result){
                resolve(result);
            }
        })

    }).catch(error=>{
        throw error.message;
    })

}

exports.addTask = (info)=>{

    try{
        const task = new tasks(info);
        return task.save().catch(error=>error.message);
    
    }catch(error){
        throw error.message
    }

}

exports.deleteTask = (id)=>{

    return new Promise((resolve,reject)=>{

        tasks.deleteOne({_id:id}).exec((error,result)=>{

            if(error){
                reject(error.message);
                throw error.message;
            }
            if(result.deletedCount){
                resolve(true);
            }else{
                resolve(false);
            }
        })

    }).catch(error=>{
        throw error.message;
    })
}

exports.editTask = (data)=>{
    // a "data se le asigna lo que hay en "body" desde product.controller
    return new Promise((resolve,reject)=>{

        tasks.updateOne({_id:data._id},{$set:data}).exec((error,result)=>{
            //actualiza el objeto en la base de datos

            if(error){
                reject(error.message);
                throw error.message;
            }
            console.log('result back: ',result);

            if(result.modifiedCount){
                //"modifiedCount" no devuelve el número de documentos modificados, en este caso 0 (false) o 1 (true) pq sólo se edita 1 documento
                resolve(true);
            }else{
                resolve(false);
            }
        })

    }).catch(error=>{
        throw error.message;
    })
} 