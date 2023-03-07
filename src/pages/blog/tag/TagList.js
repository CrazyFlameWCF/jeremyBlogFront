import { useLocation, useOutletContext, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';

const dateFormatter = (string) => {
  let formattedDate = moment(string).format('LLL')
  return formattedDate
}

const TagLanding = (props) => {

  const location = useLocation();
  const blogData = useOutletContext();
  const navigate = useNavigate();

  const foundTag = location.pathname.slice(10)

  const [ resultBlog, setResultBlog ] = useState([]);

  useEffect(() => {

    let filteredArry = []
    let findingText = foundTag;
    let findingNum = 0;
    let isFinished = false;
    let blog = blogData.allBlogs;

    
    blog.forEach(obj => {
      if (obj.tag.length > 0) {
        let foundObj = obj.tag.find(eachTag => eachTag._id === findingText)

        if(foundObj) {
          filteredArry.push(obj)
          findingNum += 1;
          if (findingNum === blog.length) {
            isFinished = true;
          }
        } else {
          findingNum += 1;
          if (findingNum === blog.length) {
            isFinished = true;
          }
        }
      } else {
        findingNum += 1;
        if(findingNum === blog.length) {
          isFinished = true;
        }
      }
    })

    if(isFinished) {
      setResultBlog(filteredArry)
    }

  },[foundTag])

  const blogClickHandler = (e, id) => {
    let foundBlog = blogData.allBlogs.find(blog => blog._id === id)
    navigate(`/blog/${foundBlog._id}`, {state: foundBlog})
  }

  return (
    <>
      {resultBlog.length > 0 && 
        resultBlog.map(post => {
          return <div 
          className="border-2 rounded-md px-2 py-2 hover:border-yellow-600/40 hover:border-2 hover:bg-white/30 mb-2" key={post._id} onClick={(e) => blogClickHandler(e, post._id)}>
          <p className='text-xl font-bold text-white truncate'>{post.title}</p>
          <div className="text-xs flex flex-row gap-2 text-white border-b border-white mb-2 pb-1">
            <p className="truncate">{dateFormatter(post.createdAt)}</p>
            <p className="truncate">{post.email}</p>
          </div>
          <div className="flex gap-2">
          {post.tag.length > 0 &&
            post.tag.map(obj => {
              return <p className="px-4 py-1 rounded-full bg-yellow-600/40 text-white text-xs">{obj.tag}</p>
            })
          }
          </div>
        </div>
        })
      }
    </>
  );
}
export default TagLanding;