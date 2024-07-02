import mongoose from "mongoose";

const Schema = mongoose.Schema ;

const userSchema = new Schema( {
    name : {
        type : 'string',
        required : true
    } ,
    email : {
        type : 'string',
        required : true,
        unique : true
    }, 
    password : {
        type : 'string',
        required : true,
        minlength : 6
    }
})

export default mongoose.model('User', userSchema);
