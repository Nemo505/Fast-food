import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-fuchsia-300 flex justify-between p-5'>
      <div>maple</div>
      <input type="text" placeholder='search' />
      <button>Cart</button>
    </div>
  )
}

export default Navbar