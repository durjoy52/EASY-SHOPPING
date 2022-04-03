import React from 'react';

const Review = (props) => {
    const{name,img,comment,rating} =props.review
    return (
        <div className='flex border rounded justify-between items-center p-4 my-6'>
            <div className='w-24'>
                <img className='rounded'  src={img} alt="" />
            </div>
            <div>
                <p className='text-xl font-bold'>name: {name}</p>
                <p>review: {comment}</p>
                <p>rating: {rating}</p>
            </div>
        </div>
    );
};

export default Review;