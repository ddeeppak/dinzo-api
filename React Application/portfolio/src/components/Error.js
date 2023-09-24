import React from "react"

import Header from './header';
import Footer from './footer';

export default function Error(){


    return(
        <>
            <Header/>
            <div align='center' style={{marginTop:'10%'}}>
                <h1 style={{color:'red',fontSize:'50px'}}>Error 404</h1>
                <h1>Page Not Found</h1>
            </div>
            <Footer/>
        </>

    )
}