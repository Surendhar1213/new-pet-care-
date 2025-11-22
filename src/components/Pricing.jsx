import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    {
      title: 'Dog Grooming',
      text: 'Our AI is dependent on you to direct it. Ask any question, any time.',
      price: '1,000',
      features: [
        { text: 'Fast. Deep, comprehensive answers', available: true },
        { text: 'Accurate Built to minimise hallucination.', available: true },
        { text: 'Trustworthy. Always backed by evidence.', available: true },
        { text: 'Scalable. Analyse hours of conversations', available: false },
        { text: 'Accurate. Built to minimise hallucination.', available: false }
      ],
      premium: ''
    },
    {
      title: 'Standard Plan',
      text: 'Our AI is dependent on you to direct it. Ask any question, any time.',
      price: '1,200',
      features: [
        { text: 'Fast. Deep, comprehensive answers', available: true },
        { text: 'Accurate Built to minimise hallucination.', available: true },
        { text: 'Trustworthy. Always backed by evidence.', available: true },
        { text: 'Scalable. Analyse hours of conversations', available: true },
        { text: 'Accurate. Built to minimise hallucination.', available: false }
      ],
      premium: 'Best Value For You',
      active: true
    },
    {
      title: 'Premium Plan',
      text: 'Our AI is dependent on you to direct it. Ask any question, any time.',
      price: '1,500',
      features: [
        { text: 'Fast. Deep, comprehensive answers', available: true },
        { text: 'Accurate Built to minimise hallucination.', available: true },
        { text: 'Trustworthy. Always backed by evidence.', available: true },
        { text: 'Scalable. Analyse hours of conversations', available: true },
        { text: 'Accurate. Built to minimise hallucination.', available: true }
      ],
      premium: ''
    }
  ];

  const yearlyPlans = [
    {
      title: 'Dog Grooming',
      text: 'Our AI is dependent on you to direct it. Ask any question, any time.',
      price: '2,050',
      features: [
        { text: 'Fast. Deep, comprehensive answers', available: true },
        { text: 'Accurate Built to minimise hallucination.', available: true },
        { text: 'Trustworthy. Always backed by evidence.', available: true },
        { text: 'Scalable. Analyse hours of conversations', available: false },
        { text: 'Accurate. Built to minimise hallucination.', available: false }
      ],
      premium: ''
    },
    {
      title: 'Standard Plan',
      text: 'Our AI is dependent on you to direct it. Ask any question, any time.',
      price: '2,250',
      features: [
        { text: 'Fast. Deep, comprehensive answers', available: true },
        { text: 'Accurate Built to minimise hallucination.', available: true },
        { text: 'Trustworthy. Always backed by evidence.', available: true },
        { text: 'Scalable. Analyse hours of conversations', available: true },
        { text: 'Accurate. Built to minimise hallucination.', available: false }
      ],
      premium: 'Best Value For You',
      active: true
    },
    {
      title: 'Premium Plan',
      text: 'Our AI is dependent on you to direct it. Ask any question, any time.',
      price: '2,550',
      features: [
        { text: 'Fast. Deep, comprehensive answers', available: true },
        { text: 'Accurate Built to minimise hallucination.', available: true },
        { text: 'Trustworthy. Always backed by evidence.', available: true },
        { text: 'Scalable. Analyse hours of conversations', available: true },
        { text: 'Accurate. Built to minimise hallucination.', available: true }
      ],
      premium: ''
    }
  ];

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <section className="price-sec-3 overflow-hidden space-bottom">
      <div className="container th-container2">
        <div className="row justify-content-between align-items-center mb-60">
          <div className="col-xxl-7 col-xl-8 col-md-9">
            <div className="title-area mb-3">
              <span className="sub-title subtitle-line-4 text-anim" data-cue="slideInUp">
                <img className="me-2" src="/assets/img/icon/subtitle-icon4.svg" alt="icon" /> Service Plan
              </span>
              <h2 className="sec-title text-anim2" data-cue="slideInUp">Affordable Care Meets Budget Comfort Every Day</h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="pricing-tabs">
              <div className="switch-area">
                <label className={`toggler ${!isYearly ? 'toggler--is-active' : ''} ms-0`} onClick={() => setIsYearly(false)}>Monthly</label>
                <div className="toggle">
                  <input type="checkbox" id="switcher" className="check" checked={isYearly} onChange={(e) => setIsYearly(e.target.checked)} />
                  <b className="b switch"></b>
                </div>
                <label className={`toggler ${isYearly ? 'toggler--is-active' : ''}`} onClick={() => setIsYearly(true)}>Yearly</label>
              </div>
            </div>
          </div>
        </div>
        <div className={`wrapper-pack ${isYearly ? '' : 'hide'}`} style={{ display: isYearly ? 'block' : 'none' }}>
          <div className="row gy-4 justify-content-center">
            {yearlyPlans.map((plan, index) => (
              <div key={index} className="col-xl-4 col-md-6" data-cue="slideInUp">
                <div className={`price-card style-3 ${plan.active ? 'active-plan' : ''}`}>
                  <p className="premium">{plan.premium}</p>
                  <div className="price-card-inner">
                    <h3 className="box-title">{plan.title}</h3>
                    <p className="box-text">{plan.text}</p>
                    <div className="price_card-wrap">
                      <a href="#contact-sec" className="th-btn">Select Plan</a>
                      <h4 className="price-card_price">
                        <span className="currency-sing">$</span> {plan.price}
                        <span className="duration">/Year</span>
                      </h4>
                    </div>
                    <div className="checklist">
                      <ul>
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className={feature.available ? '' : 'unavailable'}>
                            <i className="fa-solid fa-check"></i> {feature.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`wrapper-pack ${!isYearly ? '' : 'hide'}`} style={{ display: !isYearly ? 'block' : 'none' }}>
          <div className="row gy-4 justify-content-center">
            {monthlyPlans.map((plan, index) => (
              <div key={index} className="col-xl-4 col-md-6" data-cue="slideInUp">
                <div className={`price-card style-3 ${plan.active ? 'active-plan' : ''}`}>
                  <p className="premium">{plan.premium}</p>
                  <div className="price-card-inner">
                    <h3 className="box-title">{plan.title}</h3>
                    <p className="box-text">{plan.text}</p>
                    <div className="price_card-wrap">
                      <a href="#contact-sec" className="th-btn">Select Plan</a>
                      <h4 className="price-card_price">
                        <span className="currency-sing">$</span> {plan.price}
                        <span className="duration">/mon</span>
                      </h4>
                    </div>
                    <div className="checklist">
                      <ul>
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className={feature.available ? '' : 'unavailable'}>
                            <i className="fa-solid fa-check"></i> {feature.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

