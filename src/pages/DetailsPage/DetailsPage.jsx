import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';

const DetailsPage = () => {
    const detailsData = useLoaderData();
    UseTitle("Details")
    console.log(detailsData)
    const { _id, SubCategory, image, price, quantity, rating, description,name } = detailsData;
    return (
        <div className='container mx-auto my-16'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-96' src={image} alt="Movie" /></figure>
                <div className="card-body flex-grow-0">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Seller Name: {detailsData?.sellerName}</h2>
                    <h2 className="card-title">Seller Email: {detailsData?.email}</h2>
                    <h2 className='font-bold'>Price: ${price}</h2>
                    <h2 className='font-bold'>Rating: {rating}</h2>
                   
                        
                        <h2 className='font-bold'>Quantity: {quantity}</h2>
                        <h2 className='font-bold'>{description}</h2>
                    
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;