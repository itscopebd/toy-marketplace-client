import React from 'react';

const ToysTabular = ({ toy }) => {
    console.log(toy)
    return (
       <>
       {
        toy.map(toy=>{
           return  <tr>
           <td> <img className='rounded-lg' style={{width:'150px', height:"100px"}} src={toy.image} alt="" /> </td>
           <td> <h3>{toy.name}</h3> </td>
           <td> <h3>Sub Category</h3> </td>
           <td> <h3>{toy.price}</h3> </td>
           <td> <h3>200.00</h3> </td>
           <td> 
               <button className='btn btn-sm mr-3'>View</button>  
               <button className='btn btn-danger btn-sm'>X</button> 
           
           </td>
       </tr>
        })
       }
       </>
    );
};

export default ToysTabular;