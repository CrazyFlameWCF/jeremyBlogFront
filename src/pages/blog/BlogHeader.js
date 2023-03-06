import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BlogHeader = (props) => {

  const navigate = useNavigate();

  const [ typedSearch, setTypedSearch ] = useState('');

  const postHandler = (e) => {
    e.preventDefault();
    navigate('/blog/postblog');
  }

  const searchButtonHandler = (e) => {
    e.preventDefault();
    console.log('clicked', typedSearch);
    navigate(`/blog/search/${typedSearch}`)
  }

  const searchHandler = (e) => {
    setTypedSearch(e.target.value);
  }

  return (
    <nav className="flex w-full bg-black py-2">
      <div className="w-full flex justify-center gap-2">
        <input type='text' className='w-1/2 rounded-md text-sm text-black' value={typedSearch} onChange={searchHandler}/>
        <button className='bg-white px-4 py-1 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white font-bold' onClick={searchButtonHandler}>Search</button>
      </div>
      <div className='flex gap-4 font-bold px-4'>
        <button className='bg-white px-4 py-1 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white truncate' onClick={postHandler}>Post Article</button>
      </div>
    </nav>
  );
}
export default BlogHeader;