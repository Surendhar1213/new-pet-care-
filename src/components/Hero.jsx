import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/Hero.css';

// Import images from src/assets
import hero2Img from '../assets/img/hero2.jpg';
import hero3Img from '../assets/img/hero3.jpg';
import hero4Img from '../assets/img/hero4.jpg';

const Hero = () => {
  const swiperRef = useRef(null);
  const [isReady, setIsReady] = useState(false);


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

  // Initialize slider properly
  useEffect(() => {
    setIsReady(true);
    
    // Force images to be visible after Swiper initializes
    const ensureImagesVisible = () => {
      setTimeout(() => {
        const activeSlide = document.querySelector('.hero-slider .swiper-slide-active');
        if (activeSlide) {
          const images = activeSlide.querySelectorAll('.hero-bg-img');
          images.forEach(img => {
            img.style.opacity = '1';
            img.style.visibility = 'visible';
            img.style.display = 'block';
          });
        }
      }, 200);
    };

    // Run after a short delay to ensure Swiper is initialized
    ensureImagesVisible();
    
    // Handle browser back/forward navigation
    const handlePageShow = (e) => {
      if (e.persisted) {
        setTimeout(() => {
          if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.autoplay.start();
          }
          ensureImagesVisible();
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
          // Ensure images are visible when slide changes
          setTimeout(() => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide) {
              const images = activeSlide.querySelectorAll('.hero-bg-img');
              images.forEach(img => {
                img.style.opacity = '1';
                img.style.visibility = 'visible';
                img.style.display = 'block';
              });
            }
          }, 50);
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper && swiper.autoplay) {
              swiper.autoplay.start();
            }
            // Ensure images are visible after Swiper initializes
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide) {
              const images = activeSlide.querySelectorAll('.hero-bg-img');
              images.forEach(img => {
                img.style.opacity = '1';
                img.style.visibility = 'visible';
                img.style.display = 'block';
              });
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
                style={{
                  opacity: 1,
                  visibility: 'visible',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  zIndex: 0
                }}
                onLoad={() => {
                  // Ensure image is visible after load
                  const img = document.querySelector(`img[src="${slide.bg}"]`);
                  if (img) {
                    img.style.opacity = '1';
                    img.style.visibility = 'visible';
                    img.style.display = 'block';
                  }
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