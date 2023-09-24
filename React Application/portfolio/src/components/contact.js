import React from 'react'

import Header from './header';
import Footer from './footer';

import img1 from '../images/IMG-20220510-WA0000.jpg'
import img2 from "../images/blackpad/iphone.png"
import img3 from "../images/blackpad/email.png"
import img4 from "../images/blackpad/github.png"
import img5 from "../images/blackpad/linkedin-logo.png"

export default function Contact()
{
    return(
        <>
            <Header/>
            <div className="M2">
        <div className="imag">
            <img src={img1} width="500px" height="500px"/>
        </div>
        <div className="imag2">
            <div className="box2">
                <img src={img2} width="35px" height="35px"/>
                <p style={{margin: "0px",paddingTop: "10px",paddingLeft: "20px"}}>+91-7013042189</p>
            </div>
            <div className="box2">
                <img src={img3} width="35px" height="35px"/>
                <p style={{margin: "0px",paddingTop: "10px",paddingLeft: "20px"}}>prajpathideepak4980@gmail.com</p>
            </div>
            <div className="box2">
                <img src={img4} width="35px" height="35px"/>
                <a href="https://twitter.com/deepu77sunny" style={{paddingTop: "10px",paddingLeft: "20px"}}>https://twitter.com/deepu77sunny</a>
            </div>
            <div className="box2">
                <img src={img5} width="35px" height="35px"/>
                <a href="https://www.linkedin.com/in/prajapathi-deepak-3a3a42231" style={{paddingTop: "10px",paddingLeft: "20px"}}>https://www.linkedin.com/in/prajapathi-deepak-3a3a42231</a>

            </div>
        </div>
      </div>
            <Footer/>
        </>
    )
}