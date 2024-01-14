"use client";
import { motion } from 'framer-motion';
import { SiToyota, SiHonda, SiMazda, SiBmw, SiAudi, SiHyundai, SiMercedes   } from "react-icons/si";

export default function Makes() {
  return (
    <section className='xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center'>
      <div className='container mx-auto'>
        <div className='mb-12'>
          <h2 className='flex items-center justify-center font-bold text-2xl text-accent xl:pt-6'>
            Discover the Most Popular Cars Chosen by Our Customers
          </h2>
        </div>
        <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between text-slate-700'>
          <SiToyota className='w-[100px] h-[30px]'/>
          <SiHonda className='w-[100px] h-[30px]'/>
          <SiMazda className='w-[100px] h-[30px]'/>
          <SiBmw className='w-[100px] h-[30px]'/>
          <SiAudi className='w-[100px] h-[30px]'/>
          <SiHyundai className='w-[100px] h-[30px]'/>
          <SiMercedes className='w-[100px] h-[30px]'/>
        </div>
      </div>
    </section>
  )
}
