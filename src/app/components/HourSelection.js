"use client";
import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaArrowRightLong, FaRegClock } from "react-icons/fa6";


const hours = [
  '12:00 AM'
]

for (let i = 0; i <= 11; i++) {
  const period = i < 6 ? 'AM' : 'PM';
  const hourString = `${i * 2}:00 ${period}`;
  hours.push(hourString);
}

export default function HourSelection() {
  const [hour, setHour] = useState('12:00 AM');
  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
      <div className='relative flex-1'>
        <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center capitalize xl:items-start xl:pl-8 '>
          <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'>
                <FaRegClock className='text-accent'/>
                <div className='text-[15px] uppercase font-bold'>Select Hour</div>
          </div>
          <div className='flex items-center justify-center gap-x-2'>
            <div className='font-medium text-[13px] text-secondary xl:ml-6'>
              {hour}
            </div>
            <FaArrowRightLong className='text-accent text-[12px]'/>
            <div className='font-medium text-[13px] text-secondary'>
              {hour}
            </div>
          </div>
        </Menu.Button>

        <Menu.Items className='dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:translate-x-0 text-sm w-full bg-white max-w-[332px] py-6 rounded-[20px]'>
          {hours.map((hour, index) => {
            return (
              <div 
                onClick={() => setHour(hour)}
                className='bg-gray-100 cursor-pointer py-4 xl:pl-10 hover:bg-slate-500 text-[13px]'
                key={index}
              >
                {hour}
              </div>
            )
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}
