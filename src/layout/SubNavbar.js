import React ,{useEffect,useState}from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context';

const SubNavbar = () => {
  const [data,setData] = useState([])
   const {setCategoryId,categoryId} = useGlobalContext()

  const axios = require("axios");

 const options = {
  method: 'GET',
  url: 'https://sephora.p.rapidapi.com/categories/v2/list-root',
  headers: {
    'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
    'X-RapidAPI-Key':  process.env.REACT_APP_API_KEY
  }
};
  const fetchThing=()=>{
  axios.request(options).then(function (response) {
    const {rootCategories} = response.data
    setData(rootCategories); 
  }).catch(function (error) {
    console.error(error);
  });
}

      useEffect(()=>{
        fetchThing()
      },[])
   
  return (
    <>
    <nav className='sub-nav'>
       {data.map((item,index)=>{
 
         return (
          //  <>
          //  <Link key={item.categoryId} to={`/category/${item.categoryId}`}>
          //    <a className='nav-links' onClick={()=>setCategoryId(item.categoryId)} key={index} >{item.displayName}</a>
          //  </Link>
           <Link className='nav-links' onClick={()=>setCategoryId(item.categoryId)} key={item.categoryId} to={`/category/${item.categoryId}`}>
             {item.displayName}
           </Link>
          
      
          //  </>
         )
       })}
    </nav>
    <nav className='sub-nav-sm'>
    {data.map((item,index)=>{
 
         return (
  
  //  <Link key={item.categoryId} to={`/category/${item.categoryId}`}>
  //    <button className='btn-sub-nav' onClick={()=>setCategoryId(item.categoryId)} key={index}>{item.displayName}</button>
  //  </Link>
   <Link className='btn-sub-nav' onClick={()=>setCategoryId(item.categoryId)} key={item.categoryId} to={`/category/${item.categoryId}`}>
     {item.displayName}
   </Link>
  
  
 )
})}
  
</nav>
</>

  )
}

export default SubNavbar