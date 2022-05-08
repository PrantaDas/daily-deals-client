import React from 'react';
import Banner from '../Banner/Banner';
import Guides from '../Guides/Guides';
import Items from '../Items/Items';
import OverView from '../OverView/OverView';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OverView></OverView>
            <Items></Items>
            <Guides></Guides>
        </div>
    );
};

export default Home;