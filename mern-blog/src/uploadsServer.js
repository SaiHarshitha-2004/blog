const express = require('express');
const app = express();
const multer  = require('multer')
const uploadMiddleware = multer( {dest : 'uploads/'})

const PORT = process.env.PORT || 4000;
app.post('/post' , uploadMiddleware.single('file') , (req,res) => {
    res.json(req.files)

})

app.listen( PORT , () => console.log('upload server is listening at 4000'))