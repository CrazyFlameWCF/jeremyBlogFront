import LiveMarkdown from "./LiveMarkdown";
import React from 'react';


const Blog = (props) => {

  return (
    <>
    <p>Blog page</p>
    <div className='flex w-24 h-8 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600'>
      <a href='/bloglanding'>Post</a>
    </div>
    </>
  );
}
export default Blog;