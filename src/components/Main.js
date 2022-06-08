import Home from './Home'
import Product from './Product'
import Category from './Category'
import { useGlobalContext } from '../context'

const Main = () => {
  const {searchTerm,categoryId} = useGlobalContext()
  return (
    <div className='main'>
 
    {!searchTerm?<Home/>:categoryId?<Category/>:<Product/>  }
   
    </div>
  )
}

export default Main