import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/Hero.css';

const Hero = () => {
  const swiperRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const heroSlides = [
    {
      bg: '/assets/img/hero2.jpg',
      title: 'Reliable Dog Walking & Daily Exercise'
    },
    {
      bg: '/assets/img/hero4.jpg',
      title: 'Safe House Sitting With Full-Time Care'
    },
    {
      bg: '/assets/img/hero3.jpg',
      title: 'Drop-In Visits & Fun Doggy Day Care'
    },
  ];

  // Initialize slider properly
  useEffect(() => {
    setIsReady(true);
    
    // Handle browser back/forward navigation
    const handlePageShow = (e) => {
      if (e.persisted) {
        setTimeout(() => {
          if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.autoplay.start();
          }
        }, 100);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // Navigation handlers
  const goPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  if (!isReady) return null;

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
          waitForTransition: true,
        }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        className="hero-slider"
        watchSlidesProgress={true}
        onSlideChange={(swiper) => {
          if (swiper.autoplay) {
            swiper.autoplay.start();
          }
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper && swiper.autoplay) {
              swiper.autoplay.start();
            }
          }, 100);
        }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="th-hero-slide">
              <img 
                src={slide.bg} 
                alt={slide.title}
                className="hero-bg-img"
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  console.error('Image failed to load:', slide.bg);
                  e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }}
              />
              <div className="hero-overlay"></div>
              <div className="hero-inner">
                <div className="container th-container2">
                  <div className="row gy-4 gx-40 align-items-end justify-content-center hero-content-row">
                    <div className="col-xxl-10 col-xl-10 col-lg-11">
                      <div className="hero-style7">
                        <h1 className="hero-title">{slide.title}</h1>
                        <div className="hero-button-wrapper">
                          <a href="#" className="th-btn th-btn-icon2">
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