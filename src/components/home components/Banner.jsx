import React from 'react'

const Banner = () => {
  return (
      <div className=''>
          <div className='w-full relative '>
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'>
              </div>
              <div className='absolute top-1/2 left-1/2 z-20 w-11/12
  -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col items-center gap-7 sm:gap-10'>
                      <h1 className='w-full text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-shadow-lg/50 text-shadow-pink-500  text-white '>Premium Beauty & Wellness Services</h1>
                      <p className='w-full text-xs xl:text-lg font-bold text-shadow-lg/30 text-shadow-pink-500 '>Transform your look with certified beauty professionals and luxury treatments</p>
                      <button className='btn bg-cyan-500 xl:text-lg'>Book Now</button>
                  </div>
          <img className='w-full h-[400px] 2xl:h-[600px] object-cover' src="https://techsquadteam.com/assets/profile/blogimages/15ef18d25c3c9cfef0b0aff23927d6ab.png" alt="" />

          </div>
      </div>
  )
}

export default Banner