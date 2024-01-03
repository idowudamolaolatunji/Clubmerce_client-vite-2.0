import React from 'react'
import HeroSection from './HomeComponents/HeroSection'
import AdsSection from './HomeComponents/AdsSection'
import Header from '../../Components/Headers/Header'
import MainAnimation from '../../Components/MainAnimation.Jsx';
import FeaturesSection from './HomeComponents/FeaturesSection'
import StatSection from './HomeComponents/StatSection'
import HowSection from './HomeComponents/HowSection'
import BrandsSection from './HomeComponents/BrandsSection'
import GetStartedSection from './HomeComponents/GetStartedSection'
import FAQSection from './HomeComponents/FAQSection'
import TestimonialSection from './HomeComponents/TestimonialSection'
import CTASection from './HomeComponents/CTASection';

import Footer from '../../Components/Footers/MainFooter';

import '../../animation.css';
import '../../index.css';
import './main.css';
import '../../query.css';
import ProductListingSection from './HomeComponents/ProductListingSection'

function index() {
  return (
    <main>
        <Header />
        <MainAnimation />
        
        <HeroSection />
        {/* <AdsSection /> */}

        <FeaturesSection />
        <StatSection />

        <HowSection />
        <BrandsSection />

        <GetStartedSection />
        <FAQSection />
        <TestimonialSection />

        <CTASection />
        <ProductListingSection />

        <Footer />
    </main>
  )
}

export default index
