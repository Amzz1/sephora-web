import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context'
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';

const Product = () => {
  const {setDetails} = useGlobalContext()
  const [products,setProducts] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  let {search} =useParams()
 
  useEffect(()=>{
    let fetch = true
    console.log('bbbbb')
    if(fetch){
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://sephora.p.rapidapi.com/products/search',
      params: {q: `${search}` },
      headers: {
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
      setProducts(response.data.products);
    }).catch(function (error) {
      console.error(error);
    });}
   return ()=>fetch=false
  },[search])

 
//pagination
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
  
}
  
  return (  
    <>
     <div className='products-container'>
     
     {currentItems.map(item=>{
      return (
      
      <section key={item.productId} className='single-product' onClick={()=>goDetailProduct(item.productId,item.currentSku.skuId)}>
       <Link to='/product-details'> <img src={item.heroImage} alt='smt'/>
        <h5>{item.brandName}</h5>
        <p>{item.displayName}</p>
       
        <Rating name="read-only" value={item.rating} readOnly />
        <p>Review ({item.reviews})</p></Link>
        </section>
      )
    })}
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
  </>
  )
}

export default Product