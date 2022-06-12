import { useGlobalContext } from "../context";
import {FaCcPaypal} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'
import React from 'react'
const CheckOut = () => {
    const {checkout,total,quantity} = useGlobalContext()
  return (
    <section className="checkout">
        <header>
            <h2>My basket</h2>
        </header>
        <div className="list-item">
        {checkout && checkout.map(item=>{
            const{amount,img,price,brand,product,id} =item
            
        
            return(
                <div className="item" key={id}>
                    <img src={img} alt='sd'/>
                    <div>
                        <h4>{brand}</h4>
                        <p>{product}</p>
                        <h6>${price}</h6>
                    </div>
                     <h5>{amount}</h5>
                </div>
            )
        })}
       
        </div>   <hr/>
       <footer className="checkout-footer">
           
           <div className="checkout-total">
                <h4>qty:</h4>
                <h4>{quantity}</h4>
           </div>
          <div className="checkout-total">
               <h4>total :</h4>
               <h4>${ Number.parseFloat(total).toFixed(2)}</h4>
           </div>
           <div className="footer-btn-container">
               <button>pay with mastercard <FaCcMastercard className="footer-icon"/> </button>
               <button>pay with paypal <FaCcPaypal className="footer-icon paypal"/>  </button>
           </div>
           
           
       </footer>
    </section>
  )
}

export default CheckOut