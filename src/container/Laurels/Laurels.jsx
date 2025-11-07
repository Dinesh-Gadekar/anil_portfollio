import React, { useEffect, useRef, useState } from 'react';
import { images } from '../../constants';
import './Laurels.css';
import { SubHeading } from '../../components';

const Laurels = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y - height / 2) / height) * 10;
    const rotateY = ((x - width / 2) / width) * -10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div id="services" className="laurels">
      <div className="laurels__content">
        <SubHeading title="Our Services" />
        <h1 className="laurels__title">We Work On</h1>

        <div className="laurels__grid">
          <div className="laurels__item">
            <img src={images.award01} alt="Canvas" />
            <h2>Canvas</h2>
            <p>We create elegant canvas art that transforms ideas into premium, lasting visuals.</p>
          </div>

          <div className="laurels__item">
            <img src={images.award02} alt="Website Layouts" />
            <h2>Website Layouts</h2>
            <p>Responsive and modern layouts designed for smooth user experience and bold aesthetics.</p>
          </div>

          <div className="laurels__item">
            <img src={images.award03} alt="Social Media Designs" />
            <h2>Social Media Designs</h2>
            <p>Creative visuals that boost engagement and capture your brand’s personality online.</p>
          </div>

          <div className="laurels__item">
            <img src={images.award05} alt="Print Designs" />
            <h2>Print Designs</h2>
            <p>Clean, stylish, and professional prints that make your message stand out beautifully.</p>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        className={`laurels__image ${isVisible ? 'active' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
