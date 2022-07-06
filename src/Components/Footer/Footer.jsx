import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
 const Footer = () => {
     return (
         <div className="footer py-5 mt-5 ">
             <div className="footer-content row mx-0 gap-4">
                 <div className="col-5 col-lg-2 mx-auto">
                     <h2>Get to Know Us</h2>
                     <ul>
                         <li>
                             <NavLink to='/Home'>About Pirates</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Careers</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Pirates Science</NavLink>
                         </li>
                     </ul>
                </div>
                 <div className="col-5 col-lg-2 mx-auto">
                     <h2>Shop With Us</h2>
                     <ul>
                         <li>
                             <NavLink to='/Home'>Your Account</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Your Orders</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Your Addresses</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Your Lists</NavLink>
                         </li>
                     </ul>
                </div>
                 <div className="col-5 col-lg-2 mx-auto">
                     <h2>Make Money With Us</h2>
                     <ul>
                         <li>
                             <NavLink to='/Home'>Sell on Pirates</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Fulfillment by Pirates</NavLink>
                         </li>
                     </ul>
                </div>
                 <div className="col-5 col-lg-2 mx-auto">
                     <h2>Let Us Help you</h2>
                     <ul>
                         <li>
                             <NavLink to='/Home'>Help</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Shipping & Delivery</NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Returns & Replacements </NavLink>
                         </li>
                         <li>
                             <NavLink to='/Home'>Pirates App Download </NavLink>
                         </li>
                     </ul>
                </div>
             </div>
      </div>
  )
}

export default Footer