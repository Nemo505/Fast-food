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
          <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
            <img
              src={foodPlatte}
              alt="..." className="block absolute w-full -translate-x-1/2 -translate-y-1/2"
            />
            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">30% OFF</span>
          </div>

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