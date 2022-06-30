import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from './Button';

const Banner = () => {
        return (
                <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                                <div className='mr-10'>
                                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <Button>GET STARTED</Button>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;