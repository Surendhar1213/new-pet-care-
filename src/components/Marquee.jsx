import React, { useState } from 'react';

const PetServicesMarquee = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { 
      name: 'Pet Daycare',
      icon: '🐕',
      color: '#2a6449'
    },
    { 
      name: 'Grooming Services',
      icon: '✂️',
      color: '#2a6449'
    },
    { 
      name: 'Dental Checkup',
      icon: '🦷',
      color: '#2a6449'
    },
    { 
      name: 'Pet Boarding',
      icon: '🏠',
      color: '#2a6449'
    },
    { 
      name: 'Pet Training',
      icon: '🎓',
      color: '#2a6449'
    },
    { 
      name: 'Pet Spa',
      icon: '💆',
      color: '#2a6449'
    },
    { 
      name: 'Veterinary Care',
      icon: '🩺',
      color: '#2a6449'
    },
    { 
      name: 'Vaccination',
      icon: '💉',
      color: '#2a6449'
    },
    { 
      name: 'Pet Photography',
      icon: '📸',
      color: '#2a6449'
    },
    { 
      name: 'Pet Nutrition',
      icon: '🍖',
      color: '#2a6449'
    },
  ];

  const MarqueeContent = ({ startIndex = 0 }) => (
    <>
      {services.map((service, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            key={actualIndex}
            onMouseEnter={() => setHoveredIndex(actualIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              cursor: 'pointer',
              transform: hoveredIndex === actualIndex ? 'translateY(-10px)' : 'translateY(0)',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* Blob Shape with Icon */}
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: '#2a6449',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: hoveredIndex === actualIndex 
                  ? `0 15px 40px rgba(42, 100, 73, 0.5), 0 0 0 4px rgba(42, 100, 73, 0.2)`
                  : '0 5px 20px rgba(42, 100, 73, 0.3)',
                border: '3px solid #2a6449',
                transform: hoveredIndex === actualIndex 
                  ? 'scale(1.1) rotate(5deg)'
                  : 'scale(1) rotate(0deg)',
                animation: hoveredIndex === actualIndex ? 'blobMorph 2s ease-in-out infinite' : 'none',
              }}
            >
              <div style={{
                animation: hoveredIndex === actualIndex ? 'iconBounce 0.6s ease-in-out infinite' : 'none',
              }}>
                {service.icon}
              </div>
            </div>

            {/* Service Name */}
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#000000',
                textAlign: 'center',
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                whiteSpace: 'nowrap',
                maxWidth: '140px',
                transition: 'all 0.3s ease',
                textShadow: hoveredIndex === actualIndex ? `0 2px 8px rgba(42, 100, 73, 0.27)` : 'none',
              }}
            >
              {service.name}
            </span>

            {/* Floating Paw Print on Hover */}
            {hoveredIndex === actualIndex && (
              <div
                style={{
                  fontSize: '20px',
                  animation: 'pawFloat 1s ease-in-out infinite',
                  marginTop: '-5px',
                }}
              >
                🐾
              </div>
            )}
          </div>
        );
      })}
    </>
  );

  return (
    <div style={{
      width: '100%',
      background: '#ffffff',
      padding: '80px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Animated Paw Prints Background - 6 Paws Only */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0.08,
      }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '40px', animation: 'floatPaw 18s ease-in-out infinite', animationDelay: '0s' }}>🐾</div>
        <div style={{ position: 'absolute', top: '25%', right: '8%', fontSize: '40px', animation: 'floatPaw 22s ease-in-out infinite', animationDelay: '3s' }}>🐾</div>
        <div style={{ position: 'absolute', top: '50%', left: '12%', fontSize: '40px', animation: 'floatPaw 20s ease-in-out infinite', animationDelay: '6s' }}>🐾</div>
        <div style={{ position: 'absolute', top: '70%', right: '15%', fontSize: '40px', animation: 'floatPaw 19s ease-in-out infinite', animationDelay: '9s' }}>🐾</div>
        <div style={{ position: 'absolute', bottom: '15%', left: '20%', fontSize: '40px', animation: 'floatPaw 21s ease-in-out infinite', animationDelay: '12s' }}>🐾</div>
        <div style={{ position: 'absolute', top: '40%', right: '25%', fontSize: '40px', animation: 'floatPaw 23s ease-in-out infinite', animationDelay: '15s' }}>🐾</div>
      </div>

      <style>{`
        /* Marquee Scroll Animation */
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Blob Morph Animation */
        @keyframes blobMorph {
          0%, 100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
        }

        /* Icon Bounce Animation */
        @keyframes iconBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.1);
          }
        }

        /* Paw Float Animation */
        @keyframes pawFloat {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.6;
          }
        }

        /* Floating Paw Prints Background Animation */
        @keyframes floatPaw {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(30px, -30px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translate(40px, 10px) rotate(270deg) scale(1.05);
          }
        }

        /* Running Dog Animation */
        @keyframes dogRun {
          0% {
            left: -80px;
            transform: scaleX(1) translateY(0);
          }
          45% {
            transform: scaleX(1) translateY(-15px);
          }
          50% {
            left: 50%;
            transform: scaleX(1) translateY(0);
          }
          55% {
            transform: scaleX(1) translateY(-15px);
          }
          100% {
            left: calc(100% + 80px);
            transform: scaleX(1) translateY(0);
          }
        }

        /* Food Bowl Bounce Animation */
        @keyframes foodBounce {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(-5deg) scale(1.1);
          }
          50% {
            transform: translateY(0) rotate(5deg) scale(1);
          }
          75% {
            transform: translateY(-10px) rotate(-3deg) scale(1.05);
          }
        }

        /* Dog Bone Float Animation */
        @keyframes boneFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        /* Heart Beat Animation */
        @keyframes heartBeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.3);
          }
          20%, 40% {
            transform: scale(1);
          }
        }

        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: marqueeScroll 40s linear infinite;
        }
        .marquee-wrapper:hover {
          animation-play-state: paused;
        }
        .marquee-group {
          display: flex;
          gap: 60px;
          padding-right: 60px;
        }

        /* Responsive Animations */
        @media (max-width: 768px) {
          @keyframes dogRun {
            0% {
              left: -60px;
            }
            100% {
              left: calc(100% + 60px);
            }
          }
        }
      `}</style>
      
      <div className="marquee-wrapper">
        <div className="marquee-group">
          <MarqueeContent startIndex={0} />
        </div>
        <div className="marquee-group">
          <MarqueeContent startIndex={services.length} />
        </div>
      </div>
    </div>
  );
};

export default PetServicesMarquee;