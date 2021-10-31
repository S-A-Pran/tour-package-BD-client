import React, { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    fetch(`https://bloodcurdling-werewolf-39877.herokuapp.com/myorders/${user.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))

    return (
        <div className="mb-5">
            <h3 className="header py-5">Your Orders</h3>
            <div>
                <div className="container p-3 d-flex text-dark align-items-center justify-content-between">
                        <div>
                            <h4>Package</h4>
                        </div>
                        <div>
                            <h4>Order Status</h4>
                        </div>
                        <div>
                            <h4>Option</h4>
                        </div>
                </div>
                {
                    orders.map(order=> <Orders key={order._id} order={order}></Orders>)
                }
            </div>
        </div>
    );
};

export default MyOrders;