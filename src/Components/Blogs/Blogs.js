import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div className='shadow my-5 p-4'>
                <h3 className='text-primary font-bold'>Differnece between Javascript and Node js.</h3>
                <p>Javascript is a programming language that is used to write script on the website.It can only be run in the browsers but can run in any browser engines.Basically it is used in client side.It is capable of add HTML and manipulate with the dom.Whereas node js is a javascript run time environment.It helps to run javascriot outside the browser.It is mostly used on the server side programming and development.V8 id the JS engine inside of node.js that parses and run Javascript.</p>
            </div>
            <div className='shadow my-5 p-4'>
                <h3 className='text-primary font-bold'>Differnence between SQL and NoSQL database</h3>
                <p>
                    SQL is known as Realational Database Management System.It has fixed or static or predefined schema.It is not suited for hierchical data storage.It suited best for complex quieries and vertically scalable.On the other hand NoAQL is non relational or distributed database system with dynamic schema.It suited best for hierchical data storage.For complex queries it is not good as SQL database.It is horizontally scalable.
                </p>
            </div>
            <div className='shadow my-5 p-4'>
                <h3 className='text-primary font-bold'>What JWT and how does it works?</h3>
                <p>
                    JWT(Json Web Token) is an open standard way to share security information between client and server.Each JWT contains encoded JSON objects including a set of claims.JWT is signed using a cryptographic algorithm to ensure that claims cannot be altered after the token is issued.

                    JWT differ from other web tokens in that they contain a set of claims.Claims are use to transmit information between client and server.When a user tries to access information from server a token is also sent with the request.In server first of all the token is verified either the token is valid or not.After verification if the token is valid then the requested information is sent from the server to the client.
                </p>
            </div>
        </div>
    );
};

export default Blogs;