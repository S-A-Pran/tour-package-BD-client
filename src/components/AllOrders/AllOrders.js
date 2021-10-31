import React from 'react';
import useAuth from '../../Hook/useAuth';

const AllOrders = ({order}) => {
    const {user} = useAuth();
    const {place, person, img, status, budget, name} = order;

    const handleApprove =()=>{

    }

    const handleDelete = () =>{
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            fetch(`https://bloodcurdling-werewolf-39877.herokuapp.com/myorders?search=${order._id}`,{
            method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                }
            })
        }
        else{
            alert('something went wrong try again!');
        }
    }

    return (
        <>
            {
                order?._id ? <div className="container my-2">
                <div className="p-3 d-flex bg-info align-items-center justify-content-between rounded">
                    <div className="rounded text-center">
                        <img src={img} width='80px' alt="" />
                        <h6 className="text-white">Place:  {place}</h6>
                        <h6 className="text-white">Person: {person}</h6>
                        <h6 className="text-white">Cost: {budget}</h6>
                        <h6 className="text-white">Ordered By: {name}</h6>
                    </div>
                    <h6 className="text-white">{status}</h6>
                    <div className="d-flex flex-column">
                        <button onClick={handleApprove} className="btn btn-success">Approve</button>
                        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div> : <h1 className="text-danger py-5">No Orders Found. Please Order First...</h1>
            }
        </>
    );
};

export default AllOrders;