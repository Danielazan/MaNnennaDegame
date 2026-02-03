// import { useState, useEffect } from 'react';
// import Hero from './Hero';
// import HeroTwo from './HeroTwo';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// function Slider() {  // Capitalized component name
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const slides = [Hero, HeroTwo];
//     const totalSlides = slides.length;

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % totalSlides);
//         }, 9000);

//         return () => clearInterval(interval);
//     }, [totalSlides]);

//     const goToPrevious = () => {
//         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     const goToNext = () => {
//         setCurrentIndex((prev) => (prev + 1) % totalSlides);
//     };

//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     return (
//         <div className="relative w-full min-h-screen overflow-hidden shadow-2xl ">
//             {/* Slides */}
//             <div
//                 className="flex w-full h-full transition-transform duration-700 ease-out "
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {slides.map((SlideComponent, index) => (
//                     <div
//                         key={index}
//                         className="min-w-full h-full flex-shrink-0"
//                     >
//                         <SlideComponent />
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Arrows */}
//             {/* <button
//                 onClick={goToPrevious}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
//                 aria-label="Previous slide"
//             >
//                 <ChevronLeft size={32} />
//             </button> */}

//             {/* <button
//                 onClick={goToNext}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
//                 aria-label="Next slide"
//             >
//                 <ChevronRight size={32} />
//             </button> */}

//             {/* Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`
//               w-3 h-3 rounded-full transition-all duration-300
//               ${currentIndex === index
//                                 ? 'bg-white scale-125 shadow-lg'
//                                 : 'bg-white/50 hover:bg-white/80'}
//             `}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>

//             {/* Optional: slide number */}
//             {/* <div className="absolute top-5 right-5 bg-black/40 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm z-10">
//                 {currentIndex + 1} / {totalSlides}
//             </div> */}
//         </div>
//     );
// }

// export default Slider;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CarouselSwiper({ slides = [] }) {
  // Handle empty or undefined slides
  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <p className="text-gray-500">No slides to display</p>
      </div>
    );
  }

  return (
    <Swiper
      modules={[ Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselSwiper;