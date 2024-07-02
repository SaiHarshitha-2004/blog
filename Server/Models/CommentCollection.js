import mongoose from "mongoose";

const Schema = mongoose.Schema ;


const CommentSchema = new Schema({
    id : Number,
    comment : String,
  })


  export default mongoose.model('comments', CommentSchema)
  