import React from 'react'
import Banner from './Banner'
import FoodCard from './Foods/FoodCard'
import Cart from './Cart'

const Home = ({appDrinks}) => {
  return (
    <div>
        <Banner />
        <FoodCard appDrinks={appDrinks}/>
        <Cart />
    </div>
  )
}

export default Home