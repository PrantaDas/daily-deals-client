import React from 'react';
import './OverView.css'
import g1 from '../Assets/Images/Overview/g1.jpg'
import g2 from '../Assets/Images/Overview/g2.jpg'
import g3 from '../Assets/Images/Overview/g3 (2).jpg'
import g4 from '../Assets/Images/Overview/g4.jpg'
import v1 from '../Assets/Images/Overview/v1.jpg'
import v2 from '../Assets/Images/Overview/v2.jpg'
import v3 from '../Assets/Images/Overview/v3.jpg'
import v4 from '../Assets/Images/Overview/v4.jpg'
import s1 from '../Assets/Images/Overview/s1 (1).jpg'
import s2 from '../Assets/Images/Overview/v2.jpg'
import s3 from '../Assets/Images/Overview/s3.jpg'

const OverView = () => {
    return (
        <div className='mt-5'>
            <p className='fs-2 text-primary fw-bolder my-3'>Overview</p>
            <div className='row container-fluid gy-5'>
                {/* FIRST    */}
                <div className='col-lg-4 shadow grains col-sm-12'>
                    <p className='fs-4 fw-bolder' style={{ color: '#ff006e' }}>Grains</p>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={g1} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <img src={g2} alt="" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={g3} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <img src={g4} alt="" />
                        </div>
                    </div>
                </div>

                {/* second */}
                <div className='col-lg-4 shadow grains col-sm-12'>
                    <p className='fs-4 fw-bolder' style={{ color: '#ff006e' }}>Spices</p>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <img src={s1} alt="" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={s2} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <img src={s3} alt="" />
                        </div>
                    </div>
                </div>
                {/* third */}
                <div className='col-lg-4 shadow grains col-sm-12'>
                    <p className='fs-4 fw-bolder' style={{ color: '#ff006e' }}>Vegetables</p>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={v1} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <img src={v2} alt="" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={v3} alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <img src={v4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;