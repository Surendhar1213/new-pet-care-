import React from 'react';

const Contact = () => {
  return (
    <div className="space overflow-hidden contact-area-0 position-relative z-index-common" id="contact-sec">
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
              <p className="fs-18 text-anim2" data-cue="slideInUp">Need some advice or have any questions about our services? Contact us in any convenient way.</p>
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
                    <input type="date" className="form-control" defaultValue="2025-11-16" name="date" id="date" required />
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

