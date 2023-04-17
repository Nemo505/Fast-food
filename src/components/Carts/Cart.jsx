import React from 'react'
import { StateContextCustom } from '../../context/StateContext'

const Cart = () => {
  const {state:{carts}} = StateContextCustom(state => state) 
  return (
    <div className='mx-auto p-5 w-1/2'>
      { carts.map(cart => {
        return (
          <div key={cart.drink.idDrink} className='flex mx-4 p-5 bg-slate-400 mt-4'>
            
            <div className='flex-1 flex items-center w-20 h-14'>
              <img src={cart.drink.strDrinkThumb} alt="" className='w-20 h-12 object-cover' />
              <div>
                <p className=''>cost</p>
                <div className=' flex'>
                  <button>+</button>
                  <p>count</p>
                  <button>-</button>
                </div>
              </div>
            </div>

            <div className="flex-1 me-0">
              <div className="">remove</div>
            </div>
          </div>
          )
        })
      } 
    </div>
  )
}

export default Cart