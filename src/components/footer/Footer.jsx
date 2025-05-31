import React from "react";
import Banner from "../../assets/footer-pattern.png";
import footerLogo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";





const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgrounfRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className=" text-white" style={BannerImg}>
      <div className="container">
        <div data-aos='zoom-in' className="grid grid-cols-3 pt-5 pb-44  ">
          {/* Company details */}
          <div className="pt-8 px-4">
            <h1 className="flex items-center text-3xl font-bold gap-3 mb-3">
              <img src={footerLogo} alt="" className="max-w-[50px] h-18" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iusto eos sed optio eius accusantium?
            </p>
          </div>

          {/* Footer Links  */}
          <div className=" grid grid-cols-2 gap-4 ">
            {/* important links */}
          
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((val, i) => {
                    return (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={val.title}
                      >
                        <span>{val.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            
            
              {/* links */}
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify mb-3"> Links</h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((val, i) => {
                    return (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={val.title}
                      >
                        <span>{val.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            
          </div>
          {/* social links */}
          <div>
            <div className="flex gap-3  items-center mt-6 ">

            <a href="#">
             <FaInstagram className="text-3xl" />

            </a>
            <a href="#">
             <FaFacebook className="text-3xl" />


            </a>
            <a href="#">
             <FaLinkedin className="text-3xl" />


            </a>
            </div>
            <div className="space-y-2 mt-6">
                <div className="flex items-center gap-3">
                    <FaLocationArrow/>
                    <span>Noida, Uttar Pradesh</span>
                    </div>
                <div className="flex items-center gap-3">
                    <FaMobileAlt/>
                    <span>+91 123456789</span>
                    </div>
            </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
