const mongoose = require('mongoose');

let count = 0;

const options = {
    autoIndex:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectWithRetry = ()=>{
        console.log('Mongo connection with retry');
        mongoose.connect('mongodb://toniMongodb:todolistdb@127.0.0.1:27017/todolist', options).then(()=>{
            console.log('🟢 La conexión MongoDB tuvo éxito.');

        }).catch(error=>{
            console.log('Mongo connection unsuccesful, retry after 5 seconds.', ++count);
            console.log('🔴 Error en la conexión DB:', error);
            setTimeout(connectWithRetry, 5000);
        })
}

connectWithRetry();
exports.mongoose = mongoose;