import React from 'react';
import { Link } from 'react-router-dom';

const MyToysTabular = ({ toy, handleDeleteToy }) => {
    const {_id,image,name,SubCategory,price,quantity,}=toy;
    return (
        <tr>
            <td> <img className='rounded-lg' style={{ width: '150px', height: "100px" }} src={image} alt="" /> </td>
            <td> <h3>{name}</h3> </td>
            <td> <h3>{SubCategory}</h3> </td>

            <td> <h3>{price}</h3> </td>
            <td> <h3>{quantity}</h3> </td>

            <td>
                <Link to={`/update/${toy?._id}`}><button className='btn btn-sm mr-3 bg-[#8bc34a]' >Update</button>  </Link>
                {/* <Link to={`/details/${toy?._id}`}><button className='btn btn-sm mr-3' >View Details</button>  </Link> */}
                <button className='btn btn-sm bg-[#ffe6fa]' onClick={() => handleDeleteToy(_id)}>X</button>

            </td>
        </tr>



    );
};

export default MyToysTabular;