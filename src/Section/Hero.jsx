import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg"
import earbuds from "../assets/earbuds.jpg"
import dslr from "../assets/dslr.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out'
    });

    AOS.refresh();
  }, []);

  return (
    <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
      <Slider className='w-full' {...settings}>
        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center ' style={{ backgroundImage: `url(${dslr})` }}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-300 border rounded-lg border-yellow-300 px-6 text-xl'>Get Upto Discount 80% Off</h1>
            <h1 data-aos="zoom-in" data-aos-delay="50" className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]">DSLR 360 <br />Camera</h1>
            <h1 className='text whote text-2xl'>100% trusted<span className='text-yellow-300 font-semibold'>Electronic Gadgets  </span></h1>
            <button className='bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLECTION</button>
          </div>
        </div>
        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover  bg-center' style={{ backgroundImage: `url(${headset})` }}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-300 border rounded-lg border-yellow-300 px-6 text-xl'>Get Upto Discount 80% Off</h1>
            <h1 data-aos="zoom-in" data-aos-delay="50" className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]">Wireless <br />Headsets</h1>
            <h1 className='text whote text-2xl'>100% trusted<span className='text-yellow-300 font-semibold'>Electronic Gadgets  </span></h1>
            <button className='bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLECTION</button>
          </div>
        </div>
        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover  bg-center' style={{ backgroundImage: `url(${earbuds})` }}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-300 border rounded-lg border-yellow-300 px-6 text-xl'>Get Upto Discount 80% Off</h1>
            <h1 data-aos="zoom-in" data-aos-delay="50" className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]">Wireless <br />Earbuds</h1>
            <h1 className='text whote text-2xl'>100% trusted<span className='text-yellow-300 font-semibold'>Electronic Gadgets  </span></h1>
            <button className='bg-yellow-300 px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLECTION</button>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Hero
