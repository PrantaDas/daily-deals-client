import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [quantity,setQuantity]=useState('');
    const [reload,setReload]=useState(true);
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
        }

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
                // setItem(data)
                
            })
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
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
    );
};

export default ItemDetail;