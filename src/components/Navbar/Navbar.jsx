import React from "react";
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">

     
      <div className="container flex justify-between items-center  ">
        <div className="  ">
          <a href="#" className="font-bold text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10"></img>Shopsy
          </a>
        </div>
        {/* search bar  */}
        <div className="flex items-center justify-center gap-4 ">
          <div className="group relative ">
            <input
              type="text"
              placeholder="search"
              className="w-[200px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 border group-hover:w-[300px] focus:outline-none focus:bottom-1 focus:border-primary "
            ></input>
            <IoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
         {/* order buttom */}
          <div className="">
            <button onClick={()=>{alert("Ordering not available yet")}}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full group flex items-center gap-3">
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <IoMdCart  className="text-xl text-white drop-shadow-sm cursor-pointer group-hover:flex-row "/>

            </button>

            {/* darkmode switch */}
          </div>
            <div>
              <Darkmode/>
            </div>
        </div>
      </div>
      </div>

      {/* Lower Navbar */}
      <div>Lower navbar</div>
    </div>
  );
};

export default Navbar;
