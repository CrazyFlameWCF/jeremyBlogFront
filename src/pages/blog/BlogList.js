import LiveMarkdown from "../post/LiveMarkdown";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react' 
import { useNavigate } from "react-router-dom";
import SearchBar from "./Search";
import SearchedResults from "./SearchedResults";
import SearchTag from "./SearchTag";

const BlogList = ({allBlogs, foundTag}) => {

  const [ searchedPost, setSearchedPost ] = useState([]);
  const [ callUseEffect, setCallUseEffect ] = useState(true);
  const [ tagList, setTagList ] = useState(false);
 

  useEffect(() => {
    return () => {
      setCallUseEffect(!callUseEffect)
    }
  },[callUseEffect])




  return (
    <>
    </>
  );
}
export default BlogList;
