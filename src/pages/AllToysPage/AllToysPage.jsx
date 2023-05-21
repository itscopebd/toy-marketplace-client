import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysTabular from '../../components/ToysTabular/ToysTabular';

const AllToysPage = () => {

    const loadToys = useLoaderData();

    const [allToys, setAllToys] = useState(loadToys);
    const handleDeleteToy = (id) => {
        console.log(id)
    }
    console.log(allToys)

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
                            allToys.map(toy => <ToysTabular key={toy._id} toy={toy} handleDeleteToy={handleDeleteToy} toys={toy}></ToysTabular>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToysPage;