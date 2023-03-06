import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import BlogList from './BlogList';
import BlogHeader from './BlogHeader';
import BlogAllList from './BlogAllList';

const BlogLanding = ({callBlog, setCallBlog}) => {
  const [ foundTag, setFoundTag ] = useState('');
  const [ tagList, setTagList ] = useState(false);
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
    <section className='bg-black text-white h-full'>
      {allBlogs &&<>
        <BlogHeader />
        <Outlet context={blogData} />
      </>
      }
    </section>

  );
}
export default BlogLanding;