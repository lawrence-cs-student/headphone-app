import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Features from './features';
import TopProducts from './top-product';
import Footer from './footer';

export default function Site() {
    return (
        <div className="cover">
            <div className="nav-hero">
                <Navbar />
                <Hero />
            </div>
            <Features />
            <div className="top-footer">
                <TopProducts />
                <Footer />
            </div>
        </div>
    )
}