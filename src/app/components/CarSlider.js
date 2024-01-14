"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { TbEngine, TbManualGearbox  } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { GiCarSeat, GiCarWheel  } from "react-icons/gi";


const cars =[
  {
    type: 'Hatchback',
    name: 'Ford Focus',
    price: 29,
    stars: 3.5,
    image: 'images/carSlider/car01.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front Wheel',
      },
    ],
  },
  {
    type: 'Sedan',
    name: 'Toyota Corolla',
    price: 25,
    stars: 5,
    image: 'images/carSlider/car02.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front Wheel',
      },
    ],
  },
  {
    type: 'SUV',
    name: 'Honda CR-V',
    price: 35,
    stars: 4.5,
    image: 'images/carSlider/car03.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Automatic',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front Wheel',
      },
    ],
  },
  {
    type: 'Convertible',
    name: 'Mazda MX-5',
    price: 32,
    stars: 4.6,
    image: 'images/carSlider/car01.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '2 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front Wheel',
      },
    ],
  },
];

export default function CarSlider() {
  return (
    <div 
      className='container mx-auto'
    >
      <Swiper 
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15}, 
          640: { slidesPerView: 2, spaceBetween: 32},
          768: { slidesPerView: 3, spaceBetween: 32},
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='max-w-[350px] mx-auto sm:mx-0 rounded-lg bg-white hover:bg-slate-300'>
                <Image src={car.image} width={380} height={280} alt=''/>
                <div className='flex justify-between'>
                  <div>
                    <div className='text-[13px] text-secondary uppercase'>{car.type}</div>
                    <h3 className='text-lg font-bold uppercase'>{car.name}</h3>
                    <h3 className='mb-10 text-accent font-semibold uppercase'>${car.price}/day</h3>
                  </div>
                  <div className='flex gap-x-2 text-yellow-400 h-max'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className='flex flex-col items-center'>
                        <div className='w-12 h-12 rounded-full flex justify-center items-center mb-2 bg-cyan-600'>
                          <Image src={item.icon} width={24} height={24} alt=''/>
                        </div>
                        <div className='text-[12px] uppercase'>{item.text}</div>
                      </div>
                    )
                  })}
                </div>
                <button className='btn btn-accent btn-lg w-full mb-6'>Details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}
