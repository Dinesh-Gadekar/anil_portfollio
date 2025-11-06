import React, { useRef, useEffect, useState } from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const [active, setActive] = useState(false);

  // Scroll gallery
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  // Animate heading & paragraph when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => contentRef.current && observer.unobserve(contentRef.current);
  }, []);

  return (
    <div id="menu">
      <div className="app__gallery flex__center">
        {/* Text Content with stars */}
        <div className="app__gallery-content-wrapper">
          <div
            className={`app__gallery-content ${active ? "active" : ""}`}
            ref={contentRef}
          >
            <SubHeading title="Work Highlights" />
            <h1>Our Services</h1>
            <p className="p__opensans">
              Crafting unique visuals, memorable brands, and intuitive digital
              experiences through creative design solutions.
            </p>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>

          {/* Scroll Arrows */}
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
