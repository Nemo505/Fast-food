import React, { useState, useEffect } from 'react';
import {StateContextCustom} from '../context/StateContext';
import logo from '../assets/leaf.png'
import { Avatar, Dropdown } from 'flowbite-react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  const {state:{drinks}, setAppDrinks} = StateContextCustom(state => state);
  const {state:{carts}} = StateContextCustom(state => state);
  const {isMenuToggled, setIsMenuToggled} = StateContextCustom(state => state);

  useEffect(() => {
    const filter = drinks.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));
    console.log(filter);
    setAppDrinks(filter);
  }, [search]);

  
  return (
    <nav className="border-gray-200 bg-orange-500 dark:bg-gray-800 dark:border-gray-700 outline-orange-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center">
          <img src={logo} className="mr-3 h-8 object-fill" alt="maple_logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Maple</span>
      </a>
        <form action="">
          <div className=''>
            <input type="text" value={search} placeholder='search' className='rounded-md' onChange={e => setSearch(e.target.value)}/>
          </div>
        </form>

        <div className="flex justify-center items-center md:order-2">
          <div className='cursor cursor-pointer relative mx-5 ' onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <ShoppingCartOutlinedIcon  />
            <span className='w-4 h-5 font-bold -top-2 -right-2 rounded-full bg-red-300 absolute flex items-center justify-center'>{carts? carts.length : 0}</span>
          </div>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
          >
              <Dropdown.Header>
                <span className="block text-sm">
                  Bonnie Green
                </span>
            </Dropdown.Header>

            <Dropdown.Item>
              Profile
            </Dropdown.Item>

            <Dropdown.Item>
              Settings
            </Dropdown.Item>
     
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
           </Dropdown>
        </div>
         
        

      </div>
    </nav>


  )
}

export default Navbar