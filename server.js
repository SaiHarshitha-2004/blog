const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));

const upload = multer( {dest : 'mern-blog/src/uploads'} )

app.use('/uploads', express.static('mern-blog/src/uploads'));

app.use(express.json({ extended: false }));


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
   };
   

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;

  
mongoose.connect( "mongodb://0.0.0.0:27017/mernBlog")
.then(
    () => {console.log("mongodb connected")}
)
.catch( 
    (e) => console.error(e)
)


const PostSchema = new mongoose.Schema( {
    title:String,
    summary:String,
    content:String,
    cover:String
} , {
    timestamps: true,
}) 

const collection = new mongoose.model('blogwebsites', PostSchema)


app.post('/api/blogwebsites', upload.single('file[]') , async (req, res) => {
    try {
        const { title, summary, content } = req.body;

        // console.log("files" , req.file)
        const { originalname , path} = req.file;
        const parts = originalname.split('.')
        const extension = parts[parts.length-1]
        const newPath = path+'.'+extension
        fs.renameSync(path , newPath)
        const postDoc = await collection.create({
            title,
            summary,
            content,
            cover: newPath
        });

        console.log("postDoc is " , postDoc);

        res.status(200).json(postDoc);
    } catch (error) {
        console.error("Error inserting post", error);
        res.status(500).json({ message: "Error inserting post", error });
    }
});

app.get('/api/blogwebsites', async (req, res) => {
    try {
        const posts = await collection.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts", error);
        res.status(500).json({ message: "Error fetching posts", error });
    }
});

app.get(`/api/blogwebsites/:postId` , async(req,res) => {
    const {postId} = req.params
    try {
        const objectId = new Object(postId)
        const singlePost = await collection.findOne({_id : objectId})
        res.status(200).json(singlePost)
    }
    catch(error){
        console.error("Error fetching single posts", error);
        res.status(500).json({ message: "Error fetching single posts", error });
    }
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));