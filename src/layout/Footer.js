import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {BsFillChatFill} from 'react-icons/bs'
import {BsFillCreditCard2FrontFill} from 'react-icons/bs'
import {BsFillChatRightTextFill} from 'react-icons/bs'
import {AiTwotonePhone} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {GrYoutube} from 'react-icons/gr'
import {FaPinterestP} from 'react-icons/fa'
import {RiSnapchatLine} from 'react-icons/ri'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='feedback'>
            <h5>Website feedback?</h5>
        </div>
        <div className='footer'>
            <div className='contact'>
                <div className='contact-item'>
                    <div> <MdLocationOn className=''/></div>
                   
                    <div className='footer-title'>
                        <span>Find a Store</span>
                        <br/>
                        Chose Your Store
                    </div>
                </div>
                <div className='contact-item'>
                    <div> <BsFillChatFill/></div>
                   
                    <div className='footer-title'>
                        <span>Live Beauty Help</span>
                        <br/>
                         Chat is available
                    </div>
                </div>
                <div className='contact-item'>
                    <div> <AiTwotonePhone/></div>
                    
                    <div className='footer-title'>
                        <span>1-877-737-4672</span>
                        <br/>
                        TTY: 1-888-866-9845
                    </div>
                </div>
                <div className='contact-item'>
                    <div><BsFillChatRightTextFill/></div>
                   
                   <div className='footer-title'>
                        <span><a>Get the App</a></span>
                        <br/>
                        <a>Text 'APP' to 36681</a>
                    </div>
                </div>
             
            </div>
            <div className='underline'></div>
            <div className='information'>
                <div className='list'>
                    <h4>About Sephora</h4>
                    <a href='/'>about sephora</a>
                    <a href='/'>newsroom</a>
                    <a href='/'>careers</a>
                    <a href='/'>sephpra social impact</a>
                    <a href='/'>supply chain transparency</a>
                    <a href='/'>Affiliates</a>
                    <a href='/'> Sephora Evrn</a>
                    <a href='/'>Giftcard</a>
                    <a href='/'>Sephora global sites</a>
                </div>
                <div className='list'>
                    <h4>My Sephora</h4>
                    <a href='/'>Beauty Insider</a>
                    <a href='/'>Sephora credit card</a>
                    <a href='/'>Community Profile</a>
                    <a href='/'>Order Status</a>
                    <a href='/'>Purchase History</a>
                    <a href='/'>Account Settings</a>
                    <a href='/'>Beauty Advisor Recommendations</a>
                    <a href='/'>Beauty Offers</a>
                    <a href='/'>Quizzes & Buying Guides</a>
                </div>
                <div className='list'>
                <h4>Help</h4>
                    <a href='/'>Customer Service</a>
                    <a href='/'>Returns & Exchanges</a>
                    <a href='/'>Delivery and Pickup Options</a>
                    <a href='/'>Shipping</a>
                    <a href='/'>Billing</a>
                    <a href='/'>International Shipments</a>
                    <a href='/'>Beauty Services FAQ</a>
                    <a href='/'>Sephora at Kohl's</a>
                    <a href='/'>Sephora Inside JCPenney</a>
                    <a href='/'>Accessibility</a>
                    <a href='/'>Klarna</a>
                </div>
                <div className='list'>
                    <h4>Region & Language</h4>
                    <div className='language'>
                        <img src='https://www.sephora.com/img/ufe/flags/us.svg' alt='flag'/>
                        <h5>United States - English</h5>
                    </div>
                    <div className='language'>
                        <img src='https://www.sephora.com/img/ufe/flags/ca.svg' alt='flag'/>
                        <h5>Canada - English</h5>
                    </div>
                    <div className='language'>
                        <img src='https://www.sephora.com/img/ufe/flags/ca.svg' alt='flag'/>
                        <h5>Canada - Français</h5>
                    </div>
                </div>
                <div className='list'>
                    <p>we belong to
                    <br/>
                     something beautiful</p>
                    <form>
                        <label>Sign up for Sephora Email</label>
                        <br/>
                        <input
                         type='email'
                         placeholder='Enter your email'
                        />
                        <button
                         type='submit'
                        >
                            Submit
                        </button>
                    </form>
                     
                </div>
                
            </div>
            <div className='underline'></div>
            <div className='end'>
                <div className='social-icons'>
                <a href='/'><FiInstagram /></a> 
                <a href='/'> <FaFacebookSquare/></a>   
                <a href='/'> <BsTwitter/></a>   
                <a href='/'><GrYoutube/></a>   
                <a href='/'><FaPinterestP/></a>   
                <a href='/'> <RiSnapchatLine/></a>   
                </div>
                <div className='policy'>
                    <p>© 2022 Sephora USA, Inc. All rights reserved.</p>
                    <div className='policy'>
                        <a href='/'>Privacy Policy</a>
                        <a href='/'>Terms of Use</a>
                        <a href='/'> Accessibility</a>
                        <a href='/'>Sitemap</a>
                        <a href='/'>CA- Do Not Sell My Personal Information</a>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer