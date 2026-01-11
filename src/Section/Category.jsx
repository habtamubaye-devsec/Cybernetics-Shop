import React, { useEffect } from 'react'
import cart1 from '../assets/cat1.jpg'
import cart2 from '../assets/cat2.jpg'
import cart3 from '../assets/cat3.jpg'
import cart4 from '../assets/cat4.jpg'
import cart5 from '../assets/cat5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Category = () => {

  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out'
      });
  
      AOS.refresh();
    }, []);

  return (
    <div id='category' className='w-full bg-gray-100 lg:px-30 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
      <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[15%] w-full flex flex-col justify-center
      lg:items-start items-center gap-[20px]'>
        <h1 className='text-purple-700 text-xl font-semibold text-center'>Favorite item</h1>
        <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>Popular Category</h1>
        <button className='bg-purple-700 hover:bg-yellow-300 text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]'>VIEW ALL</button>
      </div>

      <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10'>
        <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-6'>
          <img src={cart1} alt="" className='rounded-full cursor-pointer' />
          <h1 className='text-black text-xl font-semibold hover:text-purple-700 cursor-pointer '>Portable Speaker</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6'>
          <img src={cart2} alt="" className='rounded-full cursor-pointer' />
          <h1 className='text-black text-xl font-semibold hover:text-purple-700 cursor-pointer '>Portable Speaker</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-6'>
          <img src={cart3} alt="" className='rounded-full cursor-pointer' />
          <h1 className='text-black text-xl font-semibold hover:text-purple-700 cursor-pointer '>Portable Speaker</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-6'>
          <img src={cart4} alt="" className='rounded-full cursor-pointer' />
          <h1 className='text-black text-xl font-semibold hover:text-purple-700 cursor-pointer '>Portable Speaker</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" className='flex flex-col justify-center items-center gap-6'>
          <img src={cart5} alt="" className='rounded-full cursor-pointer ' />
          <h1 className='text-black text-xl font-semibold hover:text-purple-700 cursor-pointer '>Portable Speaker</h1>
        </div>
      </div>
    </div>
  )
}

export default Category
