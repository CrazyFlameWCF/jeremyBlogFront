import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import { useState } from 'react';

// pages
import Login from './pages/account/Login';
// import Register from './pages/Register';
import Landing from './pages/landing/Landing';
import AboutMe from './pages/landing/AboutMe';
import Contact from './pages/landing/Contact';
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
    <div className='w-screen h-screen font-Roboto'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} >
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/musician' element={<Musician />} />
            <Route path='/coding' element={<Coding />} />
            <Route path='/to' element={<TO />} />
            {/* <Route path='/register' element={<Register />} /> */}
            <Route path='/blog' element={<BlogLanding callBlog={callBlog} />} >
              <Route path='/blog/list' element={<BlogAllList />} />
              <Route path='/blog/:id' element={<BlogArticle />} />
              <Route path='/blog/postblog' element={<ArticleRegister callBlog={callBlog} setCallBlog={setCallBlog} />} />

              <Route path='/blog/tag/:id' element={<TagList />} />
              
              <Route path='/blog/search' element={<SearchLanding />} >
                <Route path='/blog/search/:id' element={<SearchTag />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;