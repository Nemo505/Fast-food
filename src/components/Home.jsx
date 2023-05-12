import React from 'react'
import Banner from './Banner'
import FoodCard from './Foods/FoodCard'
import Cart from './Carts/Cart'
import Footer from './Footer'
import Navbar from './Navbar';
import './Foods/food.css'

const Home = () => {
  
  return (
    <div style={{background: "linear-gradient(to right bottom, #FFA49F, #DADD98, orange)"}}>
       <Navbar/>
          <Banner />
          <FoodCard/>
          <Cart />
          <hr className="my-6 border-blueGray-300"/>
        <Footer/>
    </div>
  )
}

export default Home