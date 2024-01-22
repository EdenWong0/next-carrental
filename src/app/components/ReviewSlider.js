"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FaComment } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { MdVerified } from "react-icons/md";

const ReviewDara = [
  {
    message: 'They truly exceeded my expectations and made my car rental experience a delight',
    avatar: '/images/review/avatar.jpg',
    name: 'Sam Jones',
    type: 'Mazda 3 GT 2018'
  },
  {
    message: 'Outstanding experience! The Toyota RAV4 2022 exceeded my expectations. Clean, well-maintained, and packed with features. The team at TheNorthCarHub made my journey truly enjoyable.',
    avatar: '/images/review/avatar.jpg',
    name: 'Sam Jones',
    type: 'Toyota RAV4 2022'
  },
  {
    message: 'Top-notch service! The vehicle options are diverse, and the rental process is straightforward. I appreciated the personalized attention to detail. Will recommend to friends and family!',
    avatar: '/images/review/avatar.jpg',
    name: 'Linda Rodriguez',
    type: 'BMW x5 2024'
  },
  {
    message: 'Smooth ride, excellent customer service! The team at TheNorthCarHub went above and beyond to ensure a hassle-free experience. The Honda Civic 2020 was a joy to drive.',
    avatar: '/images/review/avatar.jpg',
    name: 'Robert Davis',
    type: 'Honda Civic 2020'
  },
  {
    message: 'Fantastic rental experience! The Toyota RAV4 2022 provided safety and comfort for our family trip. Competitive prices and outstanding customer service. Highly recommended!',
    avatar: '/images/review/avatar.jpg',
    name: 'Amanda Foster',
    type: 'Honda CR-V 2023'
  },
]

export default function ReviewSlider() {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='text-xl h-[450px] xl:h-[580px]'
      >
        {ReviewDara.map((person, index) => {
          const { message, avatar, name, type } = person;
          return (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center text-center'>
              <FaComment className='text-7xl text-accent mb-6' />
              <div className='text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium'>
                "{message}"
              </div>
              <Image 
                src={avatar} 
                width={64} 
                height={64} 
                alt='' 
                className='mb-4 rounded-full'
              />
              <MdVerified className='text-accent'/>
              <div className='text-lg font-bold'>
                {name}
              </div>
              <div className='text-md text-secondary'>
                {type}
              </div>
              <div className='flex gap-x-2 text-yellow-400 h-max'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}
