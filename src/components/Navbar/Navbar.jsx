import React from "react";
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import Darkmode from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const dropdowmmenu = [
    {
      id: 1,
      title: "trending products",
      path: "/trendingproducts",
    },
    {
      id: 2,
      title: "best sellings",
      path: "/best sellings",
    },
    {
      id: 1,
      title: "top rated",
      path: "/top rated",
    },
  ];

  const navmenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "top rated",
      path: "/toprated",
    },
    {
      id: 3,
      title: "Kids wear",
      path: "/kidswear",
    },
    {
      id: 4,
      title: "mens wear",
      path: "/menswear",
    },
    {
      id: 5,
      title: "electronics",
      path: "/electronics",
    },
  ];
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
                className="w-[200px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 border group-hover:w-[300px] focus:outline-none focus:bottom-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
              ></input>
              <IoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order buttom */}
            <div className="">
              <button
                onClick={() => {
                  alert("Ordering not available yet");
                }}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full group flex items-center gap-3"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <IoMdCart className="text-xl text-white drop-shadow-sm cursor-pointer group-hover:flex-row " />
              </button>
            </div>

            {/* darkmode switch */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center ">
        <ul className="sm:flex hidden gap-4  ">
          {navmenu.map((val, i) => {
            return (
              <li key={val.id}>
                <a
                  href={val.path}
                  className="capitalize inline-block px-4 hover:text-primary duration-200 py-2"
                >
                  {val.title}
                </a>
              </li>
            );
          })}

          {/* Simple dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="capitalize flex items-center gap-[2px] py-2 "
            >
              trending products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 " />
            </a>
            <div className="absolute z-[999] hidden group-hover:block bg-white w-[200px] rounded-md p-2 text-black shadow-md ">
              <ul>
                {dropdowmmenu.map((val, i) => {
                  return (
                    <li key={val.id}>
                      <a
                        href={val.path}
                        className="capitalize inline-block rounded-md w-full p-2 hover:bg-primary/20 dark:hover:bg-[#705227] dark:hover:text-white"
                      >
                        {val.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
