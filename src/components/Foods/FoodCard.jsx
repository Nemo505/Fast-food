import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../../context/StateContext'
import { Card, Tooltip } from 'flowbite-react'
import {RiHeart3Line} from 'react-icons/ri';
import {RiHeart3Fill} from 'react-icons/ri';

const FoodCard = ({}) => {
  const {state:{drinks}} = StateContextCustom(state => state)
  const {dispatch} = StateContextCustom()
  const [limit, setLimit] = useState(6);
  const [like, setLike] = useState([]);
 
  return (  
    <div className="flex flex-wrap gap-3">
      {
      drinks.slice(0, limit ? limit : drinks.length).map(drink => {
          return (
            <div className='items-center justify-center mx-auto'  key={drink.id}>
                <div className="max-w-xs ">

                  {/* heart with add to cart */}
                  <div className= {`relative top-14 left-2 `}  >
                      {like.includes(`red${drink.id}`) ?
                        <RiHeart3Fill className='' size={25}  style={{outline: 'none', color: 'red'}}
                          onClick={() => {dispatch({type:"ADD_TO_CART", payload:{drink} }), setLike([...like, `red${drink.id}`]) }} /> 
                        :
                        <Tooltip content="Add to Card ?">
                          <RiHeart3Line className='hover:saturate-200' size={25} style={{outline: 'none', color: 'red'}}
                          onClick={() => {dispatch({type:"ADD_TO_CART", payload:{drink} }), setLike([...like, `red${drink.id}`]) }} /> 
                        </Tooltip>
                      }  
                  </div>

                  {/* Card Style */}
                  <Card imgSrc={drink.image} alt=""  className='object-fill'>
                    <p className="font-bold text-gray-700 dark:text-gray-400 flex justify-between">
                      {...  drink.title.split(' ').join('- ').split('-', 2)}
                      <button className='bg-orange-500 text-white rounded-md'>
                        <Link to={`/detail/${drink.id}`} className='m-4'>Detail</Link> 
                      </button>
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