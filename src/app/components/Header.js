"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi"
import { SearchContext } from "../context/search";


export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: '(min-width: 1100px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      }else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      }else {
        setSearchActive(false);
      }
    };

    //add and remove event listener
    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  })
  
  return (
    <header className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-one py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
     <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between'>
      <div className='flex justify-between items-center px-6'>
        <Link to='home' smooth={desktopMode} spy={true} className='cursor-pointer'>
          <Image src={'/logo.png'} width={74} height={24} alt='logo' />
        </Link>
        <h3 className='text-accent font-bold text-xl py-2'><span className='text-red-500'>TheNorth</span>CarHub</h3>
        <div 
          onClick={() => setNav(!nav)}
          className='cursor-pointer xl:hidden'
        >
        {nav ? ( 
          <BiX className='text-4xl'/> 
          ) : ( 
          <BiMenuAltRight className='text-4xl'/>
        )}
        </div>
      </div>
      <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0 items-center justify-center' : 'max-h-0 xl:max-h-max'} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-6 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-300 text-center xl:text-left uppercase text-sm xl:text-[16px] xl:uppercase xl:px-24`}>
        <Link className='cursor-pointer' to='home' activeClass="active" smooth={desktopMode} spy={true} >
          Home
        </Link>
        <Link className='cursor-pointer' to='cars' activeClass="active" smooth={desktopMode} spy={true} >
          Cars
        </Link>
        <Link className='cursor-pointer' to='about' activeClass="active" smooth={desktopMode} spy={true} >
          About
        </Link>
        <Link className='cursor-pointer' to='whyus' activeClass="active" smooth={desktopMode} spy={true} >
          Why Us
        </Link>
        <Link className='cursor-pointer' to='reviews' activeClass="active" smooth={desktopMode} spy={true} >
          Reviews
        </Link>
        <Link className='cursor-pointer' to='contact' activeClass="active" smooth={desktopMode} spy={true} >
          Contact
        </Link>
        <Link className='cursor-pointer xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto' to='/' activeClass="active" smooth={desktopMode} spy={true} >
          Explore all cars
        </Link>
        <SearchMobile />
      </nav>
     </div>
    </header>
  )
}
