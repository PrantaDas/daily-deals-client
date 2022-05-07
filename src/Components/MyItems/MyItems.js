import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {

        const email = user.email;
        console.log(email);
        const url = `http://localhost:5000/products?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyItems(data);
            })

    }, [user]);
    return (
        <div>
            <p>this is my item:{myItems.length}</p>
        </div>
    );
};

export default MyItems;