import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='border rounded p-2'>
                <h4 className='text-xl font-bold'>Context api</h4>
                <p>In a react application we pass props top to down or parent to child. The context API makes it simple. By using context API we don't need to share props top to down.The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. </p>
            </div>
            <div className="border rounded p-2">
                <h4 className='text-xl font-bold'>Semantic tag.</h4>
                <p>
                HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.
                </p>
            </div>
            <div className="border rounded p-2">
                <h4 className='text-xl font-bold'>Inline block element</h4>
                <p>
                    Inline block element and inline element are almost similar.In inline element we can't use padding,margin and height or width.But inline block elements we can use padding margin.For create inline block element we have to declare display inline-block.
                </p>
            </div>
        </div>
    );
};

export default Blogs;