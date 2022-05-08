import React from 'react';
import './Footer.css'
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
const Footer = () => {
    return (
        <div className='w-100 mt-5 footer-container'>
            <div className='content my-4'>
                <h3 className='footer-title fw-bolder text-light' role='button'>Dailydeals.com</h3>
                <div className='d-flex justify-content-between w-50 mx-auto my-4'>
                    <p className='fw-bold text-light' role='button'>Home</p>
                    <p className='fw-bold text-light' role='button'>Inventory</p>
                    <p className='fw-bold text-light' role='button'>Blog</p>
                    <p className='fw-bold text-light' role='button'>About</p>
                    <p className='fw-bold text-light' role='button'>Contact</p>
                </div>
                <div className='w-25 d-flex justify-content-between mx-auto my-4'>
                    <p className='text-light p-2 rounded-circle border border-info' role='button'><FiFacebook /></p>
                    <p className='text-light p-2 rounded-circle border border-info' role='button'><FiInstagram /></p>
                    <p className='text-light p-2 rounded-circle border border-info' role='button'><FiTwitter /></p>
                </div>
                <p className='fw-light text-light'><small>Copyright &copy; 2022 all rights reserved | Powered by <span><FcLike /></span> Dailydeals.com</small></p>
            </div>
        </div>
    );
};

export default Footer;