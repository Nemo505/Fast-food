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
            <div>
              <img
                src={foodPlatte}
                alt="..." className="absolute h-56 sm:h-64 xl:h-80 2xl:h-96  object-cover"
              />
             < span className="absolute text-2xl font-semibold text-white sm:text-3xl dark:text-gray-800">30% OFF</span>
            </div>

            <img
              src={foodRed} className='absolute h-56 sm:h-64 xl:h-80 2xl:h-96  object-cover'
              alt="..."
            />
            <img
              src={foodBlue} className='absolute h-56 sm:h-64 xl:h-80 2xl:h-96  object-cover'
              alt="..."
            />
          </Carousel>
        </div>
      </div>

    </div>
  )
}

export default Banner