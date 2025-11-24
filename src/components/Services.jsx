import React, { useState, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/Service.css';

const Services = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [key, setKey] = useState(Date.now());

  const services = [
    { img: '/assets/img/service/service_card_2_1.jpg', title: 'Pet Daycare', text: 'Pet Care' },
    { img: '/assets/img/service/service_card_2_2.jpg', title: 'Grooming Services', text: 'Veterinary Behaviourist' },
    { img: '/assets/img/service/service_card_2_3.jpg', title: 'Dental Checkup', text: 'Pet Dentistry' },
    { img: '/assets/img/service/service_card_2_4.jpg', title: 'Pet Boarding', text: 'Safe & Secure' },
    { img: '/assets/img/service/service_card_2_1.jpg', title: 'Pet Training', text: 'Expert Trainers' },
    { img: '/assets/img/service/service_card_2_2.jpg', title: 'Pet Spa', text: 'Relaxation & Care' }
  ];

  useEffect(() => {
    const handlePageShow = (e) => {
      if (e.persisted) {
        setKey(Date.now());
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.autoplay?.start();
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [swiperInstance]);

  useEffect(() => {
    return () => {
      if (swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.destroy(true, true);
      }
    };
  }, [swiperInstance]);

  const goPrev = useCallback(() => {
    if (swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.slidePrev();
    }
  }, [swiperInstance]);

  const goNext = useCallback(() => {
    if (swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.slideNext();
    }
  }, [swiperInstance]);

  return (
    <section className="service-section" id="service-sec">
      {/* Top Animated Paw Prints Background */}
      <div className="paw-prints-bg">
        <div className="paw-print paw-1">
          <img src="/assets/img/shape/shape1-23.png" alt="paw" />
        </div>
        <div className="paw-print paw-2">
          <img src="/assets/img/shape/shape1-24.png" alt="paw" />
        </div>
        <div className="paw-print paw-3">
          <img src="/assets/img/shape/shape1-25.png" alt="paw" />
        </div>
        <div className="paw-print paw-4">
          <img src="/assets/img/shape/shape1-26.png" alt="paw" />
        </div>
        <div className="paw-print paw-5">
          <img src="/assets/img/shape/shape1-27.png" alt="paw" />
        </div>
        <div className="paw-print paw-6">
          <img src="/assets/img/shape/shape1-28.png" alt="paw" />
        </div>
        <div className="paw-print paw-7">
          <img src="/assets/img/shape/shape1-29.png" alt="paw" />
        </div>
        <div className="paw-print paw-8">
          <img src="/assets/img/shape/shape1-30.png" alt="paw" />
        </div>
        <div className="paw-print paw-9">
          <img src="/assets/img/shape/shape1-31.png" alt="paw" />
        </div>
        <div className="paw-print paw-10">
          <img src="/assets/img/shape/shape1-32.png" alt="paw" />
        </div>
      </div>

      {/* Top Floating Pet Shapes - Dog & Cat */}
      <div className="floating-pet-shapes-top">
        <div className="floating-pet-top pet-top-1">
          <img src="/assets/img/shape/cat3-pagi-left.png" alt="pet" />
        </div>
        <div className="floating-pet-top pet-top-2">
          <img src="/assets/img/shape/cat3-pagi-right.png" alt="pet" />
        </div>
        <div className="floating-pet-top pet-top-3">
          <img src="/assets/img/shape/testi3-pagi-left.png" alt="pet" />
        </div>
        <div className="floating-pet-top pet-top-4">
          <img src="/assets/img/shape/testi3-pagi-right.png" alt="pet" />
        </div>
        <div className="floating-pet-top pet-top-5">
          <img src="/assets/img/shape/dogcat.jpg" alt="dog" />
        </div>
        <div className="floating-pet-top pet-top-6">
          <img src="/assets/img/shape/service-5-top.png" alt="shape" />
        </div>
      </div>

      {/* Top Additional Shape Animations */}
      <div className="top-shape-animations">
        <div className="top-shape shape-top-1">
          <img src="/assets/img/shape/shape1-1.png" alt="shape" />
        </div>
        <div className="top-shape shape-top-2">
          <img src="/assets/img/shape/shape1-2.png" alt="shape" />
        </div>
        <div className="top-shape shape-top-3">
          <img src="/assets/img/shape/shape1-3.png" alt="shape" />
        </div>
        <div className="top-shape shape-top-4">
          <img src="/assets/img/shape/shape1-4.png" alt="shape" />
        </div>
        <div className="top-shape shape-top-5">
          <img src="/assets/img/shape/shape1-5.png" alt="shape" />
        </div>
        <div className="top-shape shape-top-6">
          <img src="/assets/img/shape/shape1-6.png" alt="shape" />
        </div>
      </div>

      {/* Left Side Decorative Circle */}
      <div className="service-shape-left">
        <svg viewBox="0 0 300 300" className="circle-shape">
          <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(0,188,188,0.15)" strokeWidth="2"/>
          <circle cx="150" cy="150" r="115" fill="none" stroke="rgba(0,188,188,0.12)" strokeWidth="2"/>
          <circle cx="150" cy="150" r="130" fill="none" stroke="rgba(0,188,188,0.09)" strokeWidth="2"/>
          <circle cx="150" cy="150" r="145" fill="none" stroke="rgba(0,188,188,0.06)" strokeWidth="2"/>
        </svg>
      </div>

      {/* Right Side Shape */}
      <div className="service-shape-right">
        <img src="/assets/img/shape/service-5-top.png" alt="" />
      </div>


      <div className="container">
        {/* Section Header */}
        <div className="service-header">
          {/* Main Title - Our Services */}
          <h1 className="service-main-title">Our Services</h1>

          {/* Subtitle - Professional Message */}
          <h3 className="service-subtitle">
            Where Every Paw Finds a Home Away From Home
          </h3>

          {/* Description - Value Proposition */}
          <p className="service-description">
            Going on vacation? Business trip? Or just need a day off? Leave your furry family members 
            with us! Our certified pet care professionals provide a safe, loving, and comfortable 
            environment with 24/7 supervision, daily activities, and personalized attention. We treat 
            every pet like our own – because we know they're not just pets, they're family.
          </p>
        </div>

        {/* Navigation Buttons - LEFT SIDE */}
        <div className="service-nav-wrapper">
          <button 
            type="button"
            className="service-nav-btn prev-btn"
            onClick={goPrev}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            type="button"
            className="service-nav-btn next-btn"
            onClick={goNext}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="service-slider-wrapper">
          <Swiper
            key={key}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            speed={700}
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={1}
            observer={true}
            observeParents={true}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 15 },
              480: { slidesPerView: 1.5, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 18 },
              900: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 20 }
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setTimeout(() => {
                if (swiper && !swiper.destroyed) {
                  swiper.autoplay?.start();
                }
              }, 100);
            }}
            className="service-swiper"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={`service-${idx}`}>
                <div className="service-card" data-index={idx}>
                  <div className="service-card-inner">
                    <div className="service-img-wrapper">
                      <img 
                        src={service.img} 
                        alt={service.title}
                        className="service-img"
                        loading="eager"
                      />
                      <div className="service-img-overlay"></div>
                    </div>
                    <div className="service-overlay"></div>
                    <div className="service-content">
                      <div className="service-icon-wrapper">
                        <div className="service-icon">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-text">{service.text}</p>
                    </div>
                    <a href="#service-sec" className="service-arrow">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
                    <div className="service-shine"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Link */}
        <div className="service-bottom">
          <a href="#" className="service-link">
            View All Pet Care Services
            <svg className="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;