import ArticleFrom from "./ArticleForm";
import Preview from "./Preview";
import axios from 'axios';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogLanding = ({callBlog, setCallBlog}) => {
  
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

  const navigate = useNavigate();

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
      if(request.data.success) {
        navigate('/blog/list')
        setCallBlog(!callBlog)
        window.location.reload();
      }
    }
    requestToApi(submitData)
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

  return (
    <section className="flex flex-col w-full">
      <p className='text-2xl font-bold'>Ask Me Anything!</p>
      {/* LEFT SIDE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArticleFrom 
          articleSubmit={articleSubmit} 
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          tagChangeHangler={tagChangeHangler}
          deleteTag={deleteTag}
          tagSubmitHandler={tagSubmitHandler}
          tags={tags}
          typedTag={typedTag}
        />
        {/* RIGHT SIDE */}
        <Preview
          articleSubmit={articleSubmit}
        />
      </div>
    </section>
  );
}
export default BlogLanding;