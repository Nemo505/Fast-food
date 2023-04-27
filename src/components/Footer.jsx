import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'; 
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
  <footer className="relative bg-orange-500">
      <h5 className='text-center'>Contact us</h5>
      <div className="mt-2 lg:mb-0 mb-6 flex items-center justify-center">
        <button className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <TwitterIcon />
        </button>
        <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <FacebookOutlinedIcon />
        </button>
        <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <InstagramIcon />
        </button>
        <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <GitHubIcon/>
        </button>
      </div>
       
      <hr className="my-6 border-blueGray-300"/>
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm -500 font-semibold py-1">
            Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" className=" hover:text-gray-800" target="_blank"/> Notus JS by
            <a href="https://www.creative-tim.com?ref=njs-profile" className=" hover:-800">Creative Tim</a>.
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer