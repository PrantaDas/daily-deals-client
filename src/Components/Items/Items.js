import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items,setItems]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const url=`http://localhost:5000/products`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setItems(data);
            setIsLoading(false);
        })
    },[]);
    const products=items.slice(0,6);
    console.log(products);
    return (
        <div className='container-fluid mt-3'>
            <p style={{color:"#ff006e"}} className='fs-3 fw-bolder footer-title'>Inventory Items</p>
            <hr />

            <div className='row container-fluid items-container g-5 mt-3'>
                {
                    products.map(product=><Item key={product._id} product={product} isLoading={isLoading}></Item>)
                }
            </div>
            <div className='mt-5'>
                <Link to='/manageinventories'><Button variant='primary'>Manage Inventories</Button></Link>
            </div>
        </div>
    );
};

export default Items;