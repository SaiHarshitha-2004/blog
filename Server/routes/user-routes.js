import express from 'express';
import {
    signup , login  ,
     getUser , postArticles , getPostArticles ,
      getPostArticlesByPostId , 
      addComments , getComments
 } 
   from "../Controllers/user-controller.js"

const router = express.Router();


router.post("/signup" , signup)
router.post("/login" , login)
router.get("/users"  , getUser ) ;


router.post("/blogwebsites" , postArticles) ;
router.get("/blogwebsites" , getPostArticles) ;
router.get("/blogwebsites/:postId" , getPostArticlesByPostId) ;


router.post("/addComments" , addComments) ;
router.get("/addComments" , getComments)
// router.get("/addComments/:id" , getCommentsById) ;


export default router;
