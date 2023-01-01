import React from 'react'
import BestSeller1 from '../../components/ecommercev1/BestSeller'
import Hero from '../../components/ecommercev1/Hero'
import Layout from '../../components/ecommercev1/Layout'
import Navbar from '../../components/ecommercev1/Navbar'
import NewArrival from '../../components/ecommercev1/NewArrival'

const index = () => {
  return (
    <Layout>
      <Hero/>
      <BestSeller1/>
      <NewArrival/>
    </Layout>
  )
}

export default index