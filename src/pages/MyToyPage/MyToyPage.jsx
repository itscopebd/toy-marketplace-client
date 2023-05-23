import React, { useContext, useEffect, useState } from 'react';
import MyToysTabular from '../../components/myToysTabular/myToysTabular';
import { AuthContext } from '../../authProvider/AuthProvider';
import Swal from 'sweetalert2';


const MyToyPage = () => {
    // const loadToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const handleDeleteToy = (id) => {
        const url = `https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/del/${id}`;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(url, {
                    method: "DELETE"
                })
                    .then(result => result.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remening = myToys.filter(toy => toy._id !== id);
                            setMyToys(remening)
                        }
                    })

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/mytoys?email=${user?.email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handleLowPrice=()=>{
        fetch("https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/low")
        .then(res=>res.json())
        .then(data=>{
            setMyToys(data)
        })
    }

    const handleHightPrice=()=>{
        fetch("https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/high")
        .then(res=>res.json())
        .then(data=>{
            setMyToys(data)
        })
    }
    return (
        <div className='container mx-auto my-5'>
            <div className='my-5 flex justify-end gap-5 items-center'>
                <p className='text-3xl'>Sort By:</p>
                <div>
                <button className='btn mr-3' onClick={handleLowPrice}>Low Price</button>
                <button className='btn' onClick={handleHightPrice}>High Price</button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            myToys?.map(toy => <MyToysTabular key={toy._id} toy={toy} handleDeleteToy={handleDeleteToy}></MyToysTabular>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToyPage;