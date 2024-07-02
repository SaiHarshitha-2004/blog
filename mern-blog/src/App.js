import React from 'react';
import {BrowserRouter as Router , Routes , Route, RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Navbar from './components/Navbar';
import About from './pages/about';
import Error from './pages/Error';
import LatestArticles from './components/latestArticles';
import { InitialState } from './context/context';
import DynamicData from './data.js/DynamicData';
import Compose from '../src/ComposeAndPostPages/Compose'
import MyPost from './ComposeAndPostPages/myPost';
import SinglePost from './ComposeAndPostPages/singlePost';

const App = () => {
  const {search , postId} = InitialState()

  return (
    <Router>
      <Navbar />
      <div className='h-screen m-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:name" element={<Article />}/>
          <Route path="/articlesList" element={<LatestArticles/>}/>
          <Route path="/articlesList/:search" element={<ArticlesList/>}/>
          <Route path='/articlesList/:search/docs' element={<DynamicData />}/>
          <Route path='/MyPost/:postId' element={ <SinglePost />} />
          <Route path='/writeBlog' element={<Compose />}/>
          <Route path='/MyPost' element={<MyPost />} />
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App