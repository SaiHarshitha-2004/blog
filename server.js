const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));

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

const collection = new mongoose.model('blogwebsite', PostSchema)



const renameFile = (originalName, path) => {
    const parts = originalName.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    return newPath;
};

app.post('/api/blogwebsite', async (req, res) => {
    try {
        const { name , path } = req.file;
        
        console.log("Original file info:", req.file);
        const newPath = renameFile(name, path);
        const { title, summary, content } = req.body;

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

app.get('/api/blogwebsite', async (req, res) => {
    try {
        const posts = await collection.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts", error);
        res.status(500).json({ message: "Error fetching posts", error });
    }
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));