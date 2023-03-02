import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import axios from 'axios';

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
  
  return (
    <>
      <div className='flex flex-col p-3'>
        <p>Title: {postedBlog.title}</p>
        <p>Email: {postedBlog.email}</p>
        {/* <p>Tags: {postedBlog.tag}</p> */}
      </div>
      <div className='w-2/3 m-4 p-4 border-2 border-black bg-white'>
        <ReactMarkdown className='p-8 prose prose-indigo' remarkPlugins={[remarkGfm]}>
        {postedBlog.markdown}
        </ReactMarkdown>
      </div>
      <div>
        {location.state.comments.length > 0 &&
        location.state.comments.map((comment) => {
        return <div key={comment._id}>
          <div className='w-2/3 m-4 p-4 border-2 border-black bg-white'>
            <div>
              {comment.email}
            </div>
            <div>
              {comment.message}
            </div>
          </div>
        </div>
        })
      }
      </div>

      <form onSubmit={submitHandler}>
        <div className='p-12 bg-gray'>
          <div>
            <p>Email :</p>
            <input type='email' name='email' onChange={changeHandler} className='border px-2 py-1 border-gray-300'/>
          </div>
          <div>
            <p>Messeage :</p>
            <textarea type='text' name='message' onChange={changeHandler} className='border px-2 py-1 border-gray' />
          </div>
          <button type='submit' className='border px-2 py-1 font-bold hover:bg-gray-500 rounded-md'>Submit</button>
        </div>
      </form>
    </>
  );
}
export default BlogPost;