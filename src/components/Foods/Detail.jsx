import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  let {id} = useParams();
  const [drinkDetail, setDrinkDetail] = useState({});
  console.log(id);

  useEffect(() => {
    drinkDetailData();
  }, []);

const drinkDetailData = async() => {
  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      setDrinkDetail(data.drinks[0]);
   })
   .catch((err) => {
      console.log(err.message);
   });
}
  return (
    <div><img src={drinkDetail.strDrinkThumb} alt="" /></div>
  )
}

export default Detail