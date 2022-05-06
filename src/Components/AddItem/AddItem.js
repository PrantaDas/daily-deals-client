import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const email = event.target.email.value;
        console.log(name, image, description, price, quantity, supplier, email);

        const product = {
            name: name,
            image: image,
            description: description,
            price: price,
            quantity: quantity,
            supplier: supplier,
            email: email
        };

        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleAddItem} className='w-full shadow p-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Product Name" required />
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
                    <Form.Control name='supplier' type="text" placeholder="Enter Supplier Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' value={user?.email} type="text" placeholder="Enter Product Name" readOnly disabled required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;