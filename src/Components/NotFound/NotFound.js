import React from 'react';
import './NotFound.css'
import notfound2 from '../Assets/Images/NotFound/404 Error with a cute animal-cuate.svg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container w-100'>
            <div className='not-found mx-auto'>
                <img src={notfound2} alt="" />
            </div>
            <div>
                <h4 className='text-primary fw-bold'>Sorry the content are you looking for is not found...</h4>
            </div>
            <div>
                <Link className='fw-bolder text-success' to='/'>Go Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;