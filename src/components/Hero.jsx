import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/Hero.css';

const Hero = () => {
  const swiperRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Direct paths - no helper function needed, works everywhere
  // Public folder assets are served from root in Vite/Netlify
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
    
    // Debug: Log image paths and verify they're correct
    console.log('Hero image paths:', heroSlides.map(s => s.bg));
    console.log('BASE_URL:', import.meta.env.BASE_URL);
    console.log('Current location:', window.location.href);
    
    // Verify images exist by checking if they load
    heroSlides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`✅ Hero image ${index + 1} verified:`, slide.bg);
      };
      img.onerror = () => {
        console.error(`❌ Hero image ${index + 1} NOT FOUND:`, slide.bg);
        console.error('Full URL would be:', new URL(slide.bg, window.location.origin).href);
      };
      img.src = slide.bg;
    });
    
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
                  console.log('✅ Image loaded successfully:', slide.bg);
                  console.log('Full image URL:', new URL(slide.bg, window.location.origin).href);
                  // Ensure image is visible after load
                  const img = document.querySelector(`img[src="${slide.bg}"]`);
                  if (img) {
                    img.style.opacity = '1';
                    img.style.visibility = 'visible';
                    img.style.display = 'block';
                  }
                }}
                onError={(e) => {
                  const attemptedUrl = e.target.src;
                  const fullUrl = new URL(slide.bg, window.location.origin).href;
                  console.error('❌ Image failed to load:', slide.bg);
                  console.error('Attempted path:', attemptedUrl);
                  console.error('Expected full URL:', fullUrl);
                  console.error('Current location:', window.location.href);
                  console.error('BASE_URL:', import.meta.env.BASE_URL);
                  console.error('Image element:', e.target);
                  
                  // Try to fix the path and reload
                  const correctedPath = slide.bg.startsWith('/') ? slide.bg : `/${slide.bg}`;
                  console.log('Trying corrected path:', correctedPath);
                  e.target.src = correctedPath;
                  
                  // Fallback gradient background if still fails
                  setTimeout(() => {
                    if (!e.target.complete || e.target.naturalHeight === 0) {
                      e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      e.target.style.display = 'block';
                      e.target.style.opacity = '1';
                      e.target.style.visibility = 'visible';
                    }
                  }, 1000);
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