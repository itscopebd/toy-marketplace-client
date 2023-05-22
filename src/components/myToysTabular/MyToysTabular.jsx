import React from 'react';
import { Link } from 'react-router-dom';

const MyToysTabular = ({ toy }) => {
    return (
        <tr>
            <td> <img className='rounded-lg' style={{ width: '150px', height: "100px" }} src={toy?.image} alt="" /> </td>
            <td> <h3>{toy?.name}</h3> </td>
            <td> <h3>{toy?.SubCategory}</h3> </td>

            <td> <h3>{toy?.price}</h3> </td>
            <td> <h3>{toy?.quantity}</h3> </td>

            <td>
                {/* <Link to={`/update/${toy?._id}`}><button className='btn btn-sm mr-3' >Update</button>  </Link> */}
                <Link to={`/details/${toy?._id}`}><button className='btn btn-sm mr-3' >View Details</button>  </Link>
                {/* <button className='btn btn-danger btn-sm' onClick={()=>handleDeleteToy(toy.id)}>X</button>  */}

            </td>
        </tr>



    );
};

export default MyToysTabular;