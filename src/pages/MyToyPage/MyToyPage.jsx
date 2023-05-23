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

    console.log(myToys)

    return (
        <div className='container mx-auto my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
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