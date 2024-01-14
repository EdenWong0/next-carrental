"use client";
import CarSlider from "./CarSlider";
import Makes from "./Makes";

export default function Cars() {
  return (
    <section className='h-screen flex items-center' id='cars'>
      <div className='container mx-auto'>
        <Makes />
        <CarSlider />
      </div>
    </section>
  )
}
