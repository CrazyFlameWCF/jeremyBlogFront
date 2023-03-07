import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { MdSubdirectoryArrowRight, MdArrowBack } from "react-icons/md";

const BlogArticle = (props) => {

  const location = useLocation()
  const postedBlog = location.state;
  const navigate = useNavigate();

  const [ article, setArticle ] = useState();
  const [ resetWindow, setResetWindow ] = useState(false);
  const [ replySubmit, setReplySubmit ] = useState({
    email: '',
    message: '',
  });
  const [ showCommentForm, setShowCommentForm ] = useState(false);

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

  const dateFormatter = (string) => {
    return moment(string).format('LLL');
  }

  const switchComment = (e, state) => {
    setShowCommentForm(!state)
  }

  const navigateList = (e) => {
    navigate('/blog/list');
  }

  return (
    <div className="flex flex-col lg:items-center w-full">
      { !!article && 
        <div className="max-w-[585px] w-full">
          {/* TITLE, email, tags */}
          <div className="mb-4 border-b border-white pb-4">
            {/* TITLE */}
            <div className="pb-2">
              <p className='text-2xl font-semibold text-white'>{article.title}</p>
            </div>
            {/* EMAIL, DATE */}
            <div className="flex gap-2 mb-2">
              <p className='text-xs text-white'>{dateFormatter(article.createdAt)}</p>
              <p className='text-xs text-white'>{article.email}</p>
            </div>
            {/* TAGS */}
            <div className="flex gap-2">
              {article.tag.map((eachTag) => {
                return <p key={eachTag._id} className='px-4 py-1 rounded-full bg-yellow-600/40 text-white text-xs hover:bg-white hover:text-yellow-600/40 hover:cursor-pointer' onClick={(e) => tagClickHandler(e, eachTag._id)}>{eachTag.tag}</p>
              })}
            </div>
          </div>

          {/* MD */}
          <div className="w-full">
            <ReactMarkdown className='p-4 w-full prose prose-indigo bg-white rounded-md' remarkPlugins={[remarkGfm]}>
              {article.markdown}
            </ReactMarkdown>
          </div>

          {/* Comment */}
          <div className="w-full">
            {article.comments.length > 0 &&
            article.comments.map((comment) => {
            return <div key={comment._id}
              className='flex flex-col w-full pt-3 gap-2 mb-2'
            >
              <div className="flex">
                <MdSubdirectoryArrowRight className="w-7 h-7 text-white"/>
                <div className='rounded-md px-4 py-2 text-white bg-yellow-600/40 w-full shadow-sm'>
                  {comment.message}
                </div>
              </div>
              <div className="w-full flex justify-end text-xs text-white gap-2">
                <p className='pr-2'></p>{comment.email}
                <p>{dateFormatter(comment.createdAt)}</p>
              </div>
            </div>
            })
          }
          </div>

          {/* Buttons */}
          <div className="w-full max-w-[585px] flex gap-4 mt-4">
            <button 
              className="w-1/3 border px-4 py-2 border-white text-white rounded-md flex items-center justify-center hover:bg-yellow-600/40 hover:border-yellow-600/40"
              onClick={navigateList}
            >
              <MdArrowBack className="w-5 h-5 mr-2" />List
            </button>
            <button 
              className="w-2/3 bg-yellow-600/40 text-white rounded-md border border-yellow-600/40 hover:border-white hover:bg-transparent"
              onClick={(e) => switchComment(e, showCommentForm)}
            >
                Leave Comment
            </button>
          </div>
          
          {/* Comment Form */}
          {
            showCommentForm &&
            <form onSubmit={submitHandler}
              className='w-full max-w-[585px] border-t border-white mt-8 py-4 flex flex-col gap-4'
            >
              <div className='border-gray-400 text-white'>
                <p>Email :</p>
                <input type='email' name='email' onChange={changeHandler} value={email} className='px-4 py-2 rounded-md text-black w-full text-sm'/>
              </div>
              <div className='border-gray-400 text-white'>
                <p>Messeage :</p>
                <textarea type='text' name='message' rows='4' onChange={changeHandler} value={message} className='px-4 py-2 text-black rounded-md w-full text-sm' />
              </div>
              <button type='submit' className='bg-yellow-600/40 text-white rounded-md border border-yellow-600/40 hover:border-white hover:bg-transparent py-2'>Submit</button>
            </form>
          }

        </div>
      }
    </div>
  );
}
export default BlogArticle;