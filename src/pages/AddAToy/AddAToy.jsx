import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../authProvider/AuthProvider';
const AddAToy = () => {
    const {user}= useContext(AuthContext);
    console.log(user)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div className='bg-yellow-200 p-10 container mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <input type="text" placeholder="Type here" className="input w-full max-w-xs" {...register("name")} />
                <input {...register("email", { required: true })} />

                <input type="submit" /> */}


                <div className=" bg-base-200">
                    <div className="">

                        <div className="card bg-base-100">
                            <div className="card-body">
                               

                                 
                                

                                    
                                        <input type="hidden" defaultValue={user?.displayName} {...register("userName")} />
                                 
                                        {/* <input type="hidden" defaultValue={user?.email} {...register("email")} /> */}
                                 
                               

                                <div className='flex gap-3'>

                                    <div className='w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <select {...register("category")} className="select w-full border-2 border-gray-100">
                                            <option value="female">female</option>
                                            <option value="male">male</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price" className="input input-bordered"  {...register("price")} />
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="Rating" className="input input-bordered" {...register("rating")} />
                                        
                                    </div>
                                
                              
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="text" placeholder="Quantity" className="input input-bordered" {...register("quantity")} />
                                        
                                    </div>
                                </div>
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <textarea className='textarea border-2 border-gray-200' name="" id="" cols="3" rows="3"  {...register("description")}></textarea>
                                        
                                    </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
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