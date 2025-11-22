import React from 'react';

const Team = () => {
  const teamMembers = [
    { img: '/assets/img/team/team-2-1.jpg', name: 'Alex Javed', role: 'Pet Expert' },
    { img: '/assets/img/team/team-2-2.jpg', name: 'Jessica Lauren', role: 'Pet Expert' },
    { img: '/assets/img/team/team-2-3.jpg', name: 'Jenny William', role: 'Pet Expert' },
    { img: '/assets/img/team/team-2-4.jpg', name: 'Daniel Thomas', role: 'Pet Expert' }
  ];

  return (
    <section className="space bg-smoke overflow-hidden position-relative team-area-2">
      <div className="container th-container2">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="title-area text-center">
              <span className="sub-title subtitle-line-4 text-anim" data-cue="slideInUp">
                <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" /> Our Members
              </span>
              <h2 className="sec-title text-anim2" data-cue="slideInUp">Get The Massive Facilities</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div className="th-team team-card" data-cue="slideInUp">
                <div className="img-wrap">
                  <div className="team-img">
                    <img src={member.img} alt="Team" />
                  </div>
                  <div className="rating">4.9 <i className="fa-solid fa-star"></i></div>
                </div>
                <div className="team-card-content">
                  <div className="left">
                    <h3 className="box-title"><a href="#team">{member.name}</a></h3>
                    <span className="team-desig">{member.role}</span>
                  </div>
                  <div className="team-social-hover">
                    <a href="#" className="team-social-hover_btn">
                      <i className="fa-solid fa-share-nodes"></i>
                    </a>
                    <div className="th-social">
                      <a target="_blank" href="https://vimeo.com/" rel="noreferrer"><i className="fab fa-vimeo-v"></i></a>
                      <a target="_blank" href="https://linkedin.com/" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                      <a target="_blank" href="https://twitter.com/" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://facebook.com/" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

