import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-black text-white py-10 px-4 md:px-20 mt-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Logo / Title */}
    <div>
      <h2 className="text-2xl font-bold">AISGP</h2>
      <p className="mt-2 text-sm text-gray-400">
        Empowering students with AI-driven academic guidance.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/login" className="hover:underline">Login</a></li>
        <li><a href="/register" className="hover:underline">Register</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <p className="text-sm text-gray-400">Arba Minch, Ethiopia</p>
      <p className="text-sm text-gray-400 mt-1">aisgp@university.edu</p>
    </div>

    {/* Follow Us */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-pink-400">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} AISGP. All rights reserved.
  </div>
</footer>

    
    </>
  )
}

export default Footer