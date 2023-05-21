import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCatCard from '../../components/SubCatCard/SubCatCard';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const HomePage = () => {
    const toys = useLoaderData();
    const [cat, setCat] = useState([]);
    const [subCat, setSubCat] = useState(toys)


    console.log(toys[0].SubCategory)
    return (
        <div className=''>
            <Banner></Banner>
            <div>

                <div>
                    {
                        toys.map(toy => <SubCatCard facilitis={toy.facility}></SubCatCard>)
                    }

                </div>

                <Tabs forceRenderTabPanel defaultIndex={1}>
                    <TabList>

                    </TabList>

                    <TabPanel>
                        <Tabs forceRenderTabPanel onSelect={(index, i) => console.log(index, i)}>

                            <TabList>

                                {
                                    toys.map(subCat => <Tab>{subCat.SubCategory}</Tab>)
                                }
                            </TabList>

                            <TabPanel>

                            </TabPanel>
                            <TabPanel>
                                <p>Sherina</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Kadir</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>

                        </Tabs>
                    </TabPanel>


                    <TabPanel>
                        <Tabs>

                            <TabList>


                            </TabList>


                            <TabPanel>
                                <p>Youngesdfdddddf</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Ydfddfdfffa.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Ydfdafddddddddddddddddddddddddddddd.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                        </Tabs>
                    </TabPanel>



                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>

                            </TabList>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>

                            </TabList>
                        </Tabs>
                    </TabPanel>

                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>

                            </TabList>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>

                            </TabList>
                        </Tabs>
                    </TabPanel>





                </Tabs>



                {/* <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>

                        {
                            cat[0]?.mainCategory
                                .map(cat => <Tab>{cat.catName}</Tab>)
                        }
                    </TabList>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                {subCat[0]?.subCategory.map(subcategory => <Tab>{subcategory.catId == 1 ? subcategory.subCatName : ""}</Tab>)}
                            </TabList>

                            <TabPanel>
                                <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                        </Tabs>
                    </TabPanel>


                    <TabPanel>

                        <Tabs forceRenderTabPanel>
                            <TabList>
                                {subCat[0]?.subCategory.map(subcategory => <Tab>{subcategory.catId == 2 ? subcategory.subCatName : ""}</Tab>)}
                            </TabList>

                            <TabPanel>
                                <p>Youngest child and daughterdfsdadsd</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Youngest cdfddf</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Yd</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                        </Tabs>

                    </TabPanel> */}




                {/* <TabPanel>

                        <Tabs forceRenderTabPanel>
                            <TabList>
                                {subCat[0]?.subCategory.map(subcategory => <Tab>{subcategory.catId == 2 ? subcategory.subCatName : ""}</Tab>)}
                            </TabList>

                            <TabPanel>
                                <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                            </TabPanel>
                            <TabPanel>
                                <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                            </TabPanel>
                            <TabPanel>
                                <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                            </TabPanel>
                        </Tabs>
                    </TabPanel> */}







                {/* </Tabs> */}
            </div>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default HomePage;