
import { useEffect } from 'react';
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Product from './components/products/Product'
import AOS from 'aos';
import "aos/dist/aos.css";
import Topproduct from './components/topproducts/Topproduct';

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
    
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <Topproduct/>
    </div>
    </>
  )
}

export default App
