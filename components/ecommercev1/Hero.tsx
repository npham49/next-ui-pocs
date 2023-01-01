import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://loremflickr.com/1000/800/fashion,runway")` }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-white ">
    <div className="max-w-md">
      <h3 className="text-3xl font-light">Collection Name</h3>
      <h1 className="mb-5 text-6xl font-normal">Item Name</h1>
      <button className="btn rounded-none btn-outline text-white hover:bg-white">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero