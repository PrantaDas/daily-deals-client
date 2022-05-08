import React, { useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Item.css'

const Item = ({ product,isLoading }) => {
    const { name, price, image, description, supplier, quantity,_id } = product;
    return isLoading ? (<Spinner animation="border" variant="primary" />) : (
        <div className='col-lg-4 col-sm-12' style={{}}>
            <Card className='p-3 item-card' style={{ width: '18rem',backgroundColor:'#C7D9E5' }}>
                <Card.Img  variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p className='fw-bolder'>Price:{price}tk</p>
                    <p className='fw-bolder'>Qty:{quantity}</p>
                    <p className='fw-bolder'>Supplier:{supplier}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/inventory/${_id}`}><Button variant="primary">Update</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;