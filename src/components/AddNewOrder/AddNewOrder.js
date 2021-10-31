import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewOrder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://bloodcurdling-werewolf-39877.herokuapp.com/packages',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Added Successfully');
            }
            else{
                alert('Something went wrong! Try again');
            }
        })
    };
    return (
        <div className="container">
            <h3 className='header py-5'>Add New Package </h3>

            <form className='p-5 mb-5 rounded bg-info' onSubmit={handleSubmit(onSubmit)}>
                <h3 className="bg-success p-2 text-white rounded-pill text-center">Enter Informations Carefully</h3>
                <label htmlFor="exampleInputName1" className="form-label">Place Name</label>
                <input placeholder="Enter Name of the Place" id="exampleInputName1" className="form-control" {...register("place", { required: true })} />

                <label htmlFor="exampleInputEmail1" className="form-label">Image Url</label>
                <input placeholder="Enter Image Url of place" id="exampleInputEmail1" className="form-control" {...register("img", { required: true })} />

                <label htmlFor="exampleInputQuant1" className="form-label">Duration</label>
                <input id="exampleInputQuant1" placeholder='Enter Duration of tour' className="form-control" {...register("duration", { required: true })} />

                <label htmlFor="exampleInputPhone1" className="form-label">Person Quantity</label>
                <input className="form-control" id="exampleInputPhone1" placeholder='Enter Person Quantity' {...register("person", { required: true })} />

                <label htmlFor="exampleInputBudget1" className="form-label">Budget</label>
                <input className="form-control" id="exampleInputBudget1" placeholder='Enter Budget' {...register("budget", { required: true })} />

                <label htmlFor="exampleInputAdress1" className="form-label">Place Description</label>
                <textarea className="form-control" id="exampleInputAdress1" placeholder='Enter Description of the place' {...register("detail", { required: true })} />
                
                <div className="text-center py-4">
                <input className='btn btn-success fw-bold py-2 text-center' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddNewOrder;