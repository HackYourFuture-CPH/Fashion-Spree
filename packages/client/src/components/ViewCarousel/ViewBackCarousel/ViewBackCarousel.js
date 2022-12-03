// import React, { useState, useEffect } from 'react';
// import './ViewCarousel.style.css';

// const ViewCarousel = () => {
//   const [image, setImage] = useState(0);

//   useEffect(() => {
//     if (image) {
//       setTimeout(() => setImage(image), []);
//     }
//   });

//   return (
//     <>
//       <p>cliked {image}</p>
//       <div className="ViewCarousel">
//         <button
//           type="button"
//           className="firstbutton"
//           onClick={() => setImage(image - 1)}
//         >
//           {' <'}
//         </button>
//         <button type="button" onClick={() => setImage(image + 1)}>
//           {' >'}
//         </button>
//       </div>
//     </>
//   );
// };

// export default ViewCarousel;

import React from 'react';
import PropTypes from 'prop-types';
import backArrow from '../../../assets/vectors/back-arrow.svg';
import './ViewBackCarousel.style.css';

export const ViewBackCarousel = ({ text, onClick }) => {
  return (
    <button className="go-back-Carousel" type="button" onClick={onClick}>
      <img src={backArrow} alt="arrow" />
      <span>{text}</span>
    </button>
  );
};

ViewBackCarousel.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
