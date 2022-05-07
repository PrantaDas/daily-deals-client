import React from 'react';
import './OverView.css'

const OverView = () => {
    return (
        <div>
            <p className='fs-2 text-primary fw-bolder my-3'>Overview</p>
            <div className='mt-5 overview-container container'>
                <div className="col-md-10 ">
                    <div className="row gx-5">
                        <div className="col-xl-3 col-lg-6">
                            <div className="card l-bg-cherry">
                                <div className="card-statistic-3 p-4">
                                    <div className="card-icon card-icon-large">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">New Stocks</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">3,243</h2>
                                        </div>
                                        <div className="col-4 text-right">
                                            <span>
                                                12.5% <i className="fa fa-arrow-up"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="progress mt-1 "
                                        data-height="8"
                                        style={{ height: "8px" }}
                                    >
                                        <div
                                            className="progress-bar l-bg-cyan"
                                            role="progressbar"
                                            data-width="25%"
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "25%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card l-bg-blue-dark">
                                <div className="card-statistic-3 p-4">
                                    <div className="card-icon card-icon-large">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">Traders</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">15.07k</h2>
                                        </div>
                                        <div className="col-4 text-right">
                                            <span>
                                                9.23% <i className="fa fa-arrow-up"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="progress mt-1 "
                                        data-height="8"
                                        style={{ height: "8px" }}
                                    >
                                        <div
                                            className="progress-bar l-bg-green"
                                            role="progressbar"
                                            data-width="25%"
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "25%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card l-bg-green-dark">
                                <div className="card-statistic-3 p-4">
                                    <div className="card-icon card-icon-large">
                                        <i className="fas fa-ticket-alt"></i>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">Trade Copleted</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">578</h2>
                                        </div>
                                        <div className="col-4 text-right">
                                            <span>
                                                10% <i className="fa fa-arrow-up"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="progress mt-1 "
                                        data-height="8"
                                        style={{ height: "8px" }}
                                    >
                                        <div
                                            className="progress-bar l-bg-orange"
                                            role="progressbar"
                                            data-width="25%"
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "25%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card l-bg-orange-dark">
                                <div className="card-statistic-3 p-4">
                                    <div className="card-icon card-icon-large">
                                        <i className="fas fa-dollar-sign"></i>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">Revenue Today</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">50000tk</h2>
                                        </div>
                                        <div className="col-4 text-right">
                                            <span>
                                                2.5% <i className="fa fa-arrow-up"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="progress mt-1 "
                                        data-height="8"
                                        style={{ height: "8px" }}
                                    >
                                        <div
                                            className="progress-bar l-bg-cyan"
                                            role="progressbar"
                                            data-width="25%"
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "25%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;