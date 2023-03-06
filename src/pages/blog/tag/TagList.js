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

  const clickHandler = (e, id) => {
    let foundBlog = blogData.allBlogs.find(blog => blog._id === id)
    navigate(`/blog/${foundBlog._id}`, {state: foundBlog})
  }

  return (
    <>
      {resultBlog.length > 0 && 
        resultBlog.map(arry => {
          return <div className="flex flex-col border-4 p-4 m-2 border-gray-400 rounded-md bg-gray-700 hover:bg-gray-500 gap-2" key={arry._id}
            onClick={(e) => clickHandler(e, arry._id)}
          >
          <p className='text-xl font-bold text-blue-500'>{arry.title}</p>
          <p>{dateFormatter(arry.createdAt)}</p>
          <p>{arry.email}</p>
          </div>
        })
      }
    </>
  );
}
export default TagLanding;