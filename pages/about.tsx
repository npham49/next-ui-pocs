import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
    <Navbar/>
    <section id='about' className="bg-white dark:bg-gray-900  min-h-screen">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">
          About this project
        </h1>

        <div className="mt-12 space-y-8">
          <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button className="flex items-center justify-between w-full p-8">
              <h1 className="font-semibold text-gray-700 dark:text-white">
                What is the purpose of this project ?
              </h1>
            </button>

            <hr className="border-gray-200 dark:border-gray-700" />

            <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
              A collection of UI designs and components using Tailwind CSS
              UI kits. Each page in the project is its own separate fully functioning 
              website designed for different purposes. Think of them as separate template for future references.
              Especially if you are into NextJs for Web Development.
            </p>
          </div>
          <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button className="flex items-center justify-between w-full p-8">
              <h1 className="font-semibold text-gray-700 dark:text-white">
                Can I have the source code?
              </h1>
            </button>

            <hr className="border-gray-200 dark:border-gray-700" />

            <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
              Link to GitHub:
            </p>
          </div>

         
        </div>
      </div>
    </section>
    </>
  );
}
