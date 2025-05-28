import React from "react";
import WomenImage from "../../assets/women.png";
import ShoppingImage from "../../assets/shopping.png";
import SaleImage from "../../assets/sale.png";
import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  const Imagelist = [
    {
      id: 1,
      img: WomenImage,
      title: "Upto 50% sales on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: ShoppingImage,
      title: "Upto 30% sales on all Men's Wear",
      description:
        "Who's lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: SaleImage,
      title: " Upto 70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'s there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className=" relative overflow-hidden min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8] "></div>

      {/* Hero section */}

      <div className="container ">
        <Slider {...settings}>
          {Imagelist.map((val, i) => {
            return (
              <div>
                <div className="grid grid-cols-2 ">
                  {/* text content section */}
                  <div className="flex flex-col justify-center  gap-4 text-left order-1 relative z-10 ">
                    <h1
                    data-aos='zoom-out'
                    data-aos-duration='500'
                    daoa-aos-once='true'
                     className="text-6xl font-bold ">{val.title}</h1>
                    <p
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='100'
                    className="text-sm">{val.description}</p>
                    <div>
                    <button
                    data-aos='fade-up'
                    data-aos-duration='650'
                    data-aos-delay='100'
                     className="bg-gradient-to-r from-primary to-secondary hover:scale-105 px-4 py-2 rounded-full duration-200 w-fit ">
                      Order Now
                    </button>
                     </div>
                  </div>
                  {/* image section */}
                  <div className="order-2">
                  <div className=" relative z-10">
                    <img
                      src={val.img}
                      alt=""
                      className="h-[380px] w-[380px] scale-125 object-contain mx-auto"
                    />
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
