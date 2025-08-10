import React from 'react'
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <div className='min-h-screen bg-base-100 py-16'>
        <Helmet>
        <title>Contact Us | BeautyHub</title>
      </Helmet>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">Contact Us</h1>
        <p className="text-gray-500 mt-2">
          We’d love to hear from you! Let’s create something beautiful together.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="w-11/12 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Information */}
        <div className="bg-base-300 shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-6">Get In Touch</h2>

          <div className="flex items-center mb-6">
            <MapPin className="text-pink-500 w-6 h-6 mr-4" />
            <p className="text-gray-600">123 Beauty Street, Dhaka, Bangladesh</p>
          </div>

          <div className="flex items-center mb-6">
            <Phone className="text-pink-500 w-6 h-6 mr-4" />
            <p className="text-gray-600">+880 1234 567 890</p>
          </div>

          <div className="flex items-center mb-6">
            <Mail className="text-pink-500 w-6 h-6 mr-4" />
            <p className="text-gray-600">support@beautyhub.com</p>
          </div>

          <div className="mt-8">
            <iframe
              title="BeautyHub Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.02149196239!2d90.41251811543154!3d23.810331784556794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bafbb41e8f%3A0x8fcdab9dff31d69f!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-base-300 shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About