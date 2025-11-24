import React from 'react';

const Header = () => {
  return (
    <header className="th-header header-layout1 onepage-nav style-3 style-4">
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container position-relative">
            <div className="header-6-left">
              <img src="/assets/img/shape/header-6-left.png" alt="" />
            </div>
            <div className="header-6-right">
              <img src="/assets/img/shape/header-6-right.png" alt="" />
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="#hero">
                    <img src="/assets/img/mainlogoedit.png" alt="Babet" />
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="has-children"> <a href="#hero">Home</a></li>                 
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </nav>
                <div className="header-button d-flex d-lg-none">
                  <button type="button" className="th-menu-toggle icon-btn">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none">
                <div className="header-button">
                  <a href="#contact-sec" className="th-btn">Contact Now |<i className="far fa-long-arrow-right ms-3"></i></a>
                  <button type="button" className="icon-btn style4 sideMenuInfo">
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;