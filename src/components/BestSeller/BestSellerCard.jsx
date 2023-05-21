import React from 'react';

const BestSellerCard = ({single}) => {
    const {name,image,price,rating } = single;
    return (
        <div className="bg-base-100 shadow-xl w-11/12 gap-20 my-10">
            <figure><img className='w-full h-72' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-bold'>Price: ${price}</p>
                <div className="card-actions justify-between">
                    <button className='font-bold'>Rating: {rating}</button>
                    <button className="btn btn-primary bg-[#8bc34a] border-none">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BestSellerCard;