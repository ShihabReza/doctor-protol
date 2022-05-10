import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

import Revew from './Revew';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            revew:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country:'California',

        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            revew:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country:'California',

        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            revew:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country:'California',

        },
    ]
    return (
        <section className="mt-20">
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-2xl text-primary">Testimonial</h4>
                    <h1 className="text-4xl">What Our Patients Says</h1>
                </div>
                <div>
                    <img style={{width:'192px',height:'156px'}} className='sm:w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 '>
                {
                    reviews.map(review=><Revew key={review._id} review={review}></Revew>)
                }
            </div>
        </section>
    );
};

export default Testimonial;