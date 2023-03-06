import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BlogArticle = ({callBlog, setCallBlog}) => {

  const location = useLocation()
  const postedBlog = location.state;
  const navigate = useNavigate();

  const [ article, setArticle ] = useState();
  const [ resetWindow, setResetWindow ] = useState(false);
  const [ replySubmit, setReplySubmit ] = useState({
    email: '',
    message: '',
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
    let tempForm = {
      email: replySubmit.email,
      message: replySubmit.message,
      id: article._id,
    }
    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comment/register`, data);
      if (request.data.success) {
        let emptyState = {
          email: '',
          message: '',
          id: '',
        }
        setCallBlog(!callBlog)
        setReplySubmit(emptyState)
        window.location.reload()
      }
    }
    requestToApi(tempForm)
  }
  
  const tagClickHandler = (e, tag) => {
    e.preventDefault();
    let foundTag = tag
    navigate(`/blog/tag/${foundTag}`)
  }

  useEffect(() => {
    let isMounted = true;
    let currntPath = location.pathname.slice(6)

    const callAPI = async () => {
      if(isMounted) {
        let request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/view/${currntPath}`) 
        
        if(request.data.success) {
          setArticle(request.data.article[0])
        }
      }
    }
    callAPI();
    return () => {
      isMounted = false;
    }
  },[resetWindow])

  return (
    <>
    { !!article && 
      <>
        <div className='flex flex-col p-4 bg-black text-white'>
          <p className='pb-2 font-bold'>Title: {article.title}</p>
          <p className='font-bold pb-4'>Email: {article.email}</p>
          <div className="flex gap-4">
            {article.tag.map((eachTag) => {
              return <p key={eachTag._id} className='px-4 py-2 rounded-full bg-red-900 text-white text-xs' onClick={(e) => tagClickHandler(e, eachTag._id)}>{eachTag.tag}</p>
            })}
          </div>
          
        </div>
        <div className='bg-black'>
          <div className='m-4 p-4 border-2 border-gray-400 rounded-md bg-white'>
            <ReactMarkdown className='prose prose-indigo' remarkPlugins={[remarkGfm]}>
            {article.markdown}
            </ReactMarkdown>
          </div>
          
          <div className='pl-4 pb-4'>
            <button className='bg-gray-400 border-2 border-gray-400 rounded-md w-24 p-1'><a href='./list'>Back To List</a></button>
          </div>
        </div>
        
        <div>
          <div className='p-4 font-bold bg-black text-white'>
            <p>Comment: </p>
          </div>
          {article.comments.length > 0 &&
          article.comments.map((comment) => {
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
              <input type='email' name='email' onChange={changeHandler} value={email} className='border px-2 py-1 border-gray-300 rounded-md text-black'/>
            </div>
            <div className='p-4 font-bold border-gray-400 bg-black text-white'>
              <p>Messeage :</p>
              <textarea type='text' name='message' onChange={changeHandler} value={message} className='border px-2 py-1 border-gray text-black rounded-md' />
            </div>
            <div className='p-4 border-gray-400 bg-black text-white'>
              <button type='submit' className='border px-2 py-1 font-bold bg-gray-500 rounded-md hover:bg-white'>Submit</button>
            </div>
          </div>
        </form>

      </>
    }
    </>
  );
}
export default BlogArticle;