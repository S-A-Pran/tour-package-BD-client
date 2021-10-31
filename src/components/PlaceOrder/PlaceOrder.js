import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PlaceOrder = () => {
    const [ packages, setPackages] = useState({});
    const {user} = useAuth();
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    useEffect(()=>{
        fetch(`https://bloodcurdling-werewolf-39877.herokuapp.com/packages/${id}`)
        .then(res=> res.json())
        .then(data => setPackages(data))
    },[])

    const ordered = {
        place: packages.place,
        img: packages.img,
        duration: packages.duration,
        person: packages.person,
        detail: packages.detail,
        budget: packages.budget
    }

    const onSubmit = data => {
        console.log(data);
        data.status = 'pending';

        const userPackages = {...ordered, ...data};
        const proceed = window.confirm("Confirm to order?");
        if(proceed){
            fetch(`https://bloodcurdling-werewolf-39877.herokuapp.com/order/${id}`,{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userPackages)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('Order Placed Successfully');
                }
                else{
                    alert('Failed try again');
                }
            })
        }
    };
    
    console.log(id);

    return (
        <div className="container">
            <h3 className="header py-4">Order Form</h3>
            <form className="bg-info p-5 mb-4 rounded" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="bg-success text-white p-2 rounded-pill text-center">Fill Up Carefully</h3>
                <label htmlFor="exampleInputName1" className="form-label">Name</label>
                <input id="exampleInputName1" className="form-control" value={user?.displayName} {...register("name", { required: true })} />

                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input id="exampleInputEmail1" className="form-control" value={user?.email} {...register("email", { required: true })} />

                <label htmlFor="exampleInputQuant1" className="form-label">Quantity</label>
                <input id="exampleInputQuant1" placeholder='Enter Quantity' className="form-control" type="number" {...register("Quantity", { required: true, min: 1, max: 50 })} />

                <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                <input className="form-control" id="exampleInputPhone1" placeholder='Enter phone number' {...register("phone", { required: true })} />

                <label htmlFor="exampleInputAdress1" className="form-label">Address</label>
                <textarea className="form-control" id="exampleInputAdress1" placeholder='Enter your address' {...register("address", { required: true })} />
                <div className="text-center py-3">
                    <input className="btn btn-success fw-bold" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default PlaceOrder;