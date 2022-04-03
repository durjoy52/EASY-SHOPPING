import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div className='md:grid grid-cols-3 justify-items-center'>
            {
                reviews.map(review=><Review review={review} key={review.id}></Review>)
            }
        </div>
    );
};

export default Reviews;