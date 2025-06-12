import React from 'react'

const Banner = () => {
  return (
      <div><div className='w-full relative'>
          <img className='w-full h-[400px]' src="https://techsquadteam.com/assets/profile/blogimages/15ef18d25c3c9cfef0b0aff23927d6ab.png" alt="" />
          <div className='absolute right-1/2 bottom-1/4 
                    transform translate-x-1/2 text-white text-center flex flex-col items-center gap-2 sm:gap-5'>
              <h1 className='text-md sm:text-3xl lg:text-5xl font-bold text-shadow-lg/50 text-shadow-pink-500  text-cyan-500 '>Premium Beauty & Wellness Services</h1>
              <p className='text-xs font-bold text-shadow-lg/30 text-shadow-cyan-500 '>Transform your look with certified beauty professionals and luxury treatments</p>
              <button className='btn bg-cyan-500'>Book Now</button>
          </div>
      </div></div>
  )
}

export default Banner