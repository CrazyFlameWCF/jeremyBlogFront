import { useNavigate, useOutletContext } from "react-router-dom";
import moment from 'moment';

const dateFormatter = (string) => {
  let formattedDate = moment(string).format('LLL')
  return formattedDate
}

const BlogAllList = (props) => {
  const navigate = useNavigate();
  const blogData = useOutletContext();
  
  const blogClickHandler = (e, id) => {
    e.preventDefault();
    let foundBlog = blogData.allBlogs.find(blog => blog._id === id)
    console.log(foundBlog)
    navigate(`/blog/${foundBlog._id}`, {state: foundBlog})
  }

  return (
    <div className='bg-black'>
      {blogData.allBlogs.length > 0 && blogData.allBlogs.map((data) => {
        return <div 
          className="flex flex-col border-4 p-4 m-2 border-gray-400 rounded-md bg-gray-700 hover:bg-gray-500 gap-2" key={data._id} onClick={(e) => blogClickHandler(e, data._id)}>
          <a href="/BlogShowing"></a>
          <p className='text-xl font-bold text-blue-500'>{data.title}</p>
          <p>{dateFormatter(data.createdAt)}</p>
          <p>{data.email}</p>
        </div>
      }

      )}
    </div>
  );
}
export default BlogAllList;
