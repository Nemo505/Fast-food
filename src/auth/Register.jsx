import React from 'react'

const Register = () => {
  return (
    <div className='h-screen flex' style={{background: "linear-gradient(to right bottom, #FFA49F, #DADD98, orange)"}}>
        <div 
          className='relative m-auto w-[400px] 
                    h-2/3 backdrop-blur-2xl bg-white/40 
                    rounded-3xl flex justify-center items-center'
                  >

            <form action="">
              <h4 className='text-2xl text-center'>Login</h4>
              
            {/* email */}
              <div className='relative w-[310px] my-[30px] border-b-orange-500 border-b-2'>
                <span className='absolute right-3 leading-[57px]'>
                  <MailOutlineIcon />
                </span>
                <input type="email" className='w-[100%] h-[50px] bg-transparent border-none outline-none overflow-hidden'
                  style={{padding:'0 35px 0 5px'}}
                />
                <label htmlFor="" className='absolute top-[50%] left-[5px] -translate-y-[50%] pointer-events-none'>Email</label>
              </div>

            {/* password */}
              <div className='relative w-[310px] my-[30px] border-b-orange-500 border-b-2'>
                <span className='absolute right-3 leading-[57px]'>
                  <LockOutlinedIcon />
                </span>
                <input type="password" className='w-[100%] h-[50px] bg-transparent border-none focus:outline-none'
                  style={{padding:'0 35px 0 5px'}}
                />
                <label htmlFor="" className='absolute top-[50%] left-[5px] -translate-y-[50%] pointer-events-none'>Password</label>
              </div>

              <div className=' flex justify-between' style={{margin: "-15px 0 15px"}} >
                <label htmlFor=""><input type="checkbox" className='mr-[4px]' />Remember me</label>
                <a href="" className='hover:underline'>Forgot Password?</a>
              </div>

              <button className='w-[100%] bg-orange-400 rounded-full py-2 font-semibold' type="submit">Login</button>
              
              <div className='text-center' style={{margin:"20px 0 10px"}}>
                <p>Don't have an account? <a href="" className='hover:underline'>Register</a></p>
              </div>

            </form>
        </div>
    </div>
  )
}

export default Register