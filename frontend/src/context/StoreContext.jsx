import { createContext, useEffect, useState } from "react";
import {product_List } from "../assets/assets";
import axios from "axios";

export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
const [cartItems,setCartItems]=useState({});
const url="http://localhost:4000";
const [token,setToken]= useState("");
const[makeup_list,setMakeupList]=useState([])
const currency = "₹";
const deliveryCharge = 50;
const addToCart = async (itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
    }
}
const removeFromCart=async (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
if(token){
    await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
}


}
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems)
    { try{
        if(cartItems[item]>0){
        let itemInfo=makeup_list.find((product)=>product._id===item);
        totalAmount+=itemInfo.price*cartItems[item];
        }
    }catch(error){

    }
    
}
    return totalAmount;
}
const  fetchMakeupList = async()=>{
const response=await axios.get(url+"/api/product/list");
setMakeupList(response.data.data)

}
useEffect(()=>{
    async function loadData(){
        await fetchMakeupList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
            await loadCartData({ token: localStorage.getItem("token") })
}
    }
    loadData();
},[])

const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
    setCartItems(response.data.cartData);
}



    const contextValue={
        
     makeup_list,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount,url,token,setToken,currency,deliveryCharge,product_List,loadCartData
    };
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;