import Main from "./components/Main";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import SubNavbar from "./layout/SubNavbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Error from "./components/Error";
import Layout from "./layout/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Category from "./components/Category";
import ProductDetails from "./components/ProductDetails";
import CheckOut from "./components/CheckOut";
function App() {
  return (

  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="category/:categoryId" element={<Category/>}/>
         <Route path='product-details' element={<ProductDetails/>}/>
         <Route path='checkout' element={<CheckOut/>}/>
         <Route path="item/:search" element={<Product/>}/>
         <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    
   </BrowserRouter>
  );
}


export default App;
