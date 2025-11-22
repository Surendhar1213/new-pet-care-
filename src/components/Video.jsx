import React from 'react';

const Video = () => {
  return (
    <div className="video-area-1 overflow-hidden space-top">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-wrap1">
              <div className="video-thumb1-1" data-cue="slideInUp" data-overlay="title" data-opacity="4">
                <img src="/assets/img/normal/video-thumb1-1.jpg" alt="img" />
                <a href="https://www.youtube.com/watch?v=ehNKdTRS5N8" className="video-btn th-popup-video">
                  <span className="play-btn style2">
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </span>
                  <span className="video-text">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

