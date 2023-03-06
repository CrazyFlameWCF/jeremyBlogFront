import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import { useState } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Login from './pages/account/Login';
// import Register from './pages/Register';
import Landing from './pages/landing/Landing';
import AboutMe from './pages/landing/AboutMe';
import Contact from './pages/landing/Contact';
import Blog from './pages/blog/BlogList';
import BlogAllList from './pages/blog/BlogAllList';
import BlogArticle from './pages/blog/BlogArticle';
import BlogLanding from './pages/blog/BlogLanding';
import Musician from './pages/musician/Musician';
import TO from './pages/to/TO';
import ArticleRegister from './pages/post/ArticleRegister';
import SearchTag from './pages/blog/SearchTag';
import SearchLanding from './pages/blog/search/SearchLanding';
import TagList from './pages/blog/tag/TagList';
import Coding from './pages/coding/Coding';

const App = (props) => {

  const [ callBlog, setCallBlog ] = useState(false);

  return (
    <div className='bg-black flex flex-col'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/musician' element={<Musician />} />
          <Route path='/coding' element={<Coding />} />
          <Route path='/to' element={<TO />} />
          {/* <Route path='/register' element={<Register />} /> */}
          <Route path='/blog' element={<BlogLanding callBlog={callBlog} setCallBlog={setCallBlog} />} >
            <Route path='/blog/list' element={<BlogAllList />} />
            <Route path='/blog/:id' element={<BlogArticle callBlog={callBlog} setCallBlog={setCallBlog}/>} />
            <Route path='/blog/postblog' element={<ArticleRegister callBlog={callBlog} setCallBlog={setCallBlog} />} />

            <Route path='/blog/tag/:id' element={<TagList />} />
            
            <Route path='/blog/search' element={<SearchLanding />} >
              <Route path='/blog/search/:id' element={<SearchTag />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;