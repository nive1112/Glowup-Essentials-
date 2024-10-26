import React from 'react'
import './ExploreProducts.css'
import { product_List } from '../../assets/assets'
//import {category,setCategory} from '../../Home/Home'
const ExploreProducts = ({category,setCategory}) => {
  return (
    <div className='explore-product' id='explore-product'>
        <h1>Explore our Essential Products</h1>
        <p className='explore-product-text' id='explore-product-text'>Choose from a diverse lists featuring an array of cosmetics.Flaunt your Flawless Adorn with Makeup</p>
      <div className="explore-product-list">
        {product_List.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className='explore-product-items'>
                    <img  className={category===item.product_name?"active":"" } id='image'src={item.product_image} alt=""/>
                   <p id='para'>{item.product_name}</p>
                    </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreProducts
