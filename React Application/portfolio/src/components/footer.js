import React from "react";
import '../css/style.css';
import '../css/about.css';
import '../css/project.css';

import img1 from '../images/facebook.png'
import img2 from '../images/google.png'
import img3 from '../images/instagram.png'
import img4 from '../images/linkedin.png'
import img5 from '../images/twitter.png'
import img6 from '../images/github.png'


export default function Footer()
{
    return(
        <>
        <footer>
            <div className="medias" align='center'>
                <div style={{width:'200px',height:'30px',marginTop:'1px',marginLeft:'auto',marginRight:'auto'}}>
                    <a href="https://www.facebook.com/prajapathi77deepak">
                        <img src={img1} width={'14px'} style={{margin:'5px'}}/>
                    </a>
                    <a href="prajapathideepak4980@gmail.com">
                        <img src={img2} width={'14px'} style={{margin:'5px'}}/>
                    </a>
                    <a href="https://www.instagram.com/deep_k_77/">
                        <img src={img3} width={'14px'} style={{margin:'5px'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/prajapathi-deepak-3a3a42231">
                        <img src={img4} width={'14px'} style={{margin:'5px'}}/>
                    </a>
                    <a href="https://twitter.com/deepu77sunny">
                        <img src={img5} width={'14px'} style={{margin:'5px'}}/>
                    </a>
                    <a href="https://github.com/ddeeppak">
                        <img src={img6} width={'14px'} style={{margin:'5px'}}/>
                    </a>
                </div>
            </div>
            <div className="company" >TimeFlow Private Ltd-2023</div>

        </footer>
        </>
    )
}