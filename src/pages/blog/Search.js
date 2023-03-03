import React, { useState } from 'react';
import { GoSearch } from "react-icons/go"

const SearchBar = ({allBlogs, setSearchedPost, callUseEffect, setCallUseEffect}) => {

  const [ searchInput, setSearchInput ] = useState('');
  
  const changeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
    let matchedArry = [];
    let searchedNum = 0;
    if (!!allBlogs) {
      allBlogs.forEach((post) => {
        if(post.title.toLowerCase().includes(searchInput.toLowerCase())) {
          matchedArry.push(post)
          searchedNum += 1;
          if(searchedNum === allBlogs.length) {
            setSearchedPost(matchedArry)
            setCallUseEffect(!callUseEffect)
          }
        } else {
          searchedNum += 1;
          if(searchedNum === allBlogs.length) {
            setSearchedPost(matchedArry)
            setCallUseEffect(!callUseEffect)
          }
        }
      })
    }
  }

  return (
    <>
    <div className='flex flex-row w-1/8 h-14 justify-end items-end border-2 border-gray-500 rounded-md'>
      <div>
        <input className='p-2 border-none' type='text' placeholder="Search.." value={searchInput} onChange={changeHandler} />
      </div>
      <div>
        {/* <GoSearch onClick={buttonHandler}></GoSearch> */}
      </div>
    </div>
    </>
  );
}
export default SearchBar;