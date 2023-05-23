import React from 'react';

const Card = ({ single }) => {
    console.log(single)
    const {name,image,price,rating } = single;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-72' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-bold'>Price: ${price}</p>
                <div className="card-actions justify-between">
                    <button className='font-bold'>Rating: {rating}</button>
                    <button className="btn bg-[#8bc34a] border-none">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;