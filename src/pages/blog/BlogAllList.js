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
    navigate(`/blog/${foundBlog._id}`, {state: foundBlog})
  }

  return (
    <div>
      {blogData.allBlogs.length > 0 && blogData.allBlogs.map((data) => {
        return <div 
          className="border-2 rounded-md px-2 py-2 hover:border-yellow-600/40 hover:border-2 hover:bg-white/30 mb-2" key={data._id} onClick={(e) => blogClickHandler(e, data._id)}>
          <p className='text-xl font-bold text-white truncate'>{data.title}</p>
          <div className="text-xs flex flex-row gap-2 text-white border-b border-white mb-2 pb-1">
            <p className="truncate">{dateFormatter(data.createdAt)}</p>
            <p className="truncate">{data.email}</p>
          </div>
          <div className="flex gap-2">
          {data.tag.length > 0 &&
            data.tag.map(obj => {
              return <p className="px-4 py-1 rounded-full bg-yellow-600/40 text-white text-xs">{obj.tag}</p>
            })
          }
          </div>
        </div>
      }

      )}
    </div>
  );
}
export default BlogAllList;
