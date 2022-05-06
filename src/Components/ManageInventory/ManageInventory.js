import React, { useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";


const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])
    return (
        <div>
            <table className="table table-success">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price} tk</td>
                                    <td>{product.quantity}</td>
                                    <td><button type="button" className="btn btn-link"><AiFillDelete/></button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;