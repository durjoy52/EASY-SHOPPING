import React from 'react';
import useReviews from '../../hooks/useReviews';
import head from '../../images/headphone.jpg';
import Review from '../Review/Review';
const Home = () => {
    const [reviews] = useReviews()
    const firstReviews =reviews.slice(0,3)
    return (
        <div>
            <div className='flex justify-between my-4'>
                <div className="flex items-center justify-center">
                    <div >
                    <h1 className='text-6xl font-bold text-violet-600 mb-3'>Sound is life,enjoy life </h1>
                    <p className='text-4xl text-sky-600'>Get exclusive sound bar with up to 50% discount</p>
                    <button className='rounded-full bg-blue-400 px-4 py-3 text-white mt-4 hover:bg-blue-300 hover:text-black font-bold'>Live demo</button>
                    </div>
                </div>
                <div>
                    <img src={head} className='w-full rounded-xl' alt=""/>
                </div>
            </div>
                <div>
                    <h3 className='text-3xl text-center'>Customer Reviews({reviews.length})</h3>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            firstReviews.map(review => <Review review={review}></Review>)
                        }
                    </div>
                    <div className="flex justify-center"><button className='bg-violet-600 px-5 text-white rounded mb-2'>See All Reviews</button></div>
                </div>
        </div>
    );
};

export default Home;