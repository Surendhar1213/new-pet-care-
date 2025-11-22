import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader">
      <button className="th-btn preloaderCls">Cancel Preloader</button>
      <div className="preloader-inner">
        <div className="bounce">
          <img src="/assets/img/mainlogo.png" alt="img" />
        </div>
        <span className="loader">Babet <span className="loading-text">WalkMyPet</span></span>
      </div>
    </div>
  );
};

export default Preloader;

