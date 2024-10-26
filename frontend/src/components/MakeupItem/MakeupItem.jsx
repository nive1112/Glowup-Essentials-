import React, { useContext } from 'react'
import './MakeupItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const MakeupItem = ({image,name,price,description,id}) => {
    //const[itemCount,setItemCount]=useState(0)
const{cartItems,addToCart,removeFromCart,url,currency}=useContext(StoreContext);

  return (
    <div className='makeup-item'>
        <div className="makeup-item-img-container">
      <img className='makeup-item-image'src={url+"/images/"+image} alt="" />
      {!cartItems[id]?<img  className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white} alt=""/>
        :<div className='makeup-item-counter'>
            <img id="icon1" onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p id="count">{cartItems[id]}</p>
            <img id="icon2" onClick={()=>addToCart(id)}src={assets.add_icon_green} alt=""/>
            </div>
      }
      </div>
      <div className="makeup-item-info">
        <div className="makeup-item-name-rating">
            <p id="pname">{name}</p>
            <img className='rating'src={assets.rating_stars} alt="" />
        </div>
        <p className="makeup-item-desc">{description}</p>
        <p className="makeup-item-price">{currency}{price}</p>
      </div>
    </div>

  )
}

export default MakeupItem
