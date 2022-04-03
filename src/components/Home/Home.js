import React from 'react';
import head from '../../images/headphone.jpg';
const Home = () => {
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
                    <h3 className='text-3xl text-center'>Customer Reviews(6)</h3>
                </div>
        </div>
    );
};

export default Home;