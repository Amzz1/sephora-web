import React from 'react'
import logo from '../images/logo.svg'
import {GoSearch} from 'react-icons/go'
import {BsChat} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'
import { useGlobalContext} from '../context'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const {setSearchTerm,amount} = useGlobalContext()
  const getValue = useRef('')


let navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault()
       setSearchTerm( getValue.current.value)

    navigate(`/item/${getValue.current.value}`) 
  }
  return (
    <nav className='nav'>
        <Link to='/'> <img src={logo} alt='logo' /></Link> 
        <div className='search'>
          <div className='search-icon'>
             <GoSearch />
          </div>
          
          <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            ref={getValue}
           />
          
          </form>
        </div>
  
        <div className='stores'>
        <div className='store'>
          <img src='https://www.sephora.com/img/ufe/icons/stores.svg' alt='logo'/>
          <div className='choose-store'>
            <span className='title-nav'>store and service</span>
            <br/>
            choose your store
          </div>
        </div>
        <div className='store'>
          <img src='https://www.sephora.com/img/ufe/icons/community.svg' alt='logo'/>
          <div className='choose-store'>
            <span className='title-nav'>store and service</span>
            <br/>
            choose your store
          </div>
        </div>
        <div className='store'>
          <img src='https://www.sephora.com/img/ufe/icons/me32.svg' alt='logo'/>
          <div className='choose-store'>
            <span className='title-nav'>store and service</span>
            <br/>
            choose your store
          </div>
        </div>
        </div>

        <div className='nav-icons'>
          <div><BsChat className='nav-icon icon1'/></div>
          <div><AiOutlineHeart className='nav-icon'/></div>
          
          <Link to='/checkout'>
              <div className='basket'><BsHandbag  className='nav-icon'/> <span className='amount'>{amount}</span></div>
          </Link>
          
        </div>
    </nav>
  )
}

export default Navbar