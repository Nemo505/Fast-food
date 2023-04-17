import React, { useState, useEffect } from 'react';
import {StateContextCustom} from '../context/StateContext';

const Navbar = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  const {state:{drinks}, setAppDrinks} = StateContextCustom(state => state);
  const {state:{carts}} = StateContextCustom(state => state);

  useEffect(() => {
    const filter = drinks.filter(e => e.strDrink.toLowerCase().includes(search.toLowerCase()));
    console.log(filter);
    setAppDrinks(filter);
  }, [search]);

  
  return (
    <div className='bg-fuchsia-300 flex justify-between p-5'>
      <div>maple</div>
      <form action="">
        <div className=''>
          <input type="text" value={search} placeholder='search' onChange={e => setSearch(e.target.value)}/>
        </div>
      </form>
      <button className='py-1 mr-2 px-5 bg-slate-400 rounded-md'>
        {carts? carts.length : 0}
         (Cart)</button>
    </div>
  )
}

export default Navbar