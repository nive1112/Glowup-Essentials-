import React, { useContext } from 'react'
import './MakeupDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import MakeupItem from '../MakeupItem/MakeupItem'

const MakeupDisplay = ({category}) => {
    const {makeup_list}= useContext(StoreContext)
   
  return (
    <div className='makeup-display' id='makeup-display'>
      <h2>All Products are Here</h2>
      
      <div className="makeup-display-list">
        
       {makeup_list.map((item)=>{
       if(category==="All" || category===item.category){
        return <MakeupItem  key={item._id}  name={item.name}  price={item.price} description={item.description} image={item.image} id={item._id}/>
 } })}
    </div>
    </div>
  )
}

export default MakeupDisplay
 