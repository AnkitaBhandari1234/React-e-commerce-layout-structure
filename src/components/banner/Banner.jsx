import React from "react";
import WomenImg from "../../assets/banner.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";



const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos='zoom-in'>
            <img src={WomenImg}
            className="max-w-[400px] h-[350px] object-cover drop-shadow-[-10px_10px_20px_rgba(0,0,0,1)] w-full  mx-auto"/>
          </div>
          {/* text details section */}

          <div className="flex flex-col gap-6 justify-start  h-full">
            <h1 className="text-3xl font-bold dark:text-white">Winter Sale upto 50% Off</h1>
            <p className="text-gray-500 text-sm tracking-wide leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
            <div className="flex flex-col gap-5 dark:text-white">
                <div data-aos='fade-up' className="flex items-center gap-3 ">
                 <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-700" />
                 <p>Quality Products</p>
                </div>
                <div data-aos='fade-up' className="flex items-center gap-4">
                 <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-700" />
                 <p>Fast Delivery</p>
                </div>
                <div data-aos='fade-up' className="flex items-center gap-4">
                 <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-700" />
                 <p>Easy Payment method</p>
                </div>
                <div data-aos='fade-up' className="flex items-center gap-4">
                 <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-700" />
                 <p>Get Offers</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
