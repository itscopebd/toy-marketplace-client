import React from 'react';

const ToysTabular = ({ toy }) => {
    console.log(toy)
    return (

        <tbody>
            {
                toy.map(toy => {
                    return <>
                        <tr>
                            <td> <img className='rounded-lg' style={{width:'150px', height:"100px"}} src={toy.img} alt="" /> </td>
                            <td> <h3>{toy.name}</h3> </td>
                            <td> <h3>Sub Category</h3> </td>
                            <td> <h3>{toy.price}</h3> </td>
                            <td> <h3>200.00</h3> </td>
                            <td> 
                                <button>View</button> / 
                                <button>Edit</button> 
                            
                            </td>
                        </tr>
                    </>

                })

            }

        </tbody>

    );
};

export default ToysTabular;