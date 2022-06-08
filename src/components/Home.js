import React from 'react'
import homeImg from '../images/home1.webp'
import Home2 from '../images/home2.webp'
import Home3 from '../images/home3.webp'
import Home4 from '../images/home4.webp'
import Home5 from '../images/home5.webp'
import Home6 from '../images/home6.webp'
import Item1 from '../images/1.webp'
import Item2 from '../images/2.webp'
import Item3 from '../images/3.webp'
import Item4 from '../images/4.webp'
import Item5 from '../images/5.webp'
import Item6 from '../images/6.webp'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const Home = () => {
  const {setCategoryId} =useGlobalContext()
  
  return (
    <>
    <div className='img-container'>
             <img className='home-img' src={homeImg} alt='home'/>
             <div className='img-links'>
              <Link to='/category/cat140006' onClick={()=>setCategoryId('cat140006')}  className='link '></Link>
              <Link to='/category/cat150006' onClick={()=>setCategoryId('cat150006')}  className='link '></Link>
              <Link to='/category/cat160006' onClick={()=>setCategoryId('cat160006')}  className='link '></Link>
            
       
             </div>
    </div>
    <div className='just-drop'>
      <span><h2>Just Drop</h2>          <Link to='/category/cat150006' onClick={()=>setCategoryId('cat150006')} className='show-more'>show more</Link></span>
      
      <div className='demo'>
       <Link to='/category/cat150006' onClick={()=>setCategoryId('cat150006')}  className='link '> <IoIosArrowBack className='icon'/></Link>
       <div className='single-item'>
         <img src={Item2} alt='sth'/>
         <h5>Kérastase</h5>
         <p>Curl Manifesto Shampoo & Conditioner Duo for Curly Hair</p>
       </div>
       <div className='single-item'>
         <img src={Item1} alt='sth'/>
         <h5>Fenty Beauty by Rihanna</h5>
         <p>Mini Match Stix Matte Contour Skinstick</p>
       </div>
       <div className='single-item'>
         <img src={Item3} alt='sth'/>
         <h5>Dior</h5>
         <p>Sauvage Eau de Toilette Set</p>
       </div>
       <div className='single-item'>
         <img src={Item4} alt='sth'/>
         <h5>Dr. Dennis Gross Skincare</h5>
         <p>Alpha Beta Daily Essentials - Extra...</p>
       </div>
       <div className='single-item single-item-4'>
         <img src={Item5} alt='sth'/>
         <h5>Laura Mercier</h5>
         <p>Mini Translucent Pure Setting Spray 16HR</p>
       </div>
       <div className='single-item single-item-5'>
         <img src={Item6} alt='sth'/>
         <h5>Urban Decay</h5>
         <p>All Nighter Long-Lasting Makeup Setting Spray with Vitamin C</p>
       </div>
       <Link to='/category/cat150006' onClick={()=>setCategoryId('cat150006')}  className='link '> <IoIosArrowForward className='icon'/></Link>
     </div>
     
    </div>
    <div className='more-beauty'>
   
    <Link to='/category/cat140006'  onClick={()=>setCategoryId('cat140006')} ><img src={Home2} alt=''/></Link> 
    <Link to='/category/cat140014' onClick={()=>setCategoryId('cat140014')} ><img src={Home3} alt=''/></Link> 
    <Link to='/category/cat130044' onClick={()=>setCategoryId('cat130044')} ><img src={Home4} alt=''/></Link> 
    <Link to='/category/cat1830032' className='more-beauty-sm'  onClick={()=>setCategoryId('cat1830032')} ><img src={Home5} alt=''/></Link> 
      
    
    </div>
    <div className='home6' >
          
          <Link to='/category/cat140006'><img src={Home6} alt=''/></Link>
    </div>
    </>
  )
}

export default Home