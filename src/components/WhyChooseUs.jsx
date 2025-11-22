import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { number: '01', title: 'Trusted Dog Walking Experts' },
    { number: '02', title: 'Safe & Hygienic House Sitting' },
    { number: '03', title: 'Quick & Reliable Drop-In Visits' },
    { number: '04', title: 'Fun & Friendly Doggy Day Care' },
    { number: '05', title: 'Care Tailored For Every Pup' }
  ];

  return (
    <div className="why-sec-1 space overflow-hidden" id="why-choose-sec">
      {/* Left Side - Dog Animations */}
      <div className="why-dog-animations">
        <div className="why-dog-shape why-dog-left-1">
          <img src="/assets/img/shape/testi3-pagi-left.png" alt="dog" />
        </div>
        <div className="why-dog-shape why-dog-left-2">
          <img src="/assets/img/shape/testi3-pagi-right.png" alt="dog" />
        </div>
        <div className="why-float-shape why-shape-left-1">
          <img src="/assets/img/shape/shape1-33.png" alt="shape" />
        </div>
        <div className="why-float-shape why-shape-left-2">
          <img src="/assets/img/shape/shape1-34.png" alt="shape" />
        </div>
      </div>

      {/* Right Side - Cat Animations */}
      <div className="why-cat-animations">
        <div className="why-cat-shape why-cat-right-1">
          <img src="/assets/img/shape/shape1-93.png" alt="cat" />
        </div>
        <div className="why-cat-shape why-cat-right-2">
          <img src="/assets/img/shape/cat3-pagi-left.png" alt="cat" />
        </div>
        <div className="why-float-shape why-shape-right-1">
          <img src="/assets/img/shape/shape1-35.png" alt="shape" />
        </div>
        <div className="why-float-shape why-shape-right-2">
          <img src="/assets/img/shape/shape1-36.png" alt="shape" />
        </div>
        <div className="why-float-shape why-shape-right-3">
          <img src="/assets/img/shape/shape1-93.png" alt="shape" />
        </div>
      </div>

      <div className="why-bg-shape1-1 shape-mockup jump d-xxl-block d-none" data-top="10%" data-left="10%">
        <img src="/assets/img/shape/shape1-58.png" alt="img" />
      </div>
      <div className="why-bg-shape1-2 shape-mockup heartbeat d-xxl-block d-none" data-top="8%" data-left="14%">
        <img src="/assets/img/shape/shape1-13.png" alt="img" />
      </div>
      <div className="why-bg-shape1-3 shape-mockup shake d-xxl-block d-none" data-top="30%" data-left="8%">
        <img src="/assets/img/shape/shape1-11.png" alt="img" />
      </div>
      <div className="why-bg-shape1-4 shape-mockup shake d-xxl-block d-none" data-top="7%" data-right="8%">
        <img src="/assets/img/shape/shape1-14.png" alt="img" />
      </div>
      <div className="why-bg-shape1-5 shape-mockup shake d-xxl-block d-none" data-top="18%" data-right="12%">
        <img src="/assets/img/shape/shape1-12.png" alt="img" />
      </div>
      <div className="why-bg-shape1-6 shape-mockup shake d-xxl-block d-none" data-top="32%" data-right="7%">
        <img src="/assets/img/shape/shape1-15.png" alt="img" />
      </div>

      <div className="container">
        <div className="row gy-40 gx-80 justify-content-center">
          <div className="col-xxl-12">
            <div className="title-area text-center">
              <span className="sub-title subtitle-line-4 text-anim" data-cue="slideInUp">
                <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" />
                Our Specialities
              </span>
              <h2 className="sec-title text-anim" data-cue="slideInUp">Why Choose Us?</h2>
              <p className="fs-18 text-anim2" data-cue="slideInUp">Easily find and book trusted Pet Caregivers near you</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="why-wrap1">
              <div className="why-card-wrap">
                {features.map((feature, index) => (
                  <div key={index} className="why-card" data-cue="slideInUp">
                    <div className="box-number">{feature.number}</div>
                    <div className="box-details">
                      <h4 className="box-title">{feature.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="btn-wrap justify-content-center">
                <a className="th-btn" href="#contact-sec">Schedule a Visit</a>
              </div>

              <div className="why-img-box1" data-cue="slideInUp">
                <img src="/assets/img/normal/why-thumb1-1.png" alt="img" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
