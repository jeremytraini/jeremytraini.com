import React, { useEffect, useRef, useCallback } from 'react';
import Flickity from 'react-flickity-component';
import BrandChip from "./BrandChip";
import "flickity/css/flickity.css";

const Carousel = ({ technologies }) => {
  const flickityRef = useRef(null);
  const requestId = useRef(null);
  const animationRef = useRef(null);
  const animateFnRef = useRef(null);

  useEffect(() => {
    // Define the animation function
    animateFnRef.current = (mainTicker) => {
      if (mainTicker) {
        mainTicker.x -= 0.1;
        mainTicker.settle(mainTicker.x);
        animationRef.current = window.requestAnimationFrame(
          () => animateFnRef.current(mainTicker)
        );
        requestId.current = animationRef.current;
      }
    };

    const pause = () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
        requestId.current = null;
      }
    };

    // Delay our logic to ensure Flickity has initialized
    const timeoutId = setTimeout(() => {
      const mainTicker = flickityRef.current?.flkty;
      if (mainTicker && animateFnRef.current) {
        animateFnRef.current(mainTicker);

        mainTicker.on('dragStart', pause);
        mainTicker.on('dragEnd', () => {
          if (animateFnRef.current) {
            animateFnRef.current(mainTicker);
          }
        });
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
