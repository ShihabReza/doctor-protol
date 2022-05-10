import React from 'react';
import Baner from './Baner';
import Dendel from './Dendel';
import Footer from './Footer';
import Info from './Info';
import MakeApiment from './MakeApiment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Baner></Baner>
            <Info></Info>
            <Services></Services>
            <Dendel></Dendel>
            <MakeApiment></MakeApiment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;