import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      img: '/assets/img/blog/blog-s-1-1.jpg',
      author: 'Jordan Park',
      date: '24 Jun, 2025',
      title: 'How to Keep Your Loved Ones Healthy Year-Round'
    },
    {
      img: '/assets/img/blog/blog-s-1-2.jpg',
      author: 'Jordan Park',
      date: '24 Jun, 2025',
      title: 'How to Look After Dogs Loved Ones Healthy Year-Round'
    },
    {
      img: '/assets/img/blog/blog-s-1-3.jpg',
      author: 'Jordan Park',
      date: '24 Jun, 2025',
      title: 'Signs Your Cat is Stressed Your Loved Ones'
    }
  ];

  return (
    <section className="space bg-smoke overflow-hidden" id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-anim subtitle-line-4" data-cue="slideInUp">
            <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" />Articles & Tips
          </span>
          <h2 className="sec-title text-anim" data-cue="slideInUp">Latest Articles & Blog</h2>
        </div>
        <div className="row gy-40 justify-content-center">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-xl-4 col-lg-6" data-cue="slideInUp">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="#blog">
                    <img src={post.img} alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="#blog"><i className="fas fa-user"></i>{post.author}</a>
                    <a href="#blog"><i className="fas fa-calendar"></i>{post.date}</a>
                  </div>
                  <h3 className="box-title">
                    <a href="#blog">{post.title}</a>
                  </h3>
                  <div className="btn-wrap">
                    <a href="#blog" className="link-btn th-btn-icon">Read More</a>
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

export default Blog;

