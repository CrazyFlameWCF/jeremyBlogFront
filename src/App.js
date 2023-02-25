import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Login from './pages/Login';
// import Register from './pages/Register';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Musician from './pages/Musician';
import TO from './pages/TO';
import BlogLanding from './pages/BlogLanding'

const App = (props) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/musician' element={<Musician />} />
          <Route path='/to' element={<TO />} />
          {/* <Route path='/register' element={<Register />} /> */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/bloglanding' element={<BlogLanding />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;