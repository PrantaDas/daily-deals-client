import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(() => {

        const getMyItems = async () => {
            console.log(user);
            const email = user.email;
            console.log(email);
            const url = `https://sleepy-wildwood-12378.herokuapp.com/myitems?email=${email}`;
            const { data } = await axios.get(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyItems(data);
            console.log(data);
        }
        getMyItems();

    }, [user]);

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
                    const remaining = myItems.filter(pd => pd._id !== id);
                    setMyItems(remaining);
                    // setIsLoading(false);
                })
        }
    }
    return (
        <div className='container'>
            {
                myItems.length ? <p>You have total {myItems.length} Items</p>:<h3 className='fw-bolder text-primary mb-5'>Please Add Some Product first</h3>
            }

            <div className='row g-5'>
            {
                myItems.map(item=>{
                    return(<div key={item._id} className='col-lg-4 col-sm-12'>
                    <Card className='p-3 item-card' style={{ width: '18rem',backgroundColor:'#C7D9E5' }}>
                        <Card.Img  variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <p className='fw-bolder'>Price:{item.price}tk</p>
                            <p className='fw-bolder'>Qty:{item.quantity}</p>
                            <p className='fw-bolder'>Supplier:{item.supplier}</p>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button onClick={()=>handleDeleteItem(item._id)} variant="primary">Delete</Button>
                        </Card.Body>
                    </Card>
                </div>)
                })
            }
            </div>
        </div>
    );
};

export default MyItems;