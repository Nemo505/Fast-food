import React from 'react'
import foodPlatte from "../../src/assets/foodPlatte.png"
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
               <div
               className=' font-semibold text-2xl'
                style={{
                  position: "absolute",
                  left: "69%",
                  bottom: "50px",
                  color: "brown",
                  transform: " translateX(-40%)"
                }}
              >
              <p>" Where everyflavor tells a story "</p>
              <i className='text-lg'> _foodie Kazue</i>
            
            </div>
            </div>

            <div className='relative'>
              <img
                src={foodBlue}
                alt="..." className='absolute'
                 style={{objectFit:"fill", 
                 left: "55%", top: "-280px"
                }}
              />
               <div
                className=' font-semibold text-2xl pb-2'
                style={{
                  position: "absolute",
                  left: "20%",
                  bottom: "40px",
                  color: "green",
                  transform: " translateX(-40%)",
                  textAlign:"end"
                }}
              >
              <p style={{ background: "linear-gradient(to right bottom, #FFA49F, #DADD98, orange)"}}>Food always feels like luxury when you're hungry.</p>
              <i className='text-lg' >_Foodie Kazue</i>
            </div>
          </div>

           
          </Carousel>
        </div>
      </div>

    </div>
  )
}

export default Banner