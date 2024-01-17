"use client";

import Image from 'next/image';
import { MdHandshake, MdKey  } from 'react-icons/md';
import { FaThumbsUp } from "react-icons/fa6";



export default function WhyUs() {
  return (
    <section className='section flex items-center bg-white' id='whyus'>
      <div className='container mx-auto'>
        <h2 className='h2 text-center text-accent mb-10'>
          Your Journey, Our Commitment
        </h2>
        <p className='max-w-[680px] text-center mx-auto mb-10 font-semibold text-slate-500'>
          Elevate your journey with{" "}
          <span className='text-red-500'>TheNorth</span>
          <span className='text-accent'>CarHub</span>. <br />
          We stand out for more than just our vehicles; we offer an unparalleled experience designed with you in mind.
        </p>
        <div className='flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]'>
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdKey className='text-[50px] text-accent mb-4'/>
            <h3 className='h3 capitalize'>
              Simply, Easily, Quickly
            </h3>
            <p className='hidden xl:flex'>
              Our streamlined process ensures a simple, easy, and quick car rental experience. From selecting your preferred vehicle to hitting the road swiftly, we prioritize making your journey hassle-free.
            </p>
          </div>
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <FaThumbsUp className='text-[50px] text-accent mb-4'/>
            <h3 className='h3 capitalize'>
              Well-maintained Luxuary and Economy vehicles
            </h3>
            <p className='hidden xl:flex'>
              Explore the road in style with our meticulously maintained fleet of luxury and economy vehicles. Our commitment to excellence ensures that every car in our collection meets the highest standards of comfort, safety, and performance. Choose from a range of options, each designed to enhance your travel experience.
            </p>
          </div>
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdHandshake className='text-[50px] text-accent mb-4'/>
            <h3 className='h3 capitalize'>
              flexible service and unbeatable price
            </h3>
            <p className='hidden xl:flex'>
              Experience unmatched flexibility and affordability with our car rental services. We pride ourselves on offering a service tailored to your needs. Whether you require a vehicle for a short trip or an extended adventure, our unbeatable prices and flexible options ensure that you get the most value from your rental experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
