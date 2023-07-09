
var mongoose = require('mongoose');

async function connectionWithDB (){
try {
    var mongoDB = 'mongodb://127.0.0.1:27017/User-Form';
    await mongoose.connect(mongoDB, { useNewUrlParser: true });
    console.log("connection with database established successfully")
}catch (err){
    console.log(err)
}
}

module.exports= connectionWithDB
