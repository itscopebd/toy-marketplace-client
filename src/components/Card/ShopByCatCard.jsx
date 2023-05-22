import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCatCard = ({ single }) => {
    console.log(single)
    const {_id,name,image,price,rating } = single;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-72' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-bold'>Price: ${price}</p>
                <div className="card-actions justify-between">
                    <button className='font-bold'>Rating: {rating}</button>
                    <Link to={`/details/${_id}`}><button className='btn btn-primary bg-[#8bc34a] border-none' >View Details</button>  </Link>
                </div>
            </div>
        </div>
    );
};


export default ShopByCatCard;