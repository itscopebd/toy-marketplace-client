import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const detailsData = useLoaderData();
    const { _id, SubCategory, image, price, quantity, rating, description,name } = detailsData;
    return (
        <div className='container mx-auto my-16'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-96' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                        <p>Rating: {rating}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;