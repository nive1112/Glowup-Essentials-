import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts'
import MakeupDisplay from '../../components/MakeupDisplay/MakeupDisplay'

const Home = () => {

    const[category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreProducts category={category} setCategory={setCategory}/>
      <MakeupDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
