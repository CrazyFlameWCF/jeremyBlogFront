import React from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';

const LiveMarkdown = (props) => {

  const [ articleSubmit, setArticleSubmit ] = useState({
    title: '',
    markdown: '',
    email: '',
  })
  const [ tags, setTags ] = useState([]);
  const [ typedTag, setTypedTag ] = useState({
    tag: '',
  })

  const { title, markdown, email } = articleSubmit;
  const { tag } = typedTag;
  
  const submitHandler = (e) => {
    e.preventDefault();

    let submitData = {
      title: title,
      markdown: markdown,
      email: email,
      tag: tags
    }

    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog/register`, data);
      console.log(request)
    }
    requestToApi(submitData)

  }
  
  const tagSubmitHandler = (e, state) => {
    e.preventDefault();
    // validate duplicate
    let tempTagArry = tags;
    let duplicateTag = tempTagArry.find(tag => tag.tag === state.tag)
    if (duplicateTag) {
      return
    } else {
      setTags((prev) => ([
        ...prev,
        state
      ]))
    }
  }
  

  const changeHandler = (e) => {
    setArticleSubmit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const tagChangeHangler = (e) => {
    setTypedTag((prev) => ({
      ...prev,
      tag: e.target.value
    }));
  }

  const deleteTag = (e, obj) => {
    let tempArry = tags;
    let foundTag = tempArry.find(tag => tag.tag === obj.tag)
    if(foundTag) {
      let filteredArry = tempArry.filter(tag => tag.tag !== obj.tag)
      setTags(filteredArry)
    }
  }


  return (
    <>
    <div className='flex flex-row w-full'>
      
        <div className='w-1/2 m-4'>
          <div className='flex flex-col flex-nowrap'>
            <label htmlFor='title'>
              Title :
            </label>
            <input type='title' name='title' className='border-2 px-2 py-1 border-gray-300 rounded-ms' value={title} onChange={changeHandler} />
            <label htmlFor='email'>
              E-mail :
            </label>
            <input type='email' name='email' className='border-2 px-2 py-1 border-gray-300 rounded-ms' value={email} onChange={changeHandler} />
            <div className='pt-2'>
              <label className='pr-2' htmlFor='tag'>
                Tags :
              </label>
              <input type='tag' name='tag' className='border-2 px-2 py-1 border-gray-300 rounded-ms' value={tag} onChange={tagChangeHangler} />
              <button type='submit' className='border px-2 py-1 font-bold bg-gray-300 hover:bg-gray-700' onClick={(e) => tagSubmitHandler (e, typedTag)}>add</button>
            </div>
          </div>
          <div className='flex'>
            {tags.length > 0 &&
              tags.map((tag) => {
                return <div key={tag._id} className='mr-2 flex'>{tag.tag}<button onClick={(e) => deleteTag(e, tag)}>X</button></div>
              })
            }
          </div>
          
          <div className='pt-4'>
            <p>Description : </p>
            <textarea className="w-full h-72 border-2 border-gray-300" name='markdown' value={markdown} onChange={changeHandler}>
            </textarea>
          </div>
          <div className='flex items-center justify-center'>
            <button type='submit' className='border px-6 py-1 font-bold bg-gray-300 hover:bg-red-800 hover:text-black rounded-md' onClick={(submitHandler)}>
            <a href="/">Submit</a>
            </button>
          </div>

        </div>
      

      <div className='w-1/2 h-72 border-1'>
        <p>Preview</p>
        <p>{title}</p>
        <p>{email}</p>
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