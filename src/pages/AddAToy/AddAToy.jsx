import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../authProvider/AuthProvider';
import Swal from 'sweetalert2';
const AddAToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const subCategory = [
        "Sports Cars",
        "Truck",
        "Regular Car",
        "Mini Fire Truck",
        "Mini Police Car"


    ]

    const onSubmit = data => {

        console.log(data)
        fetch("https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/addtoy", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(result => {
                if (result.status == 200) {
                    Swal.fire(
                        'Toy added',
                        'Successfull'
                    )
                }
            }).catch(err => {

            })
    };
    return (

        <div className='bg-[#ffe6fa] p-10 container mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" bg-base-200">
                    <div className="">

                        <div className="card bg-base-100">
                            <div className="card-body">

                                <h4 className='text-3xl font-bold text-center'>Add Toy</h4>
                                {/* <input type="hidden" defaultValue={user?.displayName} {...register("userName")} />

                                <input type="hidden" defaultValue={user?.email} {...register("email")} /> */}



                                <div className='md:flex gap-3'>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" readOnly className="input input-bordered" defaultValue={user?.email}  {...register("email")} required />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" readOnly className="input input-bordered" defaultValue={user?.displayName}  {...register("sellerName")} required />
                                    </div>

                                </div>



                                <div className='md:flex gap-3'>
                                    <div className='w-full md:w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <select {...register("SubCategory")} className="select w-full border-2 border-gray-100" required>
                                            {
                                                subCategory.map(subCat => <option value={subCat}>{subCat}</option>)
                                            }

                                        </select>
                                    </div>

                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" placeholder="Price" className="input input-bordered"  {...register("price")} required />
                                    </div>

                                </div>


                                <div className='md:flex gap-3'>
                                <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" placeholder="Product Name" className="input input-bordered"  {...register("name")} required />
                                    </div>
                                    
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Image Url</span>
                                        </label>
                                        <input type="url" placeholder="Image Url" className="input input-bordered"  {...register("image")} required />
                                    </div>

                                </div>
                                <div className='md:flex gap-3'>

                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="Rating" className="input input-bordered" {...register("rating")} required />

                                    </div>


                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="number" placeholder="Quantity" className="input input-bordered" {...register("quantity")} required />

                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className='textarea border-2 border-gray-200' name="" id="" cols="3" rows="3"  {...register("description")} required></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-[#8bc34a] border-none">Add Toy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>






        </div>

    );
};

export default AddAToy;