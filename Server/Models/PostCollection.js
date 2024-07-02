import mongoose from "mongoose";

const Schema = mongoose.Schema ;

const PostSchema = new Schema( {
    title:String,
    summary:String,
    image:String,
    description:String
} , {
    timestamps: true,
}) 


export default mongoose.model('blogwebsites', PostSchema)
