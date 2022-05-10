import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg'
import merker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-10">
            <Infocard bgColor='bg-gradient-to-r from-secondary to-primary' drisciption='Lorem Ipsum is simply dummy text of the pri' cardTitle='Opening Hours' img={clock}></Infocard>
            <Infocard bgColor='bg-accent' drisciption='Brooklyn, NY 10036, United States' cardTitle='Visit our location' img={merker}></Infocard>
            <Infocard bgColor='bg-gradient-to-r from-secondary to-primary' drisciption='+000 123 456789' cardTitle='Contact us now' img={phone}></Infocard>
        </div>
    );
};

export default Info;