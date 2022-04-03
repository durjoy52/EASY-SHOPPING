import React from 'react';

const Review = (props) => {
    const{name,img,comment,rating} =props.review
    return (
        <div className='flex border rounded gap-4 items-center p-2 my-6 w-80'>
            <div className='w-1/3'>
                <img className='rounded'  src={img} alt="" />
            </div>
            <div>
                <p className='text-xl font-bold'>name: {name}</p>
                <p>review: {comment}</p>
                <p>rating: ⭐{rating}</p>
            </div>
        </div>
    );
};

export default Review;