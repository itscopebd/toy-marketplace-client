import React, { useContext, useEffect, useState } from 'react';
import MyToysTabular from '../../components/myToysTabular/myToysTabular';
import { AuthContext } from '../../authProvider/AuthProvider';


const MyToyPage = () => {
    // const loadToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
   
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/mytoys?email=${user?.email}`,{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })
            .then(res => res.json())
            .then(data =>setMyToys(data))
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
                            myToys?.map(toy => <MyToysTabular key={toy._id} toy={toy} toys={toy}></MyToysTabular>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToyPage;