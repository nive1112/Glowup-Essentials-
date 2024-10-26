import React, {  useState } from 'react'
import './Add.css'
import { assets,url } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';
const Add = () => {
    

    const[image,setImage]= useState(false) ;
    const[data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Compact Powder"
    });
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))

    }
   
    const onSubmitHandler=async (event)=>{
        event.preventDefault();
        if (!image) {
            toast.error('Image not selected');
            return null;
        }
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/product/add`,formData); 
if(response.data.success){
    toast.success(response.data.message)
setData({
    name:"",
        description:"",
        price:"",
        category:data.category
})
setImage(false);
}else{
    toast.error(response.data.message)
}
    }

return (
    <div className='add'>
      <form className='flex-col'onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
<p>Upload Image</p>
<input onChange={(e) => { setImage(e.target.files[0]) ; e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
<label htmlFor="image">
    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>
</label>

        </div>
        <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input name='name'onChange={onChangeHandler} value={data.name} type='text' placeholder='Type Here' />
        </div>
    <div className="add-product-description flex-col">
        <p>Product Description</p>
        <textarea onChange={onChangeHandler} value={data.description}name="description" rows={6} placeholder='write content here'></textarea>
    </div>
    <div className="add-category-price">
        <div className="add-category flex-col">
            <p>Product Category </p>
            <select onChange={onChangeHandler} name="category">
                <option value="Compact Powder">Compact Powder</option>
                <option value="Eyeliner">Eyeliner</option>
                <option value="Eyeshadow">Eyeshadow</option>
                <option value="Foundation">Foundation</option>
                <option value="Setting Spray">Setting Spray</option>
                <option value="Highlighter">Highlighter</option>
                <option value="Kajal">Kajal</option>
                <option value="Lipliner">Lipliner</option>
                <option value="Lipstick">Lipstick</option>
                <option value="Mascara">Mascara</option>
                <option value="Nailpolish">Nailpolish</option>
                <option value="Primer">Primer</option>
            </select>
        </div>
      <div className="add-price flex-col">
        <p>
            Product Price
        </p>
        <input onChange={onChangeHandler} value={data.price}type='number' name='price' placeholder='Rs.25'/>
        </div>  
    </div>
    <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
