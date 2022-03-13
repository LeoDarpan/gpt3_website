import React, { useEffect } from 'react';

import { Footer, Blog, Header, Possibility, WhatGPT3, Features } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import { HiArrowUp } from "react-icons/hi";


const App = () => {
    useEffect(() => {
            const backToTop = document.querySelector('.back-to-top');

            const toggleBackToTop = () => {
                if(window.scrollY > 100){
                    backToTop.style.display = 'flex';
                    backToTop.style.opacity = "1";
                }else{
                    backToTop.style.display = 'none';
                    backToTop.style.opacity = "0";
                }
            }
            window.addEventListener('scroll', toggleBackToTop);
            backToTop.addEventListener('click', () => {
                window.scrollTo(0,0);
            })
        
    }, [])

    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            <div className="back-to-top"><HiArrowUp className='gradient__text top-icon'/></div>
        </div>
    )   
}

export default App;
