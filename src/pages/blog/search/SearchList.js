import { useNavigate } from "react-router-dom";
import moment from 'moment';

const dateFormatter = (string) => {
  let formattedDate = moment(string).format('LLL')
  return formattedDate
}

const SearchList = ({foundPost}) => {

  const navigate = useNavigate();

  const blogClickHandler = (e, id) => {
    e.preventDefault();
    let foundBlog = foundPost.find(blog => blog._id === id)
    navigate(`/blog/${foundBlog._id}`, {state: foundBlog})
  }
  
  return (
    <div>
      {foundPost.length > 0 && foundPost.map((post) => {
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
      }
      )}
    </div>
  );
}
export default SearchList;