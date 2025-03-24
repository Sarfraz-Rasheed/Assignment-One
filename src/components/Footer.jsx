import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        
        {/* Logo & Contact Info */}
        <div>
          <h2 className="text-2xl font-bold flex items-center mb-2">
            <span className="text-red-600 text-3xl mr-2">●</span> Simple
          </h2>
          <p className="text-gray-600">mikayla_beer@feil.name</p>
          <p className="text-gray-600">906-179-8309</p>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Don’t miss any updates of our new templates and extensions.!</p>
          <input 
            type="email" 
            placeholder="Email id" 
            className="w-full mb-3 p-2 rounded border border-gray-300 bg-[#f6f7fb] focus:outline-none"
          />
          <button className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition">
            Subscribe
          </button>
        </div>

        {/* Our Guidelines */}
        <div>
          <h3 className="text-xl font-bold mb-2">Our Guidelines</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie Policy</li>
            <li>Discover</li>
          </ul>
        </div>

        {/* Our Address */}
        <div>
          <h3 className="text-xl font-bold mb-2">Our address</h3>
          <p className="text-gray-600 mb-4">518 Schmeler Neck <br /> Bartlett, Illinois</p>
          <div className="flex space-x-3 text-sm">
            <div className="p-1 rounded-full bg-white border border-gray-300 hover:bg-[#a6a6a6] text-gray-500 hover:text-white transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-1 rounded-full bg-white border border-gray-300 hover:bg-[#a6a6a6] text-gray-500 hover:text-white transition cursor-pointer">
              <FaTwitter />
            </div>
            <div className="p-1 rounded-full bg-white border border-gray-300 hover:bg-[#a6a6a6] text-gray-500 hover:text-white transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-1 rounded-full bg-white border border-gray-300 hover:bg-[#a6a6a6] text-gray-500 hover:text-white transition cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
