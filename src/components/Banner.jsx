import React from 'react'
import foodPlatte from "../../src/assets/foodPlatte.jpg"
import { Carousel } from 'flowbite-react'

const Banner = () => {
  return (
    <div className='md:p-4 xl:p-20 bg-slate-400'>
      
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src={foodPlatte}
            alt="..." className='object-cover'
          />
          <img
            src={foodPlatte}
            alt="..."
          />
          <img
            src={foodPlatte}
            alt="..."
          />
        </Carousel>
      </div>

    </div>
  )
}

export default Banner