import React from 'react';
// import { apiURL } from '../../apiURL';
import { ProductReviews } from '../../components/ProductReviews/ProductReviews.component';

export const ProductReviewsContainer = () => {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   const fetchReviewsByProductId = async () => {
  //     const response = await fetch(`${apiURL()}/reviews/4`);
  //     const reviewsProductData = await response.json();

  //     setReviews(reviewsProductData);
  //   };

  //   fetchReviewsByProductId();
  // }, [reviews]);
  const reviews = [
    {
      id: 1,
      name: 'Sophie Williams',
      description: `I read all the reviews on here to get an idea of what
      size I needed. I'm 140 and 5'4". Not curvy. Thought I
      should get 29 or 30. Based on reviews, I got a size 27.They were the quality, stiff jean material you used to
      get years ago. Since buying them, and wearing and
      washing them though, they have softened up
      drastically! `,
      rating: 4.5,
    },

    {
      id: 2,
      name: 'Vie',
      description: `I read all the reviews on here to get an idea of what
      size I needed. I'm 140 and 5'4". Not curvy. Thought I
      should get 29 or 30. Based on reviews, I got a size 27.They were the quality, stiff jean material you used to
      get years ago. Since buying them, and wearing and
      washing them though, they have softened up
      drastically! `,
      rating: 4.5,
    },

    {
      id: 3,
      name: 'Rostyslav',
      description: `I read all the reviews on here to get an idea of what
      size I needed. I'm 140 and 5'4". Not curvy. Thought I
      should get 29 or 30. Based on reviews, I got a size 27.They were the quality, stiff jean material you used to
      get years ago. Since buying them, and wearing and
      washing them though, they have softened up
      drastically! `,
      rating: 3.5,
    },

    {
      id: 4,
      name: 'Shravani',
      description: `I read all the reviews on here to get an idea of what
      size I needed. I'm 140 and 5'4". Not curvy. Thought I
      should get 29 or 30. Based on reviews, I got a size 27.They were the quality, stiff jean material you used to
      get years ago. Since buying them, and wearing and
      washing them though, they have softened up
      drastically! `,
      rating: 3.5,
    },

    {
      id: 5,
      name: 'Shravya',
      description: `I read all the reviews on here to get an idea of what
      size I needed. I'm 140 and 5'4". Not curvy. Thought I
      should get 29 or 30. Based on reviews, I got a size 27.They were the quality, stiff jean material you used to
      get years ago. Since buying them, and wearing and
      washing them though, they have softened up
      drastically! `,
      rating: 0.5,
    },
  ];
  return (
    <div>
      <ProductReviews AllReviews={reviews} />
    </div>
  );
};
