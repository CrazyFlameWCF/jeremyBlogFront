import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import axios from 'axios';
import SearchBar from "./Search";


const BlogPost = (props) => {

  const location = useLocation()
  const postedBlog = location.state;
  
  const [ replySubmit, setReplySubmit ] = useState({
    email: '',
    message: '',
    id: location.state._id,
  });

  let { email, message } = replySubmit;

  const changeHandler = (e) => {
    setReplySubmit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(replySubmit)
    const requestToApi = async (data) => {
      console.log('submitting', replySubmit)
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comment/register`, data);
      console.log(request)
    }
    requestToApi(replySubmit)
  }
  
  const tagClickHandler = (e, id) => {
    e.preventDefault();
    let foundTagId = postedBlog.tag.find(eachTag => eachTag._id === id)
    console.log(foundTagId)
  }
  
  return (
    <>
      <SearchBar />
      <div className='flex flex-col p-4 bg-black text-white'>
        <p className='pb-2 font-bold'>Title: {postedBlog.title}</p>
        <p className='font-bold'>Email: {postedBlog.email}</p>
        <div className="flex gap-4">
          {postedBlog.tag.map((eachTag) => {
            return <p key={eachTag._id} className='px-4 py-2 rounded-full bg-red-900 text-white text-xs' onClick={(e) => tagClickHandler(e, eachTag.tag)}>{eachTag.tag}</p>
          })}
        </div>
        
      </div>
      <div className='bg-black'>
        <div className='m-4 p-4 border-2 border-gray-400 rounded-md bg-white'>
          <ReactMarkdown className='prose prose-indigo' remarkPlugins={[remarkGfm]}>
          {postedBlog.markdown}
          </ReactMarkdown>
        </div>
        
        <div className='pl-4'>
          <button className='bg-gray-400 border-2 border-gray-400 rounded-md w-24 p-1'><a href='./'>BACK</a></button>
        </div>
      </div>
      
      <div>
        <div className='p-4 font-bold border-t-2 border-b-2 border-gray-400 bg-black text-white'>
          <p>Comment: </p>
        </div>
        {location.state.comments.length > 0 &&
        location.state.comments.map((comment) => {
        return <div key={comment._id}>
          <div className='w-full p-4 bg-black text-white'>
            <div className='flex flex-row font-bold'>
              <p className='pr-2'>User:</p>{comment.email}
            </div>
            <div className='border-2 rounded-md p-2 border-gray-400 bg-black text-white'>
              {comment.message}
            </div>
          </div>
        </div>
        })
      }
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <div className='p-4 border-b-2 font-bold border-gray-400 bg-black text-white'>
            <p>Have something to say ? Leave a comment !</p>
          </div>
          <div className='p-4 font-bold border-gray-400 bg-black text-white'>
            <p>Email :</p>
            <input type='email' name='email' onChange={changeHandler} className='border px-2 py-1 border-gray-300 rounded-md text-black'/>
          </div>
          <div className='p-4 font-bold border-gray-400 bg-black text-white'>
            <p>Messeage :</p>
            <textarea type='text' name='message' onChange={changeHandler} className='border px-2 py-1 border-gray text-black rounded-md' />
          </div>
          <div className='p-4 border-gray-400 bg-black text-white'>
            <button type='submit' className='border px-2 py-1 font-bold bg-gray-500 rounded-md hover:bg-white'>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}
export default BlogPost;