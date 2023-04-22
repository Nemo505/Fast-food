import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../../context/StateContext'

const FoodCard = ({}) => {
  const {state:{drinks}} = StateContextCustom(state => state)
  const {dispatch} = StateContextCustom()
  const [limit, setLimit] = useState(8);
  const {drinkDetail, setDrinkDetail} = StateContextCustom()

  //price and detail api
  useEffect(() => {
      detailData();
  }, []);

  const detailData = async() => {
      await fetch(`https://api.spoonacular.com/recipes/${drinkDetail}/information?apiKey=85641bf6e4024052a48dffb41b6dde93`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setDrinkDetail(data)
      })
      .catch((err) => {
          console.log(err.message);
      });
  }

  return (  
    <div className='bg-red-200 flex flex-wrap'>
      {
      drinks.slice(0, limit ? limit : drinks.length).map(drink => {
          return (
            <div className='items-center justify-center mx-auto bg-slate-800 text-center'  key={drink.id}>
                <img src={drink.image} alt="" className='object-cover h-56 w-56 m-10'/>

                <Link to={`/detail/${drink.id}`}>Detail</Link> 
                <h4> {drink.strDrink}</h4>
                <button className='bg-red-600 p-2 rounded-md' 
                  onClick={() => {dispatch({type:"ADD_TO_CART", payload:{drink, setDrinkDetail } }); setDrinkDetail(drink.id) }}  > 
                  Add to cart
                </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FoodCard