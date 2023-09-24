import {React,useState} from 'react'
import '../css/style.css';
import '../css/about.css';
import '../css/project.css';
import logo from '../images/IMG-20220510-WA0000.jpg';

import Header from './header';
import Footer from './footer';

export default function About()
{
    return(
        <>
            <Header/>
            <div className='M2'>
                <div className="imag">
                    <img src={logo} width={'500px'} height={'500px'}/>
                </div>
                <div className='box3'>
                <p className="txt51"> EDUCATION</p>
            <br/>
            <p className="txt5">   B.TECH CSE 75% from Vardhaman College of Engineering</p> 
            <p className="txt5">  12th TSIB  95% from Sri Chaitanaya Jr Kalasahala</p> 
            <p className="txt5">   10th SSC   95% from Century Hi-Profile School</p> 
            <br/>
             <p className="txt51">  TECHNICAL SKILLS</p> 
            <br/>
             <p className="txt5">  Programming Language -Java,Python,C</p> 
            <p className="txt5">  Databas -SQL,nodeJS</p> 
            <p className="txt5"> Os -Windows</p> 
            <br/>
            <p className="txt51"> SOFT SKILLS</p> 
            <br/>
            <p className="txt5"> 1-Team Player</p> 
             <p className="txt5"> 2-Quick Learner</p> 
            <br/>
            <p className="txt51"> HOBBIES</p> 
            <p className="txt5"> 1-Travel and explore </p> 
            <br/>
             <p className="txt51">PERSONAL DETAILS</p> 
            <p className="txt5">  D.O.B 28/02/2003</p> 
            <p className="txt5">  Father's name :Shiva Kumar</p> 
            <p className="txt5">  Address : Khammam 507002</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}