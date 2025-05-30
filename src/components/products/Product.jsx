import React from "react";
import Img1 from "../../assets/women1.png";
import Img2 from "../../assets/women2.png";
import Img3 from "../../assets/women3.png";
import Img4 from "../../assets/women4.png";
import { TiStarFullOutline } from "react-icons/ti";


const Product = () => {
  const productcard = [
    {
      id: 1,
      img: Img1,
      name: "Women Ethnic",
      color: "white",
      rating: 5.0,
      aosdelay:0,
    },
    {
      id: 2,
      img: Img2,
      name: "Women western",
      color: "red",
      rating: 4.5,
      aosdelay:200,
    },
    {
      id: 3,
      img: Img4,
      name: "Printed T-shirt",
      color: "Yellow",
      rating: 4.4,
      aosdelay:300,
    },
    {
      id: 4,
      img: Img2,
      name: "Fashin T-Shirt",
      color: "Pink",
      rating: 4.5,
      aosdelay:400,
    },
    {
      id: 5,
      img: Img3,
      name: "Goggles",
      color: "brown",
      rating: 4.7,
      aosdelay:500,
    },
  ];
  return (
    <div className=" mt-14 mb-12 ">
      <div className="container">
        {/* Header Section */}
        <div className="text-center max-w-[600px] mb-10 mx-auto">
          <p  data-aos='fade-up' className="text-sm text-primary ">
            
            Top Sellings Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">Products</h1>
          <p data-aos='fade-up' className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem corporis Lorem, ipsum dolor. .
          </p>
        </div>
        {/* Body Section */}
        <div className=" ">
          <div className="grid grid-cols-5 items-center justify-center gap-16  ">
            {/* Card Section */}
            {productcard.map((val, i) => {
              return <div data-aos="fade-up"
                      data-aos-delay={val.aosdelay}
                      key={val.id}>

                    <img src={val.img} alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"/>
                    <div>
                        
                    <h1 className="mt-3 font-semibold dark:text-white">{val.name}</h1>
                    <p className="text-sm text-gray-400 ">{val.color}</p>
                    <div className=" flex items-center gap-1">
                        <TiStarFullOutline  className="text-yellow-400"/>
                        <span className="dark:text-white">{val.rating}</span>


                        </div>
                    </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
