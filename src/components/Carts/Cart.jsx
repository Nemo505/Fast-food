import React, { useState } from 'react'
import { StateContextCustom } from '../../context/StateContext'
import Total from './Total'

const Cart = () => {
  const {state:{carts}} = StateContextCustom(state => state) 
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  const {isMenuToggled, setIsMenuToggled} = StateContextCustom(state => state);

  const [foodId, setFoodId] = useState(0);

  const increase = () => {
    setCount (count+ 1)
  }

  const decrease = () => {
    if (count >  1) {
      setCount (count- 1)
    }  
  }

  return (
    <div className='mx-auto p-5 w-1/2'>
        {isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-fuchsia-900 w-[300px]">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}> 
                        <img src="" alt="menu-icon" />
                    </button>
                </div>
                <div className="flex flex-col gap-10 ml-[22%] text-2xl text-red-400">
                { 
                  carts.length === 0 ? (
                      <div>
                        <Total amount={amount}/>
                      </div>
                  ):(
                    carts.map(cart => {
                      return (
                        <div key={cart.drink.id} className='flex mx-4 p-5 bg-slate-400 mt-4'>
                          
                          <div className='flex-1 flex items-center w-20 h-14'>
                            <img src={cart.drink.image} alt="" className='w-20 h-12 object-cover' />
                            <div>
                              <p className=''>cost</p>
                              <div className=' flex'>
                                <button onClick={increase}>+</button>
                                <p>{count}</p>
                                <button onClick={decrease}>-</button>
                              </div>
                            </div>
                          </div>
              
                          <div className="flex-1 me-0">
                            <div className="">remove</div>
                          </div>
                          <Total amount={amount}/>
                        </div>
                        )
                      })
                  )
                  
                  } 
                </div>
            </div>
        )}
      
    </div>
  )
}

export default Cart