import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState('');
    const [reload, setReload] = useState(true);
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })
    }, [reload]);

    const handleDelivered = () => {
        console.log('clicked');
        let newQuantity;
        let quantity = parseInt(item.quantity);
        newQuantity = quantity - 1;
        const updatedItem = {
            quantity: newQuantity
        };

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReload(!reload)
            })
    }

    const handleUpdateQuantity = (event) => {
        event.preventDefault();
        const newQuantity = parseInt(event.target.quantity.value);
        console.log(newQuantity);
        const oldQuantity = parseInt(item.quantity);
        let updatedQuantity;
        updatedQuantity = newQuantity + oldQuantity;
        console.log(updatedQuantity)
        const updatedItem = {
            quantity: updatedQuantity
        };

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReload(!reload)
                event.target.reset();
            })
    }
    return (
        <div className='row g-5 container mt-5 '>
            <div className='d-flex justify-content-center col-lg-8 col-sm-12'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <p className='fw-bolder'>Price:{item.price}tk</p>
                        <p className='fw-bolder'>Qty:{item.quantity}</p>
                        <p className='fw-bolder'>Supplier:{item.supplier}</p>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button onClick={handleDelivered} variant="primary">Delivered</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-4 col-sm-12 update'>
                <p className='text-primary fs-3 fw-bolder p-3'>Update Product Quantity</p>
                <form onSubmit={handleUpdateQuantity} className='mt-5'>
                    <input type="text" autoComplete='off' name="quantity" id="" required placeholder='Put Quantity' />
                    <input className='btn-primary' type="submit" value="Update" />
                </form>
                <p style={{ color: "#e76f51" }} className='p-5 fw-bold'> Note:The updated Quanity will be added to the stock.To check your stock Please visit the Inventory page...</p>
            </div>
        </div>
    );
};

export default ItemDetail;