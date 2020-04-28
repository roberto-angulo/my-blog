import React from 'react';
import Header from './Header';
import Footer from './Footer';

const WrapperApp = ( { children } ) => (
    <>
        <Header />
            { children }
        <Footer />
    </>
);

export default WrapperApp;