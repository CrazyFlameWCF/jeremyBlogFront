import LiveMarkdown from "../LiveMarkdown";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react' 
import { useNavigate } from "react-router-dom";
import SearchBar from "./Search";
import SearchedResults from "./SearchedResults";

const Blog = (props) => {

  const [allBlogs, setAllBlogs ] = useState([]);
  const [ searchedPost, setSearchedPost ] = useState([]);
  const [ callUseEffect, setCallUseEffect ] = useState(true);

  const navigate = useNavigate();

  useEffect(()=> {
    let isMounted = true;
    console.log(allBlogs)

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
    },[]
    //[] => prevent unlimit call
  )

  useEffect(() => {
    return () => {
      setCallUseEffect(!callUseEffect)
    }
  },[callUseEffect])

  const blogClickHandler = (e, id) => {
    e.preventDefault();
    let foundBlog = allBlogs.find(blog => blog._id === id)
    navigate(`/blog/${foundBlog._id}`, {state: foundBlog})
    console.log(foundBlog)
  }

  return (
    <>
      <SearchBar allBlogs={allBlogs} setSearchedPost={setSearchedPost} callUseEffect={callUseEffect} setCallUseEffect={setCallUseEffect} />
      {searchedPost.length !== 0 ? 
        <SearchedResults searchedPost={searchedPost} />
      :
        <>
          <p className='pl-4 font-bold'>Blogs</p>
          <div>
            {allBlogs.length > 0 && allBlogs.map((data) => {
              return <div 
                className="flex flex-col border-4 p-4 m-2 border-gray-400 rounded-md bg-gray-200 hover:bg-gray-500 gap-2" key={data._id} onClick={(e) => blogClickHandler(e, data._id)}>
                <a href="/BlogShowing"></a>
                <p>{data.title}</p>
                {/* <p>{data.tag}</p> */}
                <p>{data.email}</p>
              </div>
            }

            )}
          </div>
        </>
      }



      <div className='flex w-24 h-8 items-center justify-center bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600'>
        <a href='/bloglanding'>Post</a>
      </div>
    </>
  );
}
export default Blog;