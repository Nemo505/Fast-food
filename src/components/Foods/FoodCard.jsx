import React from 'react'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../../context/StateContext'

const FoodCard = ({}) => {
  const {appDrinks} = StateContextCustom(state => state)

  return (  
    <div className='bg-red-200 grid grid-cols-4'>
      {
        appDrinks.map(drink => {
          return (
            <div className='max-w-[400px] max-h-[300px] md:max-w-[300px] p-5 text-center'  key={drink.idDrink} {...drink}>
                <img src={drink.strDrinkThumb} alt="" className='object-cover'/>

                <Link to={`/detail/${drink.idDrink}`}>
                <button>
                  {drink.strDrink}
                </button>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default FoodCard