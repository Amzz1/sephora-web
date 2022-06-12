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
        const {categoryId} =useParams()
        const goDetailProduct = (productId,sku)=>{
          setDetails({productId,sku})
        }

  //fetch catagories list
  useEffect(()=>{
    
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
    
    
  },[categoryId])


  //fetch products items
  useEffect(()=>{
    
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
  
  },[categoryId])

  //pagination
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = products.slice(indexOfFirstItem,indexOfLastItem)
 
  const paginate = pageNumber =>setCurrentPage(pageNumber)
 
  const pageNumbers = []
  for(let i = 1; i<=Math.ceil(products.length/ itemsPerPage) ; i++){
    pageNumbers.push(i)
  }
  
    return (
      <div className='categories-products'>
          <div className='left'>
              {data.map((item,index)=>(
                  <a key={index} href='/'>{item}</a>
              ))}
          </div>
          <div className='right products-container'>
              {currentItems.map((item,index)=>(
                <Link to='/product-details'key={index}>
                 <div  className='single-product' onClick={goDetailProduct(item.productId,item.currentSku.skuId)} >
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
        { pageNumbers.map((number,index)=>(
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