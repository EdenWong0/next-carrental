import ReviewSlider from "./ReviewSlider";

export default function Reviews() {
  return (
    <section className='section flex items-center bg-[#b2b7c2]/10' id='reviews'>
      <div className='container mx-auto'>
        <div className='text-4xl text-center text-accent font-bold mb-12'>
          Recent reviews
        </div>
        <ReviewSlider />
      </div>
    </section>
  )
}
