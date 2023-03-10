/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="container px-6 py-10 mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                  Page collections
                </h1>

                <p className="max-w-lg mx-auto mt-4 text-gray-500">
                  This is the collection of page templates using Tailwind CSS UI kits.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                <div>
                  <img
                    className="relative z-10 object-cover w-full rounded-md h-96"
                    src="/portfoliov2preview.png"
                    alt=""
                  />

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <Link
                      href="/portfoliov2"
                      className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                    >
                      Portfolio v2
                    </Link>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      A quick portoflio templates for developers.
                    </p>

                    <p className="mt-3 text-sm text-blue-500">
                      24 Dec 2022
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    className="relative z-10 object-cover w-full rounded-md h-96"
                    src=""
                    alt=""
                  />

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a
                      href="#"
                      className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                    >
                      Ecommerce v1
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                      An e-commerce template design.
                    </p>

                    <p className="mt-3 text-sm text-blue-500">
                      25 Dec 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
