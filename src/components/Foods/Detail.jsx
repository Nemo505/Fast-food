import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../Carts/Cart'

const Detail = () => {
  let {id} = useParams();
  const [drinkDetail, setDrinkDetail] = useState({});

  useEffect(() => {
    detailData();
  }, []);

 const detailData = async() => {
      await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=85641bf6e4024052a48dffb41b6dde93`)
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
    <div><img src={drinkDetail.image} alt="" />
      <Cart />
    </div>
  )
    
}

export default Detail