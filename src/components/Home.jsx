import React from 'react'
import Banner from './Banner'
import FoodCard from './Foods/FoodCard'
import Cart from './Carts/Cart'
import Footer from './Footer'

const Home = () => {
  
  return (
    <div>
        <Banner />
        <FoodCard/>
        <Cart />
        <Footer/>
    </div>
  )
}

export default Home