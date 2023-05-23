import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';
const ErrorPage = () => {
    const error=useRouteError();
    UseTitle("Error")
    console.log(error)
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img style={{width:"700px",height:"500px"}} src="https://i.ibb.co/tDxhs5q/Pu-Xip-AW3-AXUz-UJ4u-Yyx-PKC-1200-80.png" alt="" />
            <Link to="/"><button className='btn bg-[#8bc34a] border-none'>Back To Home</button></Link>
        </div>
    );
};


export default ErrorPage;