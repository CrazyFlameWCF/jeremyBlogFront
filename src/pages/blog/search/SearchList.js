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
      {foundPost.length > 0 &&foundPost.map((data) => {
        return <div 
          className="flex flex-col border-4 p-4 m-2 border-gray-400 rounded-md bg-gray-200 hover:bg-gray-500 gap-2" key={data._id} onClick={(e) => blogClickHandler(e, data._id)}>
          <a href="/BlogShowing"></a>
          <p className='text-xl font-bold text-blue-500'>{data.title}</p>
          <p className='text-black'>{dateFormatter(data.createdAt)}</p>
          <p className='text-black'>{data.email}</p>
        </div>
      }

      )}
    </div>
  );
}
export default SearchList;