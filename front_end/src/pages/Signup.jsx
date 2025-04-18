import React, { useState } from 'react'

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
             <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>

        {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}

        <form  className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
            //   onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="last name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
            //   onChange={handleChange}
              required
              className="mt-1 block w-full border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="id number" className="block text-sm font-medium text-gray-700">id number</label>
            <input
              type="text"
              name="idNumber"
              id="idNumber"
              value={formData.idNumber}
            //   onChange={handleChange}
              required
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
            //   onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
            //   onChange={handleChange}
              required
              className="mt-1 block w-full border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>


    </div>
  )
}

export default Signup