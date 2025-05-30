import React from 'react'
import Banner from '../../assets/orange-pattern.png'
const  BannerImg= {
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"center",
    backgroungRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}

const Subscribe = () => {
  return (
    <div data-aos='zoom-in' className='text-white mb-20 ' style={BannerImg}>
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl text-center font-semibold'>Get Notified About New Products</h1>
                <input data-aos="fade-up" type='email' placeholder='Enter your email'
                className='w-full p-3 '/>
            </div>
        </div>
        
    </div>
  )
}

export default Subscribe