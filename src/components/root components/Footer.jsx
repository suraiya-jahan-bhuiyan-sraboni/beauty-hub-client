import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <footer className="w-11/12 mx-auto bg-gray-800 text-white px-8 py-12 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">


          <div>
            <h2 className="text-xl font-bold mb-2 text-pink-500">Beauty<span className='text-cyan-500'>Hub</span></h2>
            <p className="text-sm">Transform your look with certified beauty professionals and luxury treatments.
              We connect you with the best beauty experts in your area.</p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>Hair Styling</li>
              <li>Facial Treatments</li>
              <li>Makeup Artistry</li>
              <li>Nail Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Experts</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li>Help Center</li>
              <li>Booking Support</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>


        </div>


        <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
          <p>© 2025 BeautyHub. All rights reserved.</p>
          <div>
            <p className='text-cyan-500'>follow us on:</p>
            <div className='flex justify-center items-center gap-2 text-pink-300'><FaFacebook /><FaLinkedin /><FaYoutube className='text-lg' /></div>
          </div>
          
          
        </div>
      </footer>
    </div>
  )
}

export default Footer