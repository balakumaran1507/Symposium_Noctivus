import { FiDownload } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Brochure = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 10;
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const threshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > threshold) nextSlide();
    else if (diff < -threshold) prevSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slides = [
    { src: "/1.jpg", alt: "Brochure Page 1" },
    { src: "/2.jpg", alt: "Brochure Page 2" },
    { src: "/3.jpg", alt: "Brochure Page 3" },
    { src: "/4.jpg", alt: "Brochure Page 4" },
    { src: "/5.jpg", alt: "Brochure Page 5" },
    { src: "/6.jpg", alt: "Brochure Page 6" },
    { src: "/7.jpg", alt: "Brochure Page 7" },
    { src: "/8.jpg", alt: "Brochure Page 8" },
    { src: "/9.png", alt: "Brochure Page 9" },
    { src: "/10.png", alt: "Brochure Page 10" },
  ];
  return (
    <div className="flex flex-col items-center px-10 md:px-20 lg:px-32 pt-16 w-full">
      <div className="w-full font-funnel text-blue-50 flex flex-col items-center">
        <p className="text-sm font-funnel text-center pt-20 pb-10">BROCHURES</p>
        <hr className="border-t border-white/20 w-full mb-6" />

        {/* Carousel */}
        <div
          className="relative w-full overflow-hidden rounded-xl h-[400px] lg:h-[550px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slide Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out w-full h-full"
            style={{
              width: `${100 * totalSlides}%`,
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10"
          >
            <IoChevronBack className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10"
          >
            <IoChevronForward className="text-xl" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[5px] h-[5px] rounded-full ease-in-out duration-500 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Download Button */}
        <a
          href="/Noctivus25.pdf"
          download="Noctivus25.pdf"
          className="mt-6 inline-flex text-sm items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/20 border border-white/20 text-white/70 rounded-lg lg:w-fit w-full justify-center text-md transition-all duration-300"
        >
          <FiDownload size={18} className="text-emerald-400" />
          DOWNLOAD BROCHURE (OD)
        </a>
      </div>
    </div>
  );
};

export default Brochure;
