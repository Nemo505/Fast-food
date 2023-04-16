import React from 'react'
import Banner from './Banner'
import FoodCard from './Foods/FoodCard'
import Cart from './Cart'

const Home = () => {
  
  return (
    <div>
        <Banner />
        <FoodCard/>
        <Cart />
    </div>
  )
}

export default Home