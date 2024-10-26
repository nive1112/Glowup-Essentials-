import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from'../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';




const Navbar = ({setShowLogin}) => {
const [product,setProduct]=useState("home");
const{getTotalCartAmount,token,setToken}=useContext(StoreContext);
const navigate=useNavigate();

const logout =()=>{
localStorage.removeItem("token");
setToken("");
navigate("/")
}
  return (
    <div className="navbar">
        <Link to='/'><img src= {assets.GLOWUPlogo} width="400" height="400"  alt="" className="logo"/></Link>
        <ul className="navbar-menu">
            <Link to='/'onClick={()=>setProduct("home")}className={product==="home"?"active":""}>Home</Link>
            <a href='#explore-product' onClick={()=>setProduct("products")}className={product==="products"?"active":""}>Products</a>
            <a href='#footer'onClick={()=>setProduct("contactus")}className={product==="contactus"?"active":""}>Contact Us</a>
            </ul>                     
<div className="nav-right">
    <img src={assets.search} height="30px" width="30px" className="srh" alt=""/>
    <div className="navbar-search"> 
        <Link to='/cart'><img src={assets.cart} height="40px" width="40px" left="100px" alt=""/></Link>
        
          <div className={getTotalCartAmount()?"dot":""}></div>
       
    </div>
    {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
    :<div className='navbar-profile'>
      <img src={assets.profile_icon} alt="" />
      <ul className="nav-profile-dropdown">
        <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
        <hr/>
        <li onClick={logout}><img src={assets.logout_icon} alt=""/><p>Logout</p></li>
      </ul></div>
      }

</div>   
    </div>
  )
}

export default Navbar
