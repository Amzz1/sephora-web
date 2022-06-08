import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
    const Category = () => {
        const [data,setData]= useState([])
        const [products,setProducts] =useState([])
        const {setDetails} = useGlobalContext()
        let {categoryId} =useParams()
  useEffect(()=>{
    let fetch= true
    if(fetch){
    const axios = require("axios");

const options = {
method: 'GET',
url: 'https://sephora.p.rapidapi.com/categories/list',
params: {categoryId: `${categoryId}`},
headers: {
  'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
}
};

axios.request(options).then(function (response) {
  setData(response.data.childCategories.map(item => item.displayName))
}).catch(function (error) {
  console.error(error);
});
    }
    return ()=>{fetch = false}
  },[categoryId])
  useEffect(()=>{
    let fetch = true 
    console.log('aaaaa')
    if(fetch){
    const axios = require("axios");
    const options = {
      method: 'GET',
      url: 'https://sephora.p.rapidapi.com/products/list',
      params: {categoryId: `${categoryId}`},
      headers: {
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
 
        setProducts(response.data.products)
    }).catch(function (error) {
        console.error(error);
    });
  }
  return ()=>{fetch = false}
  },[categoryId])
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem,indexOfLastItem)
 
  const paginate =pageNumber =>setCurrentPage(pageNumber)
 
  const pageNumbers = []
  for(let i = 1; i<=Math.ceil(products.length/ itemsPerPage) ; i++){
    pageNumbers.push(i)
  }
  const goDetailProduct = (productId,sku)=>{
    setDetails({productId,sku})
    //console.log({productId,sku})
  }
    return (
      <div className='categories-products'>
          <div className='left'>
              {data.map(item=>(
                  <a href='/'>{item}</a>
              ))}
          </div>
          <div className='right products-container'>
              {currentItems.map(item=>(
                <Link to='/product-details'>
                 <div key={item.productId} className='single-product' onClick={goDetailProduct(item.productId,item.currentSku.skuId)} >
                  <img src={item.heroImage} alt='smt'/>
                  <h5>{item.brandName}</h5>
                  <p>{item.displayName}</p>
                  <Rating name="read-only" value={item.rating} readOnly />
                  <p>Review ({item.reviews})</p>
                </div>  </Link>
              ))}
          </div>
          <nav className='container-pagination'>
      <ul className='pagination'>
        { pageNumbers.map(number=>(
          <li key={number} className='page-item'>
            <a className='page-link' onClick={()=>paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
      </div>
    )
  }
  
  export default Category