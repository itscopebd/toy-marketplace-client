import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Carousel from 'react-elastic-carousel';
import BestSellerCard from './BestSellerCard';
const BestSeller = () => {
    const [data, setData] = useState([])
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];
    useEffect(() => {
        fetch("https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/toys")
            .then(res => res.json()).then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className='my-10'>
            <h3 className='text-3xl font-bold text-center mb-10'>Best Sellers</h3>

            <Carousel itemsToShow={4} breakPoints={breakPoints}>
                {data.splice(0, 12).map(single => <BestSellerCard single={single} key={single.id}></BestSellerCard>)}
            </Carousel>

        </div>
    );
};

export default BestSeller;