import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import BlogHeader from './BlogHeader';


const BlogLanding = ({callBlog, setCallBlog}) => {
  const [ allBlogs, setAllBlogs ] = useState([]);

  const blogData = {
    allBlogs: allBlogs,
  }
  
  useEffect(()=> {
    let isMounted = true;

    const requestToAPI = async () => {
      if (isMounted) {
        let request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/viewAll`)
        if (request.data.success) {
          setAllBlogs(request.data.blog)
        }
      }
    }
    requestToAPI()

    return () => {
      isMounted = false;
    }
    },[callBlog]
  )

  return (
    <section className="w-full h-full flex flex-col items-start p-8">
    <div className="px-8 py-8 bg-white/40 w-11/12 rounded-xl overflow-auto">
      {allBlogs && <BlogHeader />}
      {allBlogs && <Outlet context={blogData} />}
    </div>
  </section>


  );
}
export default BlogLanding;