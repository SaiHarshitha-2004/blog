import User from "../Models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import blogwebsites from "../Models/PostCollection.js";
import comments from "../Models/CommentCollection.js";


const JWT_SECRET_KEY = "MyKey"; 


const signup = async( req , res , next) => {

    const {name , email , password} = req.body 
    let existingUser ;
    try {
        existingUser = await User.findOne({ email : email } ) ;
    } catch (error) {
        console.log(error) ;
        
    }

    if(existingUser ) {
        return res.status(400).json({ message : "User already exists ! login Instead" });
    }

    const hashedPassword = bcrypt.hashSync(password) ;

    const user = new User( {
        name ,
        email ,
        password : hashedPassword,
    }) ;

    try {
        await user.save();
    } catch (error) {
        res.status(400).json({ message : error.message });
    }

    return  res.status(201).json({message : user } );
}


const login = async(req, res, next) => {
    const { email, password } = req.body;
    let existingUser ;
    try {
        existingUser = await User.findOne({ email : email });

    }
    catch (error) {
        return new Error(error) ;
    }
    if(!existingUser) {
        return res.status(400).json({ message : "User does not exist! Signup Please" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if(!isPasswordCorrect) {
        return res.status(400).json({ message : "Incorrect Email / password!" });
    }


    return res.status(200).json({
        message: "Successfully logged in!",
        user: {
            name: existingUser.name,
            email: existingUser.email
        }
    });
}


const getUser = async (req, res, next) => {
    const { email } = req.body;
    let user;
  
    try {
      user = await User.findOne({ email: email }).select("-password");
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


// const verifyToken = (req, res, next) => {
//     const cookie = req.cookies;
//     if (!cookie || !cookie[String(cookie)]) {
//       return res.status(401).json({ message: "Authentication failed!" });
//     }
  
//     const token = cookie[String(cookie)];
//     if (!token) {
//       return res.status(401).json({ message: "Authentication failed!" });
//     }
  
//     req.userId = token;
//     next();
//   };
  

const postArticles = async (req, res) => {
  
    try {

        // const body = req.body ;
        const { title, summary, image , description} = req.body;

        // const { originalname , path} = req.file;
        // const parts = originalname.split('.')
        // const extension = parts[parts.length-1]
        // const newPath = path+'.'+extension

        // renameSync(path , newPath)
        const postDoc = await blogwebsites.create({
            title,
            summary,
            image , 
            description,
        });

        console.log("postDoc is " , postDoc);

        res.status(200).json(postDoc);
    } catch (error) {
        console.error("Error inserting post", error);
        res.status(500).json({ message: "Error inserting post", error });
    }
}

// to get all posts
const getPostArticles =  async (req, res) => {
    try {
        const posts = await blogwebsites.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts", error);
        res.status(500).json({ message: "Error fetching posts", error });
    }
}


// to retrieve single post
const getPostArticlesByPostId = async(req,res) => {
    const {postId} = req.params
    try {
        const objectId = new Object(postId)
        const singlePost = await blogwebsites.findOne({_id : objectId})
        res.status(200).json(singlePost)
    }
    catch(error){
        console.error("Error fetching single posts", error);
        res.status(500).json({ message: "Error fetching single posts", error });
    }
    async(req,res) => {
    const {postId} = req.params
    try {
        const objectId = new Object(postId)
        const singlePost = await blogwebsites.findOne({_id : objectId})
        res.status(200).json(singlePost)
    }
    catch(error){
        console.error("Error fetching single posts", error);
        res.status(500).json({ message: "Error fetching single posts", error });
    }
}
}



const addComments = async (req, res) => {
    try {

      const { id , comment  } = req.body;
  
      const addComment = await comments.create({
        id : id , 
        comment : comment 
      });

      res.status(200).json(addComment);

  } catch (error) {
      console.error("Error inserting post", error);
      res.status(500).json({ message: "Error inserting post", error });
  }
  
   
  }



const getComments = async (req, res) => {  
    try {
      const cmts = await comments.find();
      res.status(200).json(cmts);
   } catch (error) {
      console.error("Error fetching posts", error);
      res.status(500).json({ message: "Error fetching posts", error });
  }
}




export { signup, login , getUser , postArticles, getPostArticles , getPostArticlesByPostId ,
    addComments , getComments
};


