import SearchNotFound from "./SearchNotFound";
import SearchList from "./SearchList";
import { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from "react-router-dom";

const SearchLanding = (props) => {

  const location = useLocation();
  const blogData = useOutletContext();
  let keyword = location.pathname.slice(13)

  const [ foundPost, setFoundPost ] = useState([]);

  useEffect(() => {
    let foundArry = [];
    let isMounted = true;
    let allData = blogData.allBlogs;
    let count = 0
    let isFinished = false
    
    if(isMounted && allData.length > 0) {
      allData.forEach(obj => {
        if(obj.title.toLowerCase().includes(keyword.toLowerCase())) {
          foundArry.push(obj)
          count += 1;
          if(count === allData.length) {
            isFinished = true;
          }
        } else {
          count += 1;
          if(count === allData.length) {
            isFinished = true;
          }
        }
      })
    }

    if(isFinished) {
      setFoundPost(foundArry)
    }


    return () => {
      isMounted = false;
    }
  },[keyword])

  return (
    <section>
      {foundPost.length > 0 ? <SearchList foundPost={foundPost} /> : <SearchNotFound />}
    </section>
  );
}
export default SearchLanding;