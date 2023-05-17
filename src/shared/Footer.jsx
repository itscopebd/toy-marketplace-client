import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#8bc34a] my-10 py-10'>
            <div className='container mx-auto'>
                <div className='flex text-white justify-between'>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>Address</h4>
                        <p>442 5th Avenue</p>
                        <p>Suite 1266</p>
                        <p>Bangladesh, Bonani 10018</p>
                        <p>01580495093</p>
                        <p>rofiq@gmail.com</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>Supports</h4>
                        <ul>

                            <li><a href='#'>Search</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contact Us</a></li>
                            <li><a href='#'>Track Your Order</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>Follow Us</h4>
                        <ul>

                            <li><a href='#'>Search</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contact Us</a></li>
                            <li><a href='#'>Track Your Order</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>SIGN UP</h4>
                        <p>Subscribe to get special offers, <br /> free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="form-control mt-5">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered focus:border-none " />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;