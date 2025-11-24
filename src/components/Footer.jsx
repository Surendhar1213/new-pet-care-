import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout2 style-2" id="contact-sec">

      {/* Footer Dog & Cat Animations - Like Why Choose Us */}
      <div className="footer-dog-animations">
        <div className="footer-why-dog-shape footer-why-dog-left-1">
          <img src="/assets/img/shape/testi3-pagi-left.png" alt="dog" />
        </div>
        <div className="footer-why-dog-shape footer-why-dog-left-2">
          <img src="/assets/img/shape/testi3-pagi-right.png" alt="dog" />
        </div>
        {/* Combined Cat & Dog Image - Original View (No Filter) */}
        <div className="footer-why-dog-shape footer-why-dogcat-left">
          <img src="/assets/img/shape/dogcat.jpg" alt="dog and cat" />
        </div>
        <div className="footer-why-float-shape footer-why-shape-left-1">
          <img src="/assets/img/shape/shape1-33.png" alt="shape" />
        </div>
        <div className="footer-why-float-shape footer-why-shape-left-2">
          <img src="/assets/img/shape/shape1-34.png" alt="shape" />
        </div>
      </div>

      {/* Footer Cat Animations - Right Side */}
      <div className="footer-cat-animations">
        <div className="footer-why-cat-shape footer-why-cat-right-1">
          <img src="/assets/img/shape/shape1-93.png" alt="cat" />
        </div>
        <div className="footer-why-cat-shape footer-why-cat-right-2">
          <img src="/assets/img/shape/cat3-pagi-left.png" alt="cat" />
        </div>
        <div className="footer-why-float-shape footer-why-shape-right-1">
          <img src="/assets/img/shape/shape1-35.png" alt="shape" />
        </div>
        <div className="footer-why-float-shape footer-why-shape-right-2">
          <img src="/assets/img/shape/shape1-36.png" alt="shape" />
        </div>
        <div className="footer-why-float-shape footer-why-shape-right-3">
          <img src="/assets/img/shape/shape1-93.png" alt="shape" />
        </div>
      </div>
      
      

      {/* Footer Background Shapes */}
      <div className="shape-mockup footer-bg-shape2 d-none d-xxl-block" data-bottom="0%" data-left="2%">
        <img src="/assets/img/shape/shape1-55.png" alt="img" />
      </div>
      <div className="shape-mockup footer-bg-shape3 d-none d-xxl-block z-index-1" data-bottom="5%" data-right="1%">
        <img src="/assets/img/shape/shape1-90.png" alt="img" />
      </div>

      <div className="widget-area">
        <div className="container th-container">
          <div className="row justify-content-between align-items-start footer-main-row">

            {/* Logo & Contact Info */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="#hero">
                      <img src="/assets/img/mainlogoedit.png" alt="Pet Care Logo" />
                    </a>
                  </div>
                  <p className="about-text">
                    Loving, reliable pet care to keep your pets joyful, healthy, and safe in their own space.</p>

                  <div className="info-box">
                    <div className="box-icon"><i className="fas fa-phone"></i></div>
                    <p className="box-text"><a href="tel:+91 98765 43210" className="box-link">+91 9994610836</a></p>
                  </div>

                  <div className="info-box">
                    <div className="box-icon"><i className="fas fa-envelope"></i></div>
                    <p className="box-text"><a href="#" className="box-link">walkmypet@gmail.com</a></p>
                  </div>

                  <div className="info-box">
                    <div className="box-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <p className="box-text"><a href="#" className="box-link">Chennai, Tamil Nadu, India</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="#service-sec">Dog Walking</a></li>
                    <li><a href="#service-sec">House Sitting</a></li>
                    <li><a href="#service-sec">Drop-In Visits</a></li>
                    <li><a href="#service-sec">Doggy Day Care</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Newsletter Subscribe - Centered */}
          <div className="row justify-content-center footer-subscribe-row">
            <div className="col-xxl-8 col-xl-9 col-lg-10">
              <div className="footer2-subscribe-wrap text-center">
                <h4 className="box-title">Subscribe for pet care updates!</h4>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email address" required />
                  </div>
                  <button type="submit" className="th-btn style3 th-btn-sm">Subscribe</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrap">
        <div className="container th-container">
          <div className="row justify-content-center gy-3 align-items-center">
            <div className="col-lg-12 text-center" data-cue="slideInUp">
              <p className="copyright-text">
                <i className="fal fa-copyright"></i> Copyright 2025 <a href="#hero">WiseWebTek</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
