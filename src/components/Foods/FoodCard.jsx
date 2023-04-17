import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../../context/StateContext'

const FoodCard = ({}) => {
  const {state:{drinks}} = StateContextCustom(state => state)
  const {dispatch} = StateContextCustom()
  const [limit, setLimit] = useState(8);

  return (  
    <div className='bg-red-200 flex flex-wrap'>
      {
      drinks.slice(0, limit ? limit : drinks.length).map(drink => {
          return (
            <div className='items-center justify-center mx-auto bg-slate-800 text-center'  key={drink.idDrink}>
                <img src={drink.strDrinkThumb} alt="" className='object-cover h-56 w-56 m-10'/>

                <Link to={`/detail/${drink.idDrink}`}>Detail</Link> 
                <h4> {drink.strDrink}</h4>
                <button className='bg-red-600 p-2 rounded-md' 
                  onClick={() => dispatch({type:"ADD_TO_CART", payload:{drink}  })}> 
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