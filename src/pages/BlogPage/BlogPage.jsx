import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const BlogPage = () => {
    UseTitle("Blog")
    return (
        <div className='container mx-auto my-10 md:px-0 px-5'>
            <div>
                <h4 className='font-bold text-3xl my-3'>Access Token & Refresh Token</h4>
                <li>Access tokens enable APIs to determine who is requesting what resource and whether they have the necessary permissions.</li>
                <li>Refresh tokens, on the other hand, are unable to do this directly. You'll first need to exchange a refresh token for a valid access token that you can then use to access the resources.</li>
            </div>
            <div>
                <h4 className='font-bold text-3xl my-3'>SQL and NoSQL</h4>
                <li>SQL databases are table-based.</li>
                <li>NoSQL databases are either key-value pairs, document-based.</li>
            </div>
            <div>
                <h4 className='font-bold text-3xl my-3'>Express js & Next js</h4>
                <li>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs.</li>
                <li>Nest.JS is a framework that helps build Node.JS server-side applications. The Nest framework is built using TypeScript</li>
            </div>
            <div>
                <h4 className='font-bold text-3xl my-3'>MongoDB Aggregate</h4>
                <li>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</li>
                
            </div>
        </div>
    );
};

export default BlogPage;