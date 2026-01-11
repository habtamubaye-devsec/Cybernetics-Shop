import React, { useEffect } from 'react';
import payment from '../assets/payment.png';
import shipping from '../assets/shipping.png';
import refund from '../assets/return.png';
import gift from '../assets/gift.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className='w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10'>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
        <img src={shipping} alt="Shipping Icon" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'>Worldwide Shipping</h1>
        <p className='text-[17px] text-gray-500'>Fast delivery across the globe</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-2'>
        <img src={payment} alt="Payment Icon" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'>Secure Payment</h1>
        <p className='text-[17px] text-gray-500'>100% secure payment methods</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-2'>
        <img src={refund} alt="Refund Icon" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'>Easy Returns</h1>
        <p className='text-[17px] text-gray-500'>Hassle-free returns and refunds</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-2'>
        <img src={gift} alt="Gift Icon" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'>Gift Offers</h1>
        <p className='text-[17px] text-gray-500'>More shopping, more gifts</p>
      </div>
    </div>
  );
};

export default Service;
