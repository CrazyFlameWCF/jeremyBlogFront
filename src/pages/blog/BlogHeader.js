import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdSearch, MdPostAdd } from "react-icons/md";

const BlogHeader = (props) => {

  const navigate = useNavigate();

  const [ typedSearch, setTypedSearch ] = useState('');

  const postHandler = (e) => {
    e.preventDefault();
    navigate('/blog/postblog');
  }

  const searchButtonHandler = (e) => {
    e.preventDefault();
    navigate(`/blog/search/${typedSearch}`)
  }

  <button type='submit' className='bg-yellow-600/40 text-white px-4 py-2 hover:bg-white hover:text-yellow-600/80 rounded-md w-full'>Submit</button>

  const searchHandler = (e) => {
    setTypedSearch(e.target.value);
  }

  return (
    <nav className="flex w-full py-2 mb-4">
      <form onSubmit={searchButtonHandler} className="w-full flex justify-center gap-2">
        <input type='text' className='w-full rounded-md text-sm text-black px-4 truncate' value={typedSearch} onChange={searchHandler} placeholder='Search something'/>
        <button className='bg-yellow-600/40 text-white px-4 py-2 hover:bg-white hover:text-yellow-600/80 rounded-md' type='submit'><MdSearch className='w-5 h-5'/></button>
        <button className='bg-yellow-600/40 text-white px-4 py-2 hover:bg-white hover:text-yellow-600/80 rounded-md' onClick={postHandler}><MdPostAdd className='w-5 h-5'/></button>
      </form>
    </nav>
  );
}
export default BlogHeader;