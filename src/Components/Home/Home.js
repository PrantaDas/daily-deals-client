import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import OverView from '../OverView/OverView';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OverView></OverView>
            <Items></Items>
        </div>
    );
};

export default Home;