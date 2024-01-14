"use client";
import Image from 'next/image';
import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../context/search";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion, easeInOut } from 'framer-motion'; 

export default function Hero() {
  const { searchActive } = useContext(SearchContext);

  const [text] = useTypewriter({
    words: [
    "Unbeatable Prices",
    "Luxury and Economy Cars for Rent",
    "Reliable",
    "Book Now for Special Deals",
    "Your Journey Starts Here",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  return (
    <section className='h-screen xl:h-[90vh] bg-[#b2b7c2]/10' id='home'>
      <div className='container mx-auto h-full xl:pt-10'>
        <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full'>
          <motion.div 
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'
          >
            <h1 className='h1'>
              Canada <span className='text-red-500'>No.1</span> Car Rental
            </h1>
            <h2 className='xl:text-[32px] text-accent xl:mb-10'>{text}</h2>
            <p className='descirption max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>
              Explore the beauty of the country with our unbeatable prices and a fleet of luxury and economy cars. Book now for special deals and make your travel experience memorable.
            </p>
            <div className='flex gap-x-3 justify-center xl:justify-start'>
              <button className='btn-cta'>
                <Image src={'/icons/buttons/google-play.svg'} width={100} height={50} alt='googleplay'/>
              </button>
              <button className='btn-cta'>
                <Image src={'/icons/buttons/app-store.svg'} width={100} height={50} alt='applestore'/>
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-24'
          >
            <Image src={'/images/hero/mazda.png'} alt='' width={800} height={1000} style={{objectFit:'contain'}} priority/>
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div 
          className='fixed top-[80px] z-10 w-full max-w-[1920px]'
        >
          <Search />
        </motion.div>
      ) : (
        <motion.div 
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='-mt-12 w-full max-w-[1300px] mx-auto'
        >
          <Search />
        </motion.div>
      )}
    </section>
  )
}
