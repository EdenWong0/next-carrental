"use client";
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaFax, FaSquareFacebook, FaInstagram, FaXTwitter  } from 'react-icons/fa6';
import Copyright from './Copyright';
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer className='pt-20 bg-white z-20'>
      <div className='container mx-auto mb-24'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
          <div className='flex flex-col flex-1 lg:justify-between gap-y-2 gap-x-5'>
            <Link to={'home'} smooth={true} spy={true} className='cursor-pointer'>
              <Image src={'/logo.png'} width={100} height={50} alt=''/>
              <h3 className='text-accent font-bold'><span className='text-red-500'>TheNorth</span>CarHub</h3>
            </Link>
            <div className='flex flex-col gap-y-4 font-semibold text-secondary'>
              <div className='flex items-center gap-x-1'>
                <FaPhone />
                <div>+1(437)981-9888</div>
              </div>
              <div className='flex items-center gap-x-1'>
                <FaFax />
                <div>+1(437)981-9777</div>
              </div>
              <div className='flex items-center gap-x-1'>
                <FaEnvelope />
                <div>contact@thenorthcarhub.ca</div>
              </div>
            </div>
            <div className='flex flex-row text-accent text-4xl gap-x-4 items-center'>
              <FaSquareFacebook />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
          <div className='flex-1 flex flex-col xl:items-center'>
            <div>
              <h3 className='h3 font-bold mb-8 text-accent uppercase'>Company</h3>
              <ul className='flex flex-col gap-y-4 font-semibold text-secondary'>
                <li><a href=''>About <span className='text-red-500'>TheNorth</span><span className='text-accent'>CarHub</span></a></li>
                <li><a href=''>News & Stories</a></li>
                <li><a href=''>Social Responsibility</a></li>
                <li><a href=''>Careers Opportunities</a></li>
                <li><a href=''>Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8 text-accent uppercase'>Working Hours</h3>
            <div className='flex flex-col gap-y-4 font-semibold text-secondary'>
              <div className='flex gap-x-2'>
                <div>Mon-Fri: </div>
                <div className='font-bold'>8:30 AM - 8:30 PM</div>
              </div>
              <div className='flex gap-x-2'>
                <div>Sat: </div>
                <div className='font-bold'>10:00 AM - 6:00 PM</div>
              </div>
              <div className='flex gap-x-2'>
                <div>Sun & Public Holiday: </div>
                <div className='font-bold'>Closed</div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8 text-accent uppercase'>Special</h3>
            <ul className='flex flex-col gap-y-4 font-semibold text-secondary'>
                <li><a href=''>All Specials</a></li>
                <li><a href=''>Last Specials</a></li>
                <li><a href=''>Email Sign-Up</a></li>
              </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  )
}
