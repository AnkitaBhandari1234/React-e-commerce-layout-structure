import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const Topproduct = () => {
  const productData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ];
  return (
    <div>
      <div className="container h-[500px] ">
        {/* header section */}
        <div className=" mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary ">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque
            ut nostrum tempora. Lorem, ipsum.
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-3 items-center gap-20">
          {productData.map((val, i) => {
            return (
              <div data-aos='zoom-in' className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
               hover:text-white relative shadow-xl duration-300 group max-w-[300px]">

                {/* image section */}
                <div className="h-[100px]">
                <img src={val.img} alt=""
                className="max-w-[140px]  block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"/>
                </div>
                {/* details section */}
                

                <div className="p-4 text-center">
                  {/* star rating */}
                  <div className="w-full flex gap-1 items-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  

                    </div>
                    <h1 className="text-xl font-bold">{val.title}</h1>
                    <p className="text-sm text-gray-400 group-hover:text-white duration-300 line-clamp-2">{val.description}</p>
                    <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-primary mt-4">
                               Order Now
                    </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topproduct;
