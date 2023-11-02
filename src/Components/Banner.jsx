import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import img from "../assets/profile.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Banner = () => {

  useEffect(()=> {
    AOS.init({duration: 750})
  },[])


  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row 
      flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal capitalize">
          Hi! I am a <span className="text-blue-500">Backend developed</span>
        </h1>
        <p  data-aos="fade-left" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, amet!
          Quam repellat tempora nostrum nulla sint maxime quae ex eos rem minima
          magni voluptate odio dolor alias, modi atque dolorum.
        </p>
        <div className="flex items-center justify-center">
          <div className="flex space-x-2">
            <a
              href=""
              className="text-blue-600 hover:text-blue-500 rounded-full glow p-2"
            >
              <AiFillGithub className="text-[28px]" />
            </a>

            <a
              href=""
              className="text-blue-600 hover:text-blue-500 rounded-full glow p-2"
            >
              <FaLinkedinIn className="text-[28px]" />
            </a>

            <a
              href=""
              className="text-blue-600 hover:text-blue-500 rounded-full glow p-2"
            >
              <FiTwitter className="text-[28px]" />
            </a>

            <a
              href=""
              className="text-blue-600 hover:text-blue-500 rounded-full glow p-2"
            >
              <FaInstagram className="text-[28px]" />
            </a>           
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up" 
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-blue-500 
        img_glow"
        alt=""
      />
    </div>
  );
};
export default Banner;
