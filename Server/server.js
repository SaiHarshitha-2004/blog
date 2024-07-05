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
  origin: 'https://mern-blog-frontend-gold-pi.vercel.app',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json()); 
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
app.get("/" , (req , res) => {
  res.json("hello") 
})
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
