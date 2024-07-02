import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import ShowLatest from './pages/ShowLatest.jsx';
import Navbar from './components/Navbar.jsx';
import Error from './pages/Error.jsx';
import DynamicData from './data/DynamicData.jsx';
import Compose from '../src/ComposeAndPostPages/Compose.jsx'
import SinglePost from './ComposeAndPostPages/singlePost.jsx';
import Footer from './pages/Footer.jsx';
import SingleArticleData from './data/SingleArticleData.jsx';
import ShowAllPosts from './ComposeAndPostPages/ShowAllPosts.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';

const App = () => {

  return (
    <>
     <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/article/:name" element={<Article />}/> */}
          {/* <Route path="/articlesList" element={<LatestArticles/>}/> */}


          <Route path="/articlesList" element={<ShowLatest/>}/>

          <Route path="/articlesList/:search" element={<ShowLatest/>}/>
          <Route path="/singleArticle/:id" element={<SingleArticleData />}/>
          <Route path='/articlesList/:search/docs' element={<DynamicData />}/>
          <Route path='/MyPost/:postId' element={ <SinglePost />} />
          <Route path='/writeBlog' element={<Compose />}/>
          <Route path="/showposts" element={<ShowAllPosts />} />
          <Route path="/signup" element={<SignUp /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
    </Router>
    </>
   
  )
}

export default App


