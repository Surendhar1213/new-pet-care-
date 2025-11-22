import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  const testimonials = [
    {
      text: '"Our dog Max absolutely loves his stays here – the moment we arrive he runs straight inside with his tail wagging in pure excitement which says more than words ever could!"',
      name: 'Andra Ahumada',
      role: 'Care Tacker.',
      img: '/assets/img/testimonial/testi1-1.jpg'
    },
    {
      text: '"Our dog Max absolutely loves his stays here – the moment we arrive he runs straight inside with his tail wagging in pure excitement which says more than words ever could!"',
      name: 'Mary Douglas',
      role: 'Pet Shop Inc.',
      img: '/assets/img/testimonial/testi1-3.jpg'
    }
  ];

  return (
    <section className="testi-area-7 space overflow-hidden" id="testimonial-sec" style={{ backgroundImage: 'url(/assets/img/bg/testi7-bg.png)' }}>
      {/* Additional Dog & Cat Animations */}
      <div className="testi-animations">
        {/* Left Side - Dog Images */}
        <div className="testi-pet-shape testi-dog-1">
          <img src="/assets/img/shape/testi3-pagi-left.png" alt="dog" />
        </div>
        <div className="testi-pet-shape testi-dog-2">
          <img src="/assets/img/shape/testi3-pagi-left.png" alt="dog" />
        </div>
        <div className="testi-float-shape testi-shape-left-1">
          <img src="/assets/img/shape/shape1-29.png" alt="shape" />
        </div>
        <div className="testi-float-shape testi-shape-left-2">
          <img src="/assets/img/shape/shape1-30.png" alt="shape" />
        </div>
        
        {/* Right Side - Cat Images */}
        <div className="testi-pet-shape testi-cat-1">
          <img src="/assets/img/shape/cat3-pagi-right.png" alt="cat" />
        </div>
        <div className="testi-pet-shape testi-cat-2">
          <img src="/assets/img/shape/cat3-pagi-left.png" alt="cat" />
        </div>
        <div className="testi-float-shape testi-shape-right-1">
          <img src="/assets/img/shape/shape1-31.png" alt="shape" />
        </div>
        <div className="testi-float-shape testi-shape-right-2">
          <img src="/assets/img/shape/shape1-32.png" alt="shape" />
        </div>
      </div>

      <div className="shape-mockup movingX d-xl-block d-none" data-top="0%" data-right="1%">
        <img src="/assets/img/shape/shape1-88.png" alt="img" />
      </div>
      <div className="shape-mockup testimonial-7-1 d-md-block d-none" data-top="32%" data-left="11%">
        <img src="/assets/img/testimonial/testimonial-7-1.png" alt="img" />
      </div>
      <div className="shape-mockup testimonial-7-2 d-md-block d-none" data-top="32%" data-right="11%">
        <img src="/assets/img/testimonial/testimonial-7-2.png" alt="img" />
      </div>
      <div className="shape-mockup testimonial-7-3 d-md-block d-none" data-bottom="15%" data-left="5%">
        <img src="/assets/img/testimonial/testimonial-7-3.png" alt="img" />
      </div>
      <div className="shape-mockup testimonial-7-4 d-md-block d-none" data-bottom="14%" data-right="1%">
        <img src="/assets/img/testimonial/testimonial-7-4.png" alt="img" />
      </div>
      <div className="container th-container2">
        <div className="row justify-content-center mb-30">
          <div className="col-xl-6 col-lg-7">
            <div className="title-area text-center mb-2">
              <span className="sub-title subtitle-line-4 text-anim" data-cue="slideInUp">
                <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" /> Testimonial
              </span>
              <h2 className="sec-title text-anim2" data-cue="slideInLeft" data-delay="300">Hear from Pet Parents</h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 align-items-center justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="testi-wrap7" data-cue="slideInUp">
              <div className="testi7-quote">
                <img src="/assets/img/shape/testi7-quote.png" alt="" />
              </div>
              <Swiper
                id="testiSlide7"
                modules={[Navigation]}
                navigation={{
                  prevEl: '.testi-prev',
                  nextEl: '.testi-next'
                }}
                className="th-slider testi-slider3"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testi-card style4" data-cue="slideInUp">
                      <div className="testi-card_review">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <p className="box-text">{testimonial.text}</p>
                      <div className="testi-card-profile">
                        <div className="testi-card-avater">
                          <img src={testimonial.img} alt="img" />
                        </div>
                        <div className="testi-card-profile-detaile">
                          <h3 className="box-title">{testimonial.name}</h3>
                          <p className="box-desig">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="slider-arrow style-border2 slider-prev testi-prev">
                <i className="far fa-arrow-left"></i>
              </button>
              <button className="slider-arrow style-border2 slider-next testi-next">
                <i className="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

