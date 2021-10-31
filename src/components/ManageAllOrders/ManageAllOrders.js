import React, { useState } from 'react';
import AllOrders from '../AllOrders/AllOrders';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    fetch(`https://bloodcurdling-werewolf-39877.herokuapp.com/allorders`)
        .then(res => res.json())
        .then(data =>  setOrders(data))
    return (
        <div>
            <h3 className="header py-5">All Orders</h3>
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
            <div>
                {
                    orders.map(order => <AllOrders key={order._id} order={order}></AllOrders>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;