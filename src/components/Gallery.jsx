import React from 'react';

const Gallery = () => {
  const galleryImages = [
    '/assets/img/gallery/gallery_2_1.jpg',
    '/assets/img/gallery/gallery_2_2.jpg',
    '/assets/img/gallery/gallery_2_3.jpg',
    '/assets/img/gallery/gallery_2_4.jpg',
    '/assets/img/gallery/gallery_2_5.jpg',
    '/assets/img/gallery/gallery_2_6.jpg',
    '/assets/img/gallery/gallery_2_7.jpg'
  ];

  return (
    <div className="overflow-hidden space z-index-common" id="gallery-sec">
      {/* Existing Shapes */}
      <div className="shape-mockup gallery-bg-shape1-1 d-xxl-block d-none jump" data-left="4%" data-top="20%">
        <img src="/assets/img/shape/shape1-16.png" alt="img" />
      </div>
      <div className="shape-mockup gallery-bg-shape1-1 d-xxl-block d-none shake" data-right="4%" data-top="20%">
        <img src="/assets/img/shape/shape1-17.png" alt="img" />
      </div>

      {/* Additional Dog & Cat Animations */}
      <div className="gallery-animations">
        <div className="gallery-pet-shape gallery-pet-1">
          <img src="/assets/img/shape/cat3-pagi-left.png" alt="pet" />
        </div>
        <div className="gallery-pet-shape gallery-pet-2">
          <img src="/assets/img/shape/cat3-pagi-right.png" alt="pet" />
        </div>
        <div className="gallery-pet-shape gallery-pet-3">
          <img src="/assets/img/shape/testi3-pagi-left.png" alt="pet" />
        </div>
        <div className="gallery-pet-shape gallery-pet-4">
          <img src="/assets/img/shape/testi3-pagi-right.png" alt="pet" />
        </div>
        <div className="gallery-float-shape gallery-float-1">
          <img src="/assets/img/shape/shape1-26.png" alt="shape" />
        </div>
        <div className="gallery-float-shape gallery-float-2">
          <img src="/assets/img/shape/shape1-27.png" alt="shape" />
        </div>
        <div className="gallery-float-shape gallery-float-3">
          <img src="/assets/img/shape/shape1-28.png" alt="shape" />
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="title-area text-center">
          <span className="sub-title subtitle-line-4 text-anim" data-cue="slideInUp">
            <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" />Our Gallery
          </span>
          <h2 className="sec-title text-anim" data-cue="slideInUp">See Our Home For Your Pet</h2>
          <p className="fs-18 text-anim2" data-cue="slideInUp">Easily find and book trusted Pet Caregivers near you</p>
        </div>
        <div className="gallery-1-wrap style-2 style-3">
          <div className="gallery-card">
            <div className="gallery-img">
              <img src={galleryImages[0]} alt="img" />
              <a href={galleryImages[0]} className="icon-btn th-popup-image">
                <i className="fa-regular fa-magnifying-glass"></i>
              </a>
            </div>
          </div>
          <div className="gallery-card-wrap">
            <div className="gallery-card">
              <div className="gallery-img">
                <img src={galleryImages[1]} alt="img" />
                <a href={galleryImages[1]} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-img">
                <img src={galleryImages[2]} alt="img" />
                <a href={galleryImages[2]} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img">
              <img src={galleryImages[3]} alt="img" />
              <a href={galleryImages[3]} className="icon-btn th-popup-image">
                <i className="fa-regular fa-magnifying-glass"></i>
              </a>
            </div>
          </div>
          <div className="gallery-card-wrap">
            <div className="gallery-card">
              <div className="gallery-img">
                <img src={galleryImages[4]} alt="img" />
                <a href={galleryImages[4]} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-img">
                <img src={galleryImages[5]} alt="img" />
                <a href={galleryImages[5]} className="icon-btn th-popup-image">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img">
              <img src={galleryImages[6]} alt="img" />
              <a href={galleryImages[6]} className="icon-btn th-popup-image">
                <i className="fa-regular fa-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

