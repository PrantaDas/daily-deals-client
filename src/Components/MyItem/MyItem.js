import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyItem = ({item,setIsLoading}) => {
    const {name,price,quantity,description,image,_id,supplier}=item;

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure to delete ?');
        if (proceed) {
            const url = `https://sleepy-wildwood-12378.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsLoading(false);
                })
        }
    }
    return (
        <div className='col-lg-4 col-sm-12'>
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
                    <Button onClick={()=>handleDeleteItem(_id)} variant="primary">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyItem;