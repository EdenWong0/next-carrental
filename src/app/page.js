import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";


export default function Home() {
  return (
    <main className='max-w-[1920px] bg-white mx-auto relateive overflow-hidden'>
      <Header />
      <Hero />
      <Cars />
      <About />
      <WhyUs />
      <Reviews />
      <Footer />
      <BackToTopBtn />
      {/*<div className="h-[800px]">
      </div>*/}
    </main>
  )
}
