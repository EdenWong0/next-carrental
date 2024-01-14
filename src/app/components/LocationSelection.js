"use client";
import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const locations = [
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Quebec City",
  "Winnipeg",
  "Hamilton",
  "London",
  "Victoria",
  "Halifax",
  "Saskatoon",
  "Regina",
  "St. John's",
  "Kelowna",
  "Thunder Bay",
  "Moncton",
  "Fredericton",
  "Charlottetown",
  "Whitehorse",
  "Yellowknife",
  "Iqaluit",
];

export default function LocationSelection() {
  const [location, setLocation] = useState('Select Location');

  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
      <div className='relative flex-1'>
        <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center capitalize xl:items-start xl:pl-8 '>
          <div className='w-full h-16 xl:h-full flex justify-center xl:justify-start'>
            <div className='flex flex-col justify-center'>
              <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'>
                <FaMapMarkerAlt className='text-accent'/>
                <div className='text-[15px] uppercase font-bold'>Select pick up location</div>
              </div>
              <div className='uppercase font-semibold text-[13px] text-secondary text-center xl:ml-6 xl:text-left'>{location}</div>
            </div>
          </div>
        </Menu.Button>

        <Menu.Items className='dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[20px]'>
          <div className='menu-list font-bold'>
            {locations.map((city, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-gray-100 cursor-pointer py-4 xl:pl-10 hover:bg-slate-500 text-[13px] uppercase' : ''
                    } menu-item`}
                    onClick={() => setLocation(city)}
                  >
                    {city}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
}
