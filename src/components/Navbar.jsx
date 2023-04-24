import React, { useState, useEffect } from 'react';
import {StateContextCustom} from '../context/StateContext';
import logo from '../assets/leaf.png'

const Navbar = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  const {state:{drinks}, setAppDrinks} = StateContextCustom(state => state);
  const {state:{carts}} = StateContextCustom(state => state);
  const {isMenuToggled, setIsMenuToggled} = StateContextCustom(state => state);

  useEffect(() => {
    const filter = drinks.filter(e => e.strDrink.toLowerCase().includes(search.toLowerCase()));
    console.log(filter);
    setAppDrinks(filter);
  }, [search]);

  
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center">
          <img src={logo} className="mr-3 h-8 object-fill" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Maple</span>
      </a>
        <form action="">
          <div className=''>
            <input type="text" value={search} placeholder='search' onChange={e => setSearch(e.target.value)}/>
          </div>
        </form>
        <button className='py-1 mr-2 px-5 bg-slate-400 rounded-md' onClick={() => setIsMenuToggled(!isMenuToggled)}>
          {carts? carts.length : 0}
          (Cart)</button> 
      </div>
    </nav>


  )
}

export default Navbar