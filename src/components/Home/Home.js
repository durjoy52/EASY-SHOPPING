import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import head from '../../images/headphone.jpg';
import Review from '../Review/Review';
const Home = () => {
    const [reviews] = useReviews();
    const firstReviews =reviews.slice(0,3);
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between my-4'>
                <div className="flex items-center justify-center">
                    <div >
                    <h1 className='text-6xl font-bold text-violet-600 mb-3'>Sound is life,enjoy life </h1>
                    <p className='text-4xl text-sky-300'>Get exclusive sound bar with up to 50% discount</p>
                    <button className='rounded-full hover:bg-blue-300 px-4 py-3 hover:text-white mt-4 bg-blue-200 text-sky-700 font-bold'>Live demo</button>
                    </div>
                </div>
                <div>
                    <img src={head} className='w-full rounded-xl' alt=""/>
                </div>
            </div>
                <div>
                    <h3 className='text-3xl text-center'>Customer Reviews({reviews.length})</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                        {
                            firstReviews.map(review => <Review key={review.id} review={review}></Review>)
                        }
                    </div>
                    <div className="flex justify-center"><button className='bg-violet-600 px-5 text-white rounded mb-2' onClick={()=>navigate('/reviews')}>See All Reviews</button></div>
                </div>
        </div>
    );
};

export default Home;