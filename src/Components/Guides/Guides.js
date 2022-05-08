import React from 'react';
import './Guides.css'
import service from '../Assets/Images/NotFound/Product presentation-rafiki.svg'
import { FcApproval } from "react-icons/fc";

const Guides = () => {
    return (
        <div className='container mt-5'>
            <h2 className='fw-bold section-title footer-title' style={{color:'#f72585'}}>How Does the Trade Works</h2>
            <hr className='text-info' />

            <div className='row g-5'>
                <div className='col-lg-6 col-sm-12 service-image'>
                    <img src={service} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 pt-3'>
                    <div className='steps p-5 w-100' >
                    <div className='px-4 d-flex flex-column align-items-start justify-content-center'>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>First of all create an user account.</p>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>Then go the Add Item Setion</p>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>Provide your products informatiion to store</p>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>Conduct one to one trading among the traders</p>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>Easily customize your product collection</p>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>Restock your product anytime and get benifited</p>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>No need any physical storage cost and effort</p>
                        <p className='py-1'><span className='px-1'><FcApproval/></span>Make your trading virtual through us</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guides;