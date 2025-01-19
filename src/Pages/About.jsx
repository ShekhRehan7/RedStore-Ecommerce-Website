import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
     <div className="font-sans p-6 mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">About Us</h2>
      
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-700 text-lg leading-7">
          Welcome to our online store! We are a passionate team committed to providing the best shopping experience. Our goal is to offer a wide variety of high-quality products at affordable prices to meet all your needs. Whether you are looking for the latest fashion trends, tech gadgets, home decor, or beauty essentials, we’ve got you covered!
        </p>
        
        <p className="text-gray-700 text-lg mt-4">
          We pride ourselves on customer satisfaction. If you have any questions or concerns, feel free to reach out to our customer support team. We value every customer and strive to make every shopping experience enjoyable and hassle-free.
        </p>
        
        <p className="text-gray-700 text-lg mt-4">
          We hope you enjoy browsing our collection. Thank you for choosing us!
        </p>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-[#ff523b] hover:bg-[#ec4e39] text-white py-2 px-4 rounded-md"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default About