import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

const Error404 = () => {
    return (
 <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-pink-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      <Helmet>
        <title>404 Not Found | BeautyHub</title>
      </Helmet>

      <h1 className="text-[7rem] md:text-[10rem] font-extrabold text-pink-600 dark:text-pink-400 leading-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        It seems you’ve wandered off into a beauty aisle that doesn’t exist.
        Let’s guide you back to the glamour!
      </p>


      <Link
        to="/"
        className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Back to Home
      </Link>
      <div className="mt-12 w-full max-w-lg">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Lost in Beauty"
          className="w-full opacity-90 dark:opacity-80"
        />
      </div>
    </div>
    )
}

export default Error404