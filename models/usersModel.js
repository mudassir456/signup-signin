let {Schema,model}= require("mongoose")

let userschema = new Schema({
  username: {
    type : String,
    required :true
  },
  password: {
    type : String,
    required :true
  },
  email: {
    type : String,
    required :true
  },
})


module.exports=model("User",userschema)