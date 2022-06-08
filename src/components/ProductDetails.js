import React,{useEffect,useState} from 'react'
import{ useGlobalContext} from '../context'
import Rating from '@mui/material/Rating';
import {BsPlusLg} from 'react-icons/bs'
import {FaMinus} from 'react-icons/fa'
const ProductDetails = () => {
  
  useEffect(()=>{
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://sephora.p.rapidapi.com/products/detail',
      params: {productId: `${productId}`, preferedSku: `${sku}`},
      headers: {
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        'X-RapidAPI-Key':  process.env.REACT_APP_API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
        setCurrentSku(response.data.currentSku)
        setData(response.data)
        setBrand(response.data.brand)
        setImage(response.data.currentSku.skuImages.image450)
    }).catch(function (error) {
        console.error(error);
    });
  },[])
  const {details,setAmount,amount,setCheckout,checkout} = useGlobalContext()
  const {productId,sku} = details
  const [data,setData] = useState({})
  const [brand,setBrand] = useState({})
  const [currentSku,setCurrentSku] = useState({})
  const [image,setImage] = useState('https://media.istockphoto.com/vectors/loading-icon-vector-illustration-vector-id1335247217?k=20&m=1335247217&s=612x612&w=0&h=CQFY4NO0j2qc6kf4rTc0wTKYWL-9w5ldu-wF8D4oUBk=')
  const [ingredientDesc,setIngredientDesc] = useState(false)
  const [useDesc,setUseDesc] = useState(false)
  const [form, setForm] = useState({shipping:'',amount:'',isSelect:false})
  const handleChange = (e)=>{
    const {name,value} = e.target
    setForm(prev => {
      return {
        ...prev,
        [name]:value
      }
    })
   
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setAmount(prev=> prev += Number(form.amount))
    setCheckout(prev=>{
      return[
      ...prev,
      {amount:`${form.amount}`,img:`${currentSku.skuImages.image135}`,price:`${currentSku.listPrice.replace('$','')}`,brand:`${brand.displayName}`,product:`${data.displayName}`,id:`${currentSku.skuId}`}
    ]
  })
  
  }
  return (
    <div className='product-details'>
      <div className='header'>
           <div className='image-container'>
             <img src={image} alt='img'/>
           </div>
           <div className='short-details'>
             <h6>{brand.displayName}</h6>
             <h5>{data.displayName}</h5>
           <span className='as'>  <Rating name="read-only" value={data.rating} readOnly /> ({data.reviews})</span>
             <p>{currentSku.listPrice}</p>
             <p>Size: {currentSku.size}</p>
             <form className='delivery' onSubmit={handleSubmit}>
             <input 
                    type="radio"
                    id="standard"
                    name="shipping"
                    value="standard"
                    checked={form.shipping === "standard"}
                    onChange={handleChange}
                />
                <label htmlFor="standard"><span className='label'>Standard</span> (Enjoy free shipping with code <span className='red'>FREESHIP</span> .)</label>
                <br/>
             <input 
                    type="radio"
                    id="sameday"
                    name="shipping"
                    value="sameday"
                    checked={form.shipping === "sameday"}
                    onChange={handleChange}
                />
                <label htmlFor="sameday"> <span className='label'> Same-Day Delivery</span></label>
            <div className='add-to-basket'>
            <label className='label-amount' htmlFor="amount">Amount: </label>
               <select 
                id="amount"
                value={form.amount}
                onChange={handleChange}
                name="amount"
              
            >
               
                <option  value="nothing">---</option>
                <option  value="1">1</option>
                <option  value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
                 
            </div>
            <button className={`add-basket ${form.shipping&& form.amount?'add-show':'add-no-show'}`} disabled={ !form.shipping|| !form.amount}>Add to Basket</button>
             </form>
           </div>   
      </div>
      <div className='product-body '>
            <div className='details'>
               <div className='title-details' >
                 <h2>About the Product</h2>
               </div>
               
               {data.shortDescription}
             </div>
             <div className='details'>
               <div className='title-details' onClick={()=> setIngredientDesc(!ingredientDesc)}>
                 <h2>Ingredients</h2>
                 {ingredientDesc?<FaMinus/>:<BsPlusLg/>}
               </div>
               
               {ingredientDesc?`${currentSku.ingredientDesc}`:''}
             </div>
             <div className='details'>
               <div className='title-details' onClick={()=> setUseDesc(!useDesc)}>
                 <h2>How to Use</h2>
                 {useDesc?<FaMinus/>:<BsPlusLg/>}
               </div>
               
               {useDesc?`${data.suggestedUsage}`:''}
             </div>
            
      </div>
        
    </div>
  )
}

export default ProductDetails