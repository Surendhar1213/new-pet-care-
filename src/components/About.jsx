import React, { useEffect, useRef } from 'react';
import { initCounters } from '../utils/counterAnimation';

const About = () => {
  const counterSectionRef = useRef(null);
  const cleanupRef = useRef(null);

  useEffect(() => {
    // Initialize function
    const init = () => {
      // Cleanup previous instance
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }

      // Initialize counters - only when section is 30% visible
      if (counterSectionRef.current) {
        cleanupRef.current = initCounters(counterSectionRef.current, {
          threshold: 0.3,    // 30% visible
          rootMargin: '0px', // No extra margin
          duration: 2000,
          delay: 150
        });
      }
    };

    // Page reload handler
    const handlePageShow = (e) => {
      if (e.persisted) {
        setTimeout(init, 100);
      }
    };

    // Initialize
    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
    }

    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <div className="overflow-hidden space" id="about-sec">
      {/* Animated Shapes Background */}
      <div className="about-shapes-bg">
        <div className="about-shape about-shape-1">
          <img src="/assets/img/shape/shape1-17.png" alt="shape" />
        </div>
        <div className="about-shape about-shape-2">
          <img src="/assets/img/shape/shape1-18.png" alt="shape" />
        </div>
        <div className="about-shape about-shape-3">
          <img src="/assets/img/shape/shape1-19.png" alt="shape" />
        </div>
        <div className="about-shape about-shape-4">
          <img src="/assets/img/shape/shape1-20.png" alt="shape" />
        </div>
        <div className="about-shape about-shape-5">
          <img src="/assets/img/shape/shape1-21.png" alt="shape" />
        </div>
        <div className="about-shape about-shape-6">
          <img src="/assets/img/shape/shape1-22.png" alt="shape" />
        </div>
      </div>

      {/* Floating Pet Images */}
      <div className="about-pet-shape about-pet-1">
        <img src="/assets/img/shape/cat3-pagi-left.png" alt="pet" />
      </div>
      <div className="about-pet-shape about-pet-2">
        <img src="/assets/img/shape/cat3-pagi-right.png" alt="pet" />
      </div>
      <div className="about-pet-shape about-pet-3">
        <img src="/assets/img/shape/testi3-pagi-left.png" alt="pet" />
      </div>
      <div className="about-pet-shape about-pet-4">
        <img src="/assets/img/shape/testi3-pagi-right.png" alt="pet" />
      </div>

      <div className="container th-container2">
        <div className="about-wrap1">
          <div className="row gy-40 gx-60 align-items-start">
            {/* Left - Image */}
            <div className="col-xxl-5 col-xl-5 align-self-center">
              <div className="about7-img-box" data-cue="slideInUp" data-delay="300">
                <div className="circle-tag">
                  <span className="circle-title-anime">*** WE HAVE 15 YEARS EXPERIENCES</span>
                  <div className="icon-btn style2">
                    <a href="#service-sec">
                      <img src="/assets/img/icon/arrow-white-right.svg" alt="icon" />
                    </a>
                  </div>
                </div>
                <div className="img1">
                  <img src="/assets/img/normal/about-thumb7-1.jpg" alt="About" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-xxl-7 col-xl-7">
              <div className="about-content-7-wrap">
                <div className="left-cntent pe-xxl-5">
                  {/* Title */}
                  <div className="title-area mb-20 pe-xxl-5">
                    <span className="sub-title subtitle-line-4 text-anim" data-cue="slideInUp">
                      <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" />
                      About WalkMyPet
                    </span>
                    <h2 className="sec-title text-anim2" data-cue="slideInLeft" data-delay="300">
                      Why Pet Parents Trust Us
                    </h2>
                    <p className="mt-3 pe-xxl-5 me-xxl-5" data-cue="slideInUp">
                      For over 15 years, we've been dedicated to making pets look fabulous and feel loved.
                    </p>
                  </div>

                  {/* Checklist */}
                  <div className="about1-list-wrap style-2 style-4" data-cue="slideInUp">
                    <div className="checklist style2">
                      <ul>
                        <li>Spacious Suites</li>
                        <li>Play Zones & Enrichment</li>
                        <li>Vet-On-Call</li>
                        <li>24/7 Care</li>
                      </ul>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="btn-wrap mt-25" data-cue="slideInUp">
                    <a className="th-btn th-btn-icon2" href="#about-sec">
                      More About Us <i className="far fa-long-arrow-right ms-3"></i>
                    </a>
                  </div>
                </div>

                {/* Counter Section - REF HERE */}
                <div className="about-7-right-wrap" ref={counterSectionRef}>
                  <div className="counter-wrap">
                    <div className="counter-item">
                      <h4 className="box-title">
                        <span className="counter-number" data-count="562">0</span>+
                      </h4>
                      <p className="box-text">Pampered Pets</p>
                    </div>
                    <div className="counter-item">
                      <h4 className="box-title">
                        <span className="counter-number" data-count="240">0</span>+
                      </h4>
                      <p className="box-text">Team Members</p>
                    </div>
                    <div className="counter-item">
                      <h4 className="box-title">
                        <span className="counter-number" data-count="100">0</span>%
                      </h4>
                      <p className="box-text">Positive Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;