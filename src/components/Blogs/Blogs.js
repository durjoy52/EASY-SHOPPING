import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='border rounded p-2'>
                <h4 className='text-xl font-bold'>Context api</h4>
                <p>In a react application we pass props top to down or parent to child. The context API makes it simple. By using context API we don't need to share props top to down.The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. </p>
            </div>
            <div className="border rounded p-2">
                <h3>Semantic tag.</h3>
            </div>
        </div>
    );
};

export default Blogs;