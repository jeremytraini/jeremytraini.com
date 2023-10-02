import React, { useEffect, useRef } from 'react';
import Flickity from 'react-flickity-component';
import BrandChip from "./BrandChip";
import "flickity/css/flickity.css";

const Carousel = ({ technologies }) => {
  const flickityRef = useRef(null);
  let requestId;

  useEffect(() => {
    // Delay our logic to ensure Flickity has initialized
    setTimeout(() => {
      const mainTicker = flickityRef.current && flickityRef.current.flkty;
      if (mainTicker) {
        play();

        mainTicker.on('dragStart', pause);
        mainTicker.on('dragEnd', play);

        // mainTicker.on('mouseEnter', pause);
        // mainTicker.on('mouseLeave', play);
      }
    }, 100);

    return () => {
      if (requestId) {
        window.cancelAnimationFrame(requestId);
      }
    };
  }, []);

  function play() {
    const mainTicker = flickityRef.current && flickityRef.current.flkty;
    if (mainTicker) {
      mainTicker.x -= 0.01;
      mainTicker.settle(mainTicker.x);
      requestId = window.requestAnimationFrame(play);
    }
  }

  function pause() {
    window.cancelAnimationFrame(requestId);
    requestId = undefined;
  }

  return (
    <Flickity
      ref={flickityRef}
      static // Ensure Flickity doesn't re-initialize
      className="js-main-slider"
      options={{
        accessibility: true,
        resize: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        percentPosition: true,
        setGallerySize: true,
      }}
    >
      {technologies.map((tech, index) => (
        <div key={index} className="mr-2">
          <BrandChip brand={tech} />
        </div>
      ))}
    </Flickity>
  );
}

export default Carousel;
