import React, { useState, useEffect } from 'react'

const Navbar = ({appDrinks, setAppDrinks}) => {
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const filter = appDrinks.filter(e => e.strDrink.toLowerCase().includes(search.toLowerCase()));
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
      <button>Cart</button>
    </div>
  )
}

export default Navbar