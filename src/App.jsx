
import { useEffect } from 'react';
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Product from './components/products/Product'
import AOS from 'aos';
import "aos/dist/aos.css";
import Topproduct from './components/topproducts/Topproduct';
import Banner from './components/banner/Banner';
import Subscribe from './components/subscribe/Subscribe';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';

function App() {
  useEffect(() => {
        AOS.init({
          offset:100,
          duration:800,
          easing:'ease-in-sine',
          delay:100,

        });
        AOS.refresh();
      }, [])
 

  return (
    <>
    
    <div className=' bg-white dark:bg-[#111827] duration-300'>
      <Navbar/>
      <Hero/>
      <Product/>
      <Topproduct/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonial/>
      <Footer/>
    </div>
    </>
  )
}

export default App
