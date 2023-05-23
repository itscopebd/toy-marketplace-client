import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct';
import BestSeller from '../../components/BestSeller/BestSeller';
import ShopByCatCard from '../../components/Card/ShopByCatCard';

import AOS from "aos";
import 'aos/dist/aos.css'
const HomePage = () => {
    const toys = useLoaderData();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const sportsCar=toys.filter(sportsCar=>sportsCar.subCatid==1)
    const regularCar=toys.filter(sportsCar=>sportsCar.subCatid==3)
    const truckCar=toys.filter(sportsCar=>sportsCar.subCatid==2)
    return (
        <div className=''>
            <Banner></Banner>



            <div className='container mx-auto my-10'>
            <h3 className='text-3xl font-bold text-center mb-10'>Shop By Category</h3>
                <Tabs>
                    <TabList>
                        <Tab>Sports Cars</Tab>
                        <Tab>Truck</Tab>
                        <Tab>Regular Car</Tab>
                    </TabList>

                    <TabPanel>
                       <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10' data-aos="fade-left">
                       {
                            sportsCar.splice(0, 4).map(single=><ShopByCatCard single={single}></ShopByCatCard>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10' data-aos="fade-left">
                       {
                            regularCar.splice(0, 4).map(single=><ShopByCatCard single={single}></ShopByCatCard>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10' data-aos="fade-left">
                       {
                            truckCar.splice(0, 4).map(single=><ShopByCatCard single={single}></ShopByCatCard>)
                        }
                       </div>
                    </TabPanel>


                </Tabs>
            </div>
            <FeatureProduct></FeatureProduct>
            <BestSeller></BestSeller>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default HomePage;