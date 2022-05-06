import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../Assets/Images/Banner/pexels-negative-space-34577 (1).jpg';
import banner2 from '../Assets/Images/Banner/pexels-aleksandar-pasaric-3423860.jpg';
import banner3 from '../Assets/Images/Banner/pexels-tima-miroshnichenko-7567565 (1).jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Simple And Easy Trading</h3>
                        <p>We offer you to a simple and easier way to trading.Just stock and trade...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color:'#f1faee'}}>Way much better than selling in marketplace</h3>
                        <p style={{color:'#caf0f8'}}>Don't need much effort like marketplace.It both reduce time and complexity</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Ensurity of a fair trading and more profit</h3>
                        <p>We offer you a fair trading environment that will ensure much profitable trading than before</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;

{/* <div className='mx-5 mt-5 col d-flex flex-column col-sm-12 align-items-start'> 
<h1 className='text-light fs-1'>A Large Stock </h1>
<h1 className='text-light fs-1'>Of Groceries</h1>
<p className='banner-details'>Here we offer you a large scale of enhnanced facilities to stock your goods and do a fair trade.Easily stock your items and make a quick trade..</p>
</div>
<div className='col col-sm-12'>
<img src={bannerImg} alt="" />
</div> */}