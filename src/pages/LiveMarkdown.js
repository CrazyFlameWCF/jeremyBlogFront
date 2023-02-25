import React from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';

const LiveMarkdown = (props) => {

  const [ articleSubmit, setArticleSubmit ] = useState({
    title: '',
    markdown: '',
    tag: '',
  })

  const { title, markdown, tag } = articleSubmit;

  const submitHandler = (e) => {
    e.preventDefault();

    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog/register`, data);
      console.log(request)
    }
  
  requestToApi(articleSubmit)

  }

  const changeHandler = (e) => {
    setArticleSubmit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }



  return (
    <>
    <div className='flex flex-row w-full'>
      
        <div className='w-1/2'>
          <div className='flex flex-row'>
            <label htmlFor='title'>
              Title :
            </label>
            <input type='title' name='title' className='border-1 px-2 py-1 border-gray-300 rounded-ms' value={title} onChange={changeHandler} />
            <label htmlFor='tag'>
              Tags :
            </label>
            <input type='tag' name='tag' className='border-1 px-2 py-1 border-gray-300 rounded-ms' value={tag} onChange={changeHandler} />
          </div>

          <textarea className="w-full h-72 border-2" name='markdown' value={markdown} onChange={changeHandler}>
          </textarea>
          <button type='submit' className='border px-2 py-1 font-bold hover:bg-red-800 hover:text-black rounded-md' onClick={(submitHandler)}>
          <a href='/Blog'>Submit</a></button>
        </div>
      

      <div className='w-1/2 h-72 border-1'>
        <p>Preview</p>
        <p>{title}</p>
        <div className='w-full p-4 bg-white'>
          <ReactMarkdown className='p-8 prose prose-indigo' remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>

    </div>
    </>

  );
}

export default LiveMarkdown;