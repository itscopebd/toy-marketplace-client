import { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdatePage = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const getUpdateData=useLoaderData();

    console.log(getUpdateData);
    const {_id,SubCategory,image,price,quantity,rating,description,name}=getUpdateData;

    const subCategory=[
        "Sports Cars",
        "Truck",
        "Regular Car",
        "Mini Fire Truck",
        "Mini Police Car"
        
        
        ];


        console.log("description " + description)
   
    const onSubmit = data => {
        fetch(`https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/update/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(result => {
                console.log(result)
                if (result.status == 200) {
                    Swal.fire(
                        'Toy Updated',
                        'Successfull'
                    )
                }
            }).catch(err => {

            })
        console.log({data})
    };
    return (

        <div className='bg-[#ffe6fa] p-10 container mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" bg-base-200">
                    <div className="">

                        <div className="card bg-base-100">
                            <div className="card-body">

                                <h4 className='text-3xl font-bold text-center'>Update Toy</h4>
                                <input type="hidden" defaultValue={user?.displayName} {...register("userName")} />

                                <input type="hidden" defaultValue={user?.email} {...register("email")} />

                                <div className='md:flex gap-3'>

                                    <div className='md:w-1/2'>
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                      <select {...register("SubCategory")} className="select w-full border-2 border-gray-100" required >
                                        <option value={SubCategory} selected>{SubCategory}</option>
                                            {
                                                subCategory.map(subCat=><option value={subCat} key={subCat
                                                ._id}>{subCat}</option>)
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" className="input input-bordered"  {...register("name")} defaultValue={name} required />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" placeholder="Price" className="input input-bordered"  {...register("price")} defaultValue={price} required />
                                    </div>
                                    
                                </div>
                                <div className='md:flex gap-3'>
                                <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Image Url</span>
                                        </label>
                                        <input type="url" placeholder="Image Url" className="input input-bordered"  {...register("image")} defaultValue={image} required />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="Rating" className="input input-bordered" {...register("rating")} defaultValue={rating} required />

                                    </div>


                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="number" placeholder="Quantity" className="input input-bordered" {...register("quantity")} defaultValue={quantity} required />

                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className='textarea border-2 border-gray-200' name="" id="" cols="3" rows="3"  {...register("description")} required>  </textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn border-none bg-[#8bc34a]">Update Toy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>






        </div>

    );
};

export default UpdatePage;