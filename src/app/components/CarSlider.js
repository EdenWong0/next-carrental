"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';



const cars =[
  {
    type: 'SUV',
    name: 'Honda CR-V',
    price: 36,
    stars: 5,
    image: '/images/carSlider/car02.jpeg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Automatic',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '7 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: 'I-4 2.0L',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'AWD',
      },
    ],
  },
  {
    type: 'Sedan',
    name: 'Honda Civic Type-R',
    price: 29,
    stars: 5,
    image: '/images/carSlider/car03.jpeg',
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
        text: 'FWD',
      },
    ],
  },
  {
    type: 'SUV',
    name: 'Tesla Model X',
    price: 55,
    stars: 5,
    image: '/images/carSlider/car01.png',
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
        text: 'EV',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: 'Electric',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'AWD',
      },
    ],
  },
  {
    type: 'Subcompact',
    name: 'Audi TT',
    price: 47,
    stars: 5,
    image: '/images/carSlider/car05.png',
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
        text: '2.0 L/121',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'AWD',
      },
    ],
  },
  {
    type: 'SUV',
    name: 'Volvo XC60 Plus',
    price: 25,
    stars: 5,
    image: '/images/carSlider/car06.jpeg',
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
        text: 'P4 MP 2.0L',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'AWD',
      },
    ],
  },
  {
    type: 'SUV',
    name: 'Mazda CX50 GT',
    price: 33,
    stars: 5,
    image: '/images/carSlider/car07.jpeg',
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
        text: 'Skyactiv-G 2.5 T',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'AWD',
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
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='text-xl h-[450px] xl:h-[620px]'
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
