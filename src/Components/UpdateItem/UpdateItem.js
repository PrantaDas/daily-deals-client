import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [reload, setReload] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://sleepy-wildwood-12378.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })
    }, [reload]);

    const handleUpdateItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = parseInt(event.target.quantity.value) + parseInt(item.quantity);
        const supplier = event.target.supplier.value;
        const email = event.target.email.value;
        console.log(name, image, description, price, quantity, supplier, email);

        const product = {
            name: name,
            img: image,
            description: description,
            price: price,
            quantity: quantity,
            supplier: supplier,
            email: email
        };

        const url = `https://sleepy-wildwood-12378.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReload(!reload)
                event.target.reset();
                navigate('/manageinventories');
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleUpdateItem} className='w-full shadow p-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name='name' value={item.name} type="text" readOnly disabled placeholder="Enter Product Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control name='image' type="text" placeholder="Enter Image Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control name='description' type="text" placeholder="Enter Product Description" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control name='price' type="text" placeholder="Enter Product Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control name='quantity' type="text" placeholder="Enter Product Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Supplier</Form.Label>
                    <Form.Control name='supplier' value={item.supplier} type="text" placeholder="Enter Supplier Name" readOnly disabled required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' value={item?.email} type="text" placeholder="Enter Product Name" readOnly disabled required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateItem;