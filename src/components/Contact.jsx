import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const dateInputRef = useRef(null);

  useEffect(() => {
    // Set current date when component mounts
    if (dateInputRef.current) {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const currentDate = `${year}-${month}-${day}`;
      dateInputRef.current.value = currentDate;
    }
  }, []);

  return (
    <div className="space overflow-hidden contact-area-0 position-relative z-index-common" id="contact-sec">
      {/* Top Animated Paw Prints Background */}
      <div className="contact-paw-prints-bg">
        <div className="contact-paw-print contact-paw-1">
          <img src="/assets/img/shape/shape1-33.png" alt="paw" />
        </div>
        <div className="contact-paw-print contact-paw-2">
          <img src="/assets/img/shape/shape1-34.png" alt="paw" />
        </div>
        <div className="contact-paw-print contact-paw-3">
          <img src="/assets/img/shape/shape1-35.png" alt="paw" />
        </div>
        <div className="contact-paw-print contact-paw-4">
          <img src="/assets/img/shape/shape1-36.png" alt="paw" />
        </div>
        <div className="contact-paw-print contact-paw-5">
          <img src="/assets/img/shape/shape1-37.png" alt="paw" />
        </div>
        <div className="contact-paw-print contact-paw-6">
          <img src="/assets/img/shape/shape1-39.png" alt="paw" />
        </div>
        <div className="contact-paw-print contact-paw-7">
          <img src="/assets/img/shape/shape1-40.png" alt="paw" />
        </div>
        <div className="contact-paw-print contact-paw-8">
          <img src="/assets/img/shape/shape1-41.png" alt="paw" />
        </div>
      </div>

      {/* Top Floating Pet Shapes - Dog & Cat */}
      <div className="contact-floating-pet-shapes-top">
        <div className="contact-floating-pet-top contact-pet-top-1">
          <img src="/assets/img/shape/cat3-pagi-left.png" alt="pet" />
        </div>
        <div className="contact-floating-pet-top contact-pet-top-2">
          <img src="/assets/img/shape/cat3-pagi-right.png" alt="pet" />
        </div>
        <div className="contact-floating-pet-top contact-pet-top-3">
          <img src="/assets/img/shape/testi3-pagi-left.png" alt="pet" />
        </div>
        <div className="contact-floating-pet-top contact-pet-top-4">
          <img src="/assets/img/shape/testi3-pagi-right.png" alt="pet" />
        </div>
        <div className="contact-floating-pet-top contact-pet-top-5">
          <img src="/assets/img/shape/dogcat.jpg" alt="dog" />
        </div>
      </div>

      {/* Top Additional Shape Animations */}
      <div className="contact-top-shape-animations">
        <div className="contact-top-shape contact-shape-top-1">
          <img src="/assets/img/shape/shape1-7.png" alt="shape" />
        </div>
        <div className="contact-top-shape contact-shape-top-2">
          <img src="/assets/img/shape/shape1-8.png" alt="shape" />
        </div>
        <div className="contact-top-shape contact-shape-top-3">
          <img src="/assets/img/shape/shape1-9.png" alt="shape" />
        </div>
        <div className="contact-top-shape contact-shape-top-4">
          <img src="/assets/img/shape/shape1-10.png" alt="shape" />
        </div>
        <div className="contact-top-shape contact-shape-top-5">
          <img src="/assets/img/shape/shape1-11.png" alt="shape" />
        </div>
        <div className="contact-top-shape contact-shape-top-6">
          <img src="/assets/img/shape/shape1-12.png" alt="shape" />
        </div>
      </div>

      <div className="shape-mockup jump-reverse d-xxl-block d-none" data-bottom="0%" data-right="0%">
        <img src="/assets/img/shape/shape1-89.png" alt="img" />
      </div>
      <div className="container th-container2">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="title-area text-center pe-xxl-5 me-xxl-5">
              <span className="sub-title subtitle-line-4 text-anim" data-cue="slideInUp">
                <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" /> book an Appointment
              </span>
              <h2 className="sec-title text-anim2" data-cue="slideInUp">Book an Appointment</h2>
              <p className="fs-18 text-anim2" data-cue="slideInUp">Have doubts or need guidance? Our team is always ready to help—just contact us!</p>
            </div>
          </div>
        </div>
        <div className="row gy-30 gx-60 justify-content-center align-items-center">
          <div className="col-xl-6">
            <div className="pe-xxl-5 ms-xxl-5 me-xxl-5" data-cue="slideInUp">
              <div className="contact-5-img">
                <img src="/assets/img/normal/contact-5-left.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form-5-wrapper">
              <form action="#" method="POST" className="appointment-form ajax-contact">
                <div className="appointment-icon-wrap">
                  <div className="appointment-icon-item" data-cue="slideInUp">
                    <div className="thumb">
                      <img src="/assets/img/icon/appointment-icon-1-1.svg" alt="icon" />
                    </div>
                    <div className="box-title">House Sitting</div>
                  </div>
                  <div className="appointment-icon-item" data-cue="slideInUp">
                    <div className="thumb">
                      <img src="/assets/img/icon/appointment-icon-1-2.svg" alt="icon" />
                    </div>
                    <div className="box-title">Drop In Visits</div>
                  </div>
                  <div className="appointment-icon-item" data-cue="slideInUp">
                    <div className="thumb">
                      <img src="/assets/img/icon/appointment-icon-1-3.svg" alt="icon" />
                    </div>
                    <div className="box-title">Vaccinations</div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group style-border col-md-6">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name*" required />
                  </div>
                  <div className="form-group style-border col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter your phone number*" required />
                  </div>
                  <div className="form-group style-border col-md-6">
                    <input type="text" className="form-control" name="pet_name" id="pet_name" placeholder="Pet's name and age*" required />
                  </div>
                  <div className="form-group col-md-6 style-border3">
                    <select name="subject" id="subject" className="form-select" required>
                      <option value="" disabled hidden>Select service*</option>
                      <option value="Personal Training">Personal Training</option>
                      <option value="Gym & Fitness Training">Gym & Fitness Training</option>
                      <option value="Basic Yoga">Basic Yoga</option>
                      <option value="Muscle Building">Muscle Building</option>
                    </select>
                    <i className="fal fa-chevron-down"></i>
                  </div>
                  <div className="form-group style-border col-md-12">
                    <input 
                      type="date" 
                      className="form-control" 
                      name="date" 
                      id="date" 
                      ref={dateInputRef}
                      required 
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button type="submit" className="th-btn">Submit Now</button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

