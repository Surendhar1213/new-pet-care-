import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/Hero.css';

// Import images
import hero2Img from '../assets/img/hero2.jpg';
import hero3Img from '../assets/img/hero3.jpg';
import hero4Img from '../assets/img/hero4.jpg';

const Hero = () => {
  const swiperRef = useRef(null);

  const heroSlides = [
    {
      bg: hero2Img,
      title: 'Reliable Dog Walking & Daily Exercise'
    },
    {
      bg: hero4Img,
      title: 'Safe House Sitting With Full-Time Care'
    },
    {
      bg: hero3Img,
      title: 'Drop-In Visits & Fun Doggy Day Care'
    },
  ];

  // Preload first image
  useEffect(() => {
    const img = new Image();
    img.src = hero2Img;
    img.onload = () => console.log('First image loaded');
  }, []);

  const goPrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const goNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  return (
    <div className="th-hero-wrapper hero-7" id="hero">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        className="hero-slider"
        onSwiper={(swiper) => {
          if (swiper.autoplay) {
            swiper.autoplay.start();
          }
        }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="th-hero-slide">
              <div 
                className="hero-bg-img"
                style={{
                  backgroundImage: `url(${slide.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                role="img"
                aria-label={slide.title}
              />
              <div className="hero-overlay"></div>
              <div className="hero-inner">
                <div className="container th-container2">
                  <div className="row gy-4 gx-40 align-items-end justify-content-center hero-content-row">
                    <div className="col-xxl-10 col-xl-10 col-lg-11">
                      <div className="hero-style7">
                        <h1 className="hero-title">{slide.title}</h1>
                        <div className="hero-button-wrapper">
                          <a href="#contact" className="th-btn th-btn-icon2">
                            Book a Stay <i className="far fa-long-arrow-right ms-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button 
        type="button"
        className="hero-nav-btn hero-prev"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <button 
        type="button"
        className="hero-nav-btn hero-next"
        onClick={goNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
};

export default Hero;