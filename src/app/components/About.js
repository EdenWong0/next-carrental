"use client";

import Image from 'next/image';
import { MdOutlineMapsHomeWork, MdOutlineDirectionsCar } from 'react-icons/md';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { FaPerson } from "react-icons/fa6";


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section flex items-center bg-[#b2b7c2]/10' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:justify-between'>
          <div className='flex-1 mb-8 xl:mb-0'>
            <Image className='rounded-[20px]' src={'/images/about/bmw.jpg'} width={600} height={900} />
          </div>
          <div className='flex-1 flex items-center xl:justify-center'>
            <div className='xl:max-w-[517px]'>
              <h2 className='h2'>
                Embark on a Distinctive Journey with <span className='text-red-500'>TheNorth</span><span className='text-accent'>CarHub</span>
              </h2>
              <p className='mb-[42px] text-md font-semibold text-secondary'>
                Discover a new level of freedom and comfort on the road with us. <br />
                We offer a carefully curated fleet of vehicles, from stylish city cars to spacious SUVs,
                ensuring that every journey is not just a trip, but an experience.<br />
                With convenient hubs across Canada, we provide hassle-free rental solutions for every traveler.<br />
                Whether you're exploring the stunning landscapes, embarking on a business trip, or simply need temporary wheels, we have you covered.<br />
                Our commitment to excellence extends beyond our vehicles. <br />
                We pride ourselves on delivering personalized service, ensuring that your travel experience is seamless and enjoyable.<br />
                At <span className='text-red-500'>TheNorth</span><span className='text-accent'>CarHub</span>, we're not just renting cars; we're providing the key to memorable journeys.
              </p>
              <div className='flex items-center justify-center gap-x-8 mb-12'>
                <div className='flex flex-col w-[100px]'>
                  <MdOutlineDirectionsCar className='text-5xl text-accent'/>
                  <div className='text-xl font-blod mb-2 text-accent'>
                    {inView ? (
                      <CountUp start={0} end={200} duration={3} delay={1} />
                    ) : null} +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                      car types
                  </div>
                </div>
                <div className='flex flex-col w-[100px]'>
                  <FaPerson className='text-5xl text-accent'/>
                  <div className='text-xl font-blod mb-2 text-accent'>
                    {inView ? (
                      <CountUp start={0} end={1000} duration={3} delay={1} />
                    ) : null} +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                      customers
                  </div>
                </div>
                <div className='flex flex-col w-[100px]'>
                  <MdOutlineMapsHomeWork className='text-5xl text-accent'/>
                  <div className='text-xl font-blod mb-2 text-accent'>
                    {inView ? (
                      <CountUp start={0} end={120} duration={3} delay={1} />
                    ) : null} +
                  </div>
                  <div className='uppercase text-[13px] font-semibold text-secondary'>
                      rental outlets
                  </div>
                </div>
                <button className='hidden xl:block bg-accent hover:bg-accent-hover rounded-full w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]'>See all cars</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About