import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const FeatureProduct = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/toys")
            .then(res => res.json()).then(data => {
                setData(data)
            })
    }, [])

    console.log(data)

    return (
        <div className='my-10'>
            <h3 className='text-3xl font-bold text-center'>Featured Product</h3>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 my-20 gap-5'>
            {
                data.splice(0,12).map(single=><Card single={single}></Card>)
            }
        </div>
        </div>
    );
};

export default FeatureProduct;