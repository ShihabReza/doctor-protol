import React from 'react';
import chair from '../../assets/images/chair.png'

const Baner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="max-w-sm rounded-lg shadow-8xl" />
            <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary-500">Get Started</button>
            </div>
        </div>
      </div>
    );
};

export default Baner;