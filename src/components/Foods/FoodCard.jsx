import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../../context/StateContext'
import { Card } from 'flowbite-react'
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './foodCard.css'

const FoodCard = ({}) => {
  const {state:{drinks}} = StateContextCustom(state => state)
  const {dispatch} = StateContextCustom()
  const [limit, setLimit] = useState(8);
  const  [toggleHeart, setToggleHeart] = useState(false)
    
  const  changeColor = useCallback(() =>{
     setToggleHeart(!toggleHeart)
    },[])
 
  return (  
    <div className="flex flex-wrap ">
      {
      drinks.slice(0, limit ? limit : drinks.length).map(drink => {
          return (
            <div className='items-center justify-center mx-auto m-9'  key={drink.id}>
                
                <div className="max-w-xs">
                  <Card
                    imgAlt="food image"
                    imgSrc={drink.image} >

                    <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-between">
                     
                        {...  drink.title.split(' ').join('- ').split('-', 3)}                            
                    
                      {/* <FavoriteBorderOutlinedIcon className={
                          toggleHeart ? 'heart active' : 'heart'
                        } 
                        onClick={() => {dispatch({type:"ADD_TO_CART", payload:{drink} },{changeColor}) }} /> 
                        */}
                      <Link to={`/detail/${drink.id}`}>Detail</Link> 
                    </p>

                  </Card>
                </div>
          
            </div>
          )
        })
      }
    </div>
  )
}

export default FoodCard