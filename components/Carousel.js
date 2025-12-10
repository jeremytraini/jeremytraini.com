import React, { useEffect, useRef } from 'react';
import Flickity from 'react-flickity-component';
import BrandChip from "./BrandChip";
import "flickity/css/flickity.css";

const Carousel = ({ technologies }) => {
  const flickityRef = useRef(null);
  const requestId = useRef(null);

  useEffect(() => {
    function animate(mainTicker) {
      if (mainTicker) {
        mainTicker.x -= 0.1;
        mainTicker.settle(mainTicker.x);
        requestId.current = window.requestAnimationFrame(() => animate(mainTicker));
      }
    }
    const pause = () => {
      if (requestId.current) {
        window.cancelAnimationFrame(requestId.current);
        requestId.current = null;
      }
    };

    // Delay our logic to ensure Flickity has initialized
    const timeoutId = setTimeout(() => {
      const mainTicker = flickityRef.current?.flkty;
      if (mainTicker) {
        animate(mainTicker);

        mainTicker.on('dragStart', pause);
        mainTicker.on('dragEnd', () => animate(mainTicker));
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      pause();
    };
  }, []);

  function wrapAroundList(list) {
    const wrapLength = 20;

    // If the list has more than 20 items, leave it
    if (list.length > wrapLength) {
      return list;
    }

    // If the list has fewer than 20 items, repeat it until it reaches 20 items
    let result = [];
    while (result.length < wrapLength) {
      result = result.concat(list);
    }
    
    return result;
  }

  const content = wrapAroundList(technologies);

  return (
    <Flickity
      ref={flickityRef}
      static
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
      {content
        .map((tech, index) => (
          <div key={index} className="mr-2">
            <BrandChip brand={tech} />
          </div>
        ))}
    </Flickity>
  );
}

export default Carousel;
