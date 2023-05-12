import React from 'react'
import foodPlatte from "../../src/assets/foodPlatte.png"
import foodRed from "../../src/assets/foodRed.jpg"
import foodBlue from "../../src/assets/foodBlue.png"
import { Carousel } from 'flowbite-react'

const Banner = () => {
  return (
    <div className='md:p-4 xl:p-18 z-0'>
      <div className='outline-orange-500 outline-dotted p-9 mt-28'>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
            
          <Carousel >
            <div className='relative'>
              <img
                src={foodPlatte}
                alt="..." className='absolute'
                 style={{objectFit:"fill", 
                 left: "0%", top: "-140px"
                }}
              />
               <p
              style={{
                position: "absolute",
                left: "70%",
                bottom: "50px",
                color: "white",
                transform: " translateX(-40%)"
              }}
            >Come and Grab First</p>
            </div>

            <div className='relative'>
              <img
                src={foodBlue}
                alt="..." className='absolute'
                 style={{objectFit:"fill", 
                 left: "40%", top: "-250px"
                }}
              />
               <p
              style={{
                position: "absolute",
                left: "20%",
                bottom: "50px",
                color: "white",
                transform: " translateX(-40%)"
              }}
            >50% for all Cakes</p>
            </div>

           
          </Carousel>
        </div>
      </div>

    </div>
  )
}

export default Banner