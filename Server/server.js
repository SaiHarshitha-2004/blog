import express, { static as expressStatic , json } from 'express';
import cors from 'cors';
import router from "./routes/user-routes.js";
import { connect} from 'mongoose';
import {USERNAME , PASSWORD , ENVPORT } from "./config.js"
import dotenv from 'dotenv';
import cookieParser from "cookie-parser" ;
dotenv.config();

const app = express();

const corsOptions = {
  origin: 'https://mern-blog-client-snowy.vercel.app',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json()); // Ensure this is correctly placed
app.use('/api', router);
app.use(express.static('public'));



app.use(expressStatic('public'));


app.use(json({ extended: false }));





const PORT = ENVPORT || 3001;


const uri =  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wevnywk.mongodb.net/`


  
connect( `${uri}mernBlog`)
.then(
    () => {console.log("mongodb connected")}
)
.catch( 
    (e) => console.error(e)
)

  

  // app.get('/api/addComments/:id',async (req, res) => {  
  //   try {

  //     const {id} = req.params.id;
  //     const singleCmt = await CommentCollection.find({id});
  //     res.status(200).json(singleCmt);
  //  } catch (error) {
  //     console.error("Error fetching posts", error);
  //     res.status(500).json({ message: "Error fetching posts", error });
  // }
  //   res.json(filteredArticles);
  // });
  
  

// app.get('/api/search', async (req, res) => {

//     const { query } = req.query;
//     const CX = process.env.REACT_APP_GOOGLE_ENGINE_ID;
//     const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
//     // console.log('Query:', query , cx);

// //   https://customsearch.googleapis.com/customsearch/v1?key=AIzaSyD9jNklrtOGwjZgibNVCUoR90yWmWFLwd8&cx=348416ed224654427&q=docker
//     try {
//         const uri = `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}`
//       const response = await get(uri, {
//         // params: {
//         //   key: apiKey,
//         //   cx: cx,
//         //   q: query,
//         // },
//       });
//       console.log('Google API Response:', response.data);
//       res.status(200).json(response.data);
//     } catch (error) {
//       console.error("Error fetching Google search data", error.response ? error.response.data : error.message);
//       res.status(500).json({ message: "Error fetching Google search data", error: error.response ? error.response.data : error.message });
//     }
//   });

app.get("/" , (req , res) => {
  res.json("hello") 
})



app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
