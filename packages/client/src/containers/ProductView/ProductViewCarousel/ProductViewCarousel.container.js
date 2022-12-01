import { ViewBackCarousel } from '../../../components/ViewCarousel/ViewBackCarousel/ViewBackCarousel';
import { ViewAfterCarousel } from '../../../components/ViewCarousel/ViewForwadCarousel/ViewAfterCarousel';
import React, { useState } from 'react';

export const ProductViewCarousel = () => {
  const images = [
    'https://source.unsplash.com/random/100x100',
    'https://source.unsplash.com/random/120x100',
    'https://source.unsplash.com/random/130x100',
    'https://source.unsplash.com/random/140x100',
    'https://source.unsplash.com/random/150x100',
    'https://source.unsplash.com/random/160x100',
  ];

  const [prevSlide, setPrevSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex(prevSlide);
    const newPointer =
      setCurrentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setPrevSlide({ setCurrentIndex: newPointer });
  };

  const goToNextSlide = () => {
    setCurrentIndex(nextSlide);
    const newPointer =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setNextSlide({ currentIndex: newPointer });
  };

  return (
    <>
      <img
        src={images[currentIndex]}
        alt={currentIndex}
        width="30px"
        height="30px"
      />
      <ViewBackCarousel className="leftArrow" onClick={goToPrevSlide} />
      <ViewAfterCarousel className="rightArrow" onClick={goToNextSlide} />
    </>
  );
};
