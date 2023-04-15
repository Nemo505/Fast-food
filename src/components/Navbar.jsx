import React, { useState, useEffect } from 'react'

const Navbar = ({appDrinks, setAppDrinks}) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    hi()
  }, []);

  const hi = async() => {
    const filter = appDrinks.filter(e => e.strDrink.toLowerCase().includes(search));
    // const filter = appDrinks.filter(e =>{
    //   return (e.toLowerCase().search(e.target.value.toLowerCase().includes(search)));
    // });
    console.log(filter);
    setAppDrinks(filter);
  }
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