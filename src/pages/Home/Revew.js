import React from 'react';

const Revew = ({review}) => {
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          
            <p>{review.revew}</p>
          <div className="flex items-center mt-10">
                <div>
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}</h4>
                    <h4 className='text-xl'>{review.country}</h4>
                </div>
          </div>
        </div>
      </div>
    );
};

export default Revew;