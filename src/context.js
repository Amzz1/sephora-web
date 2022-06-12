import { useContext,useState,useEffect } from "react";
import { createContext } from "react";
const AppContext = createContext()

const AppProvider = ({children}) =>{
  const [categoryId,setCategoryId]=useState('')
  const [searchTerm,setSearchTerm] = useState(JSON.parse(sessionStorage.getItem('search'))||'')
  const [details,setDetails] = useState({})
  const [amount,setAmount] = useState(JSON.parse(localStorage.getItem("amount"))||0)
  const [checkout,setCheckout] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const total = checkout.map(item=>Number(item.price)*Number(item.amount)).reduce((a,b)=>a+b,0)
  const quantity =checkout.map(item=>Number(item.amount)).reduce((a,b)=>a+b,0)
useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(checkout))
 
},[checkout])
useEffect(()=>{
  sessionStorage.setItem('search',JSON.stringify(searchTerm))
},[searchTerm])
useEffect(()=>{
 localStorage.setItem('amount',JSON.stringify(amount))
},[amount])

return (
  <AppContext.Provider
     value={{
       setSearchTerm,
       searchTerm,
       setCategoryId,
       categoryId,
       setDetails,
       details
       ,amount,
       setAmount,
       checkout,
       setCheckout,
       total,
       quantity,

     }}
  >
    {children}
  </AppContext.Provider>
)
 }
 const useGlobalContext = () =>{
  return useContext(AppContext)
}
export {useGlobalContext, AppContext,AppProvider} 