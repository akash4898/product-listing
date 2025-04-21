import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {/* Brand Logo & Description */}
        <div>
          <a href="#" className="flex items-center">
            <img
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt="Logo"
              className="h-10"
            />
          </a>
          <p className="text-gray-500 mt-3">
            Your one-stop shop for the best products. Quality, reliability, and satisfaction guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-black">Quick Links</h3>
          <Link className='text-gray-600 hover:text-blue-600' to="/">Home</Link>
          <Link className='text-gray-600 hover:text-blue-600' to="/about">About</Link>
          <Link className='text-gray-600 hover:text-blue-600' to="/shop">Shop</Link>
          <Link className='text-gray-600 hover:text-blue-600' to="/contact">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-black">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-facebook-f text-xl">Home</i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-twitter text-xl">About</i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-instagram text-xl">Shop</i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-linkedin-in text-xl">Contact</i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 py-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}
