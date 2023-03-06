import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchTag = (props) => {

  const location = useLocation();
  
  const [ resultBlog, setResultBlog ] = useState([]);

  console.log(location.state)

  return (
    <>
      {resultBlog.length > 0 && 
        resultBlog.map(arry => {
          return <div key={arry._id}>
            <p>{arry.title}</p>
          </div>
        })
      }
    </>
  );
}
export default SearchTag;
