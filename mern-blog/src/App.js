import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Navbar from './components/Navbar';
import About from './pages/about';
import Error from './pages/Error';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:name" element={<Article />}/>
          <Route path="/articlesList" element={<ArticlesList />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App