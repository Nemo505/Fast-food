import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const FoodCard = () => {

  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
      drinkData();
  }, []);

 const drinkData = async() => {
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        setDrinks(data.drinks);
     })
     .catch((err) => {
        console.log(err.message);
     });
}

  return (  
    <div className='bg-red-200 grid grid-cols-4'>
      {
        drinks.map(drink => {
          return (
            <div className='max-w-[400px] max-h-[300px] md:max-w-[300px] p-5 text-center'  key={drink.idDrink}>
                <img src={drink.strDrinkThumb} alt="" className='object-contain'/>

                <Link to={`/detail/${drink.idDrink}`}>
                <button>
                  Detail
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