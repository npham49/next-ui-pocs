/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaReact,FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTypescript,SiNextdotjs } from 'react-icons/si'

const Experiences = () => {
  return (
    <div id="experience" className="text-accent-content mx-auto mockup-window border h-auto bg-base-300 -mt-24 max-w-screen-xl bg-opacity-60">
    <div className="flex justify-center px-4">
      <div className="stats stats-horizontical w-full lg:w-auto shadow">
      <div className="stat text-center text-accent-content">
          <div className="stat-title">NextJS</div>
          <div className="stat-value mx-auto text-5xl ">
            <SiNextdotjs />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">ReactJS</div>
          <div className="stat-value mx-auto text-5xl ">
            <FaReact />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">TypeScript</div>
          <div className="stat-value mx-auto text-5xl">
            <SiTypescript />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">MongoDB</div>
          <div className="stat-value mx-auto text-5xl">
            <SiMongodb />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">ExpressJS</div>
          <div className="stat-value mx-auto text-5xl">
            <SiExpress />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">NodeJS</div>
          <div className="stat-value mx-auto text-5xl">
            <FaNodeJs />
          </div>
        </div>
      </div>
    </div>
    {/* Timeline Section */}
    <section className="bg-base-200 py-12">
      <div className="container  mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-secondary-focus">Work Experience</h1>
        <p className="py-6">List of companies I've worked for.</p>
      </div>
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-primary">
              <h3 className="text-3xl font-semibold">Company 1</h3>
              <span className="text-sm font-bold tracking-wider uppercase">
                Location
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-[-10px] sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 pb-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Position Name{" "}
                </h3>
                <time className="text-xs tracking-wide uppercase">
                  Dec 2020 - Dec 2021
                </time>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis
                  orci scelerisque. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis
                  orci scelerisque. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis
                  orci scelerisque. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-primary">
              <h3 className="text-3xl font-semibold">Company 2</h3>
              <span className="text-sm font-bold tracking-wider uppercase">
                Location
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-[-10px] sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 pb-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Position Name{" "}
                </h3>
                <time className="text-xs tracking-wide uppercase">
                  Dec 2020 - Dec 2021
                </time>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis
                  orci scelerisque. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis
                  orci scelerisque. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis
                  orci scelerisque. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Experiences