import React from 'react'
import foodPlatte from "../../src/assets/foodPlatte.jpg"
import foodRed from "../../src/assets/foodRed.jpg"
import foodBlue from "../../src/assets/foodBlue.jpg"
import { Carousel } from 'flowbite-react'

const Banner = () => {
  return (
    <div className='md:p-4 xl:p-18 '>
      <div className='outline-orange-500 outline-dotted p-6'>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
          <Carousel>
            <img
              src={foodPlatte}
              alt="..." className='object-cover'
            />
            <img
              src={foodRed}
              alt="..."
            />
            <img
              src={foodBlue}
              alt="..."
            />
          </Carousel>
        </div>
      </div>

    </div>
  )
}

export default Banner