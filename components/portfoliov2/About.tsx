/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const About = () => {
  return (
    <div id='about' className="pb-10 text-accent-content flex flex-col w-full lg:flex-row bg-base-200 px-10">
        <div className="w-1/2 grid h-auto bg-base-300 rounded-box place-items-center mx-auto">
          <div className="mockup-phone">
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
  )
}

export default About