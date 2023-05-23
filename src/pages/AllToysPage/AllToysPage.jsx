import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysTabular from '../../components/ToysTabular/ToysTabular';

const AllToysPage = () => {

    const loadToys = useLoaderData();

    const [allToys, setAllToys] = useState(loadToys);
    const [searchText, setSearchText] = useState([])

    const searchHandle = () => {
        fetch(`http://localhost:5000/search/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }

    // console.log(loadToys)
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
                        {/* search  */}
                        <div className='my-10'>
                            <div className='text-center flex justify-center'>
                                <div className="form-control">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search…" className="input input-bordered focus:input-bordered-none" onChange={(e) => setSearchText(e.target.value)} />
                                        <button className="btn btn-square bg-[#8bc34a] border-none" onClick={searchHandle}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            allToys.map(toy => <ToysTabular key={toy._id} toy={toy} toys={toy}></ToysTabular>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToysPage;