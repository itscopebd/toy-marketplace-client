import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCatCard from '../../components/SubCatCard/SubCatCard';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct';
import BestSeller from '../../components/BestSeller/BestSeller';

const HomePage = () => {
    // const toys = useLoaderData();
    // const [cat, setCat] = useState([]);
    // const [subCat, setSubCat] = useState(toys)

    
    return (
        <div className=''>
            <Banner></Banner>

            <FeatureProduct></FeatureProduct>
            <BestSeller></BestSeller>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default HomePage;