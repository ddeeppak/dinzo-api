import '../css/style.css';
import '../css/about.css';
import '../css/project.css';

import React from 'react'
import Header from './header';
import Footer from './footer';

import img1 from '../images/IMG-20220510-WA0000.jpg'

export default function Page()
{
    return(
        <>
            <Header/>
            <div className='M2'>
                <div className='imag'>
                    <img src={img1} width={'500px'} height={'500px'} />
                </div>
                <div className='imag2'>
                    <p className="txt3">Hi,I am Prajapathi Deepak</p>
                    <p className="txt4">I am a Full stack developer,currently studying</p>
                    <p className="txt4"> B.Tech(CSE) Final year.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}