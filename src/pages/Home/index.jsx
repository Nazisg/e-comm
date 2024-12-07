import React from 'react'
import Hero from '../../shared/features/Hero'
import BestSeller from '../../shared/features/BestSeller'
import Banner from '../../shared/features/Banner'
import WhyUs from '../../shared/features/WhyUs'
import LatestNews from '../../shared/features/LatestNews'
import FeaturedProducts from '../../shared/features/FeaturedProducts'
import FooterTop from '../../shared/features/FooterTop'

const Home = () => {
  return (
    <>
      <Hero/>
      <BestSeller/>
      <Banner/>
      <WhyUs/>
      <LatestNews/>
      <FeaturedProducts/>
      <FooterTop/>
    </>
  )
}

export default Home