import React from 'react';
import Baner from './Baner';
import Dendel from './Dendel';
import Info from './Info';
import MakeApiment from './MakeApiment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Baner></Baner>
            <Info></Info>
            <Services></Services>
            <Dendel></Dendel>
            <MakeApiment></MakeApiment>
        </div>
    );
};

export default Home;