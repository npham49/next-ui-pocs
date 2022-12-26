/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div id='projects' className="text-accent-content min-h-[800px] bg-base-200">
        <div className="container pt-12 mt-5 mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold text-primary">Personal Projects</h1>
          <p className="py-6">List of projects I' most proud of.</p>
        </div>
        <section className="py-6">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <Card props={{}} />
              <Card props={{}} />
              <Card props={{}} />
              <Card props={{}} />
            </div>
          </div>
        </section>
        <section className="py-6">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
              You can find more of my projects on my GitHub
            </h1>
            <button className="px-8 py-3 text-lg font-semibold rounded btn btn-primary">
              GitHub
            </button>
          </div>
        </section>
      </div>
  )
}

export default Projects