/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full bg-base-200'>
      <div  className="pb-10 text-accent-content flex flex-col w-full max-w-5xl mx-auto lg:flex-row">
        <div className="w-auto grid h-auto rounded-box place-items-center">
          <div className="mockup-phone w-[300px]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <img
                  src="https://placeimg.com/1000/1000/arch"
                  className=" max-w-lg h-full"
                  alt="Headshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="text-center p-20 w-auto bg-base-300 rounded-box place-items-center">
          <h2 className="text-5xl font-bold text-accent">About Me</h2>
          <p className="py-2">
            I'm a full stack developer with a passion for creating beautiful and
            functional websites.
          </p>
          <p className="py-2">
            I'm a full stack developer with a passion for creating beautiful and
            functional websites.
          </p>
          {/* a random backstory in p with class py-2 */}
        </div>
        </div>
      </div>
  )
}

export default About