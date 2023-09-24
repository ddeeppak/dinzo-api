import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../images/logo2.png';
import '../css/style.css';
import '../css/about.css';
import '../css/project.css';

export default function Header()
{
    return(
        <>
            <div className="Logo">
                <img src={logo} width={'45px'} height={'40px'}/>
                <p className='cmp'>TimeFlow</p>
            </div>
            <nav>
                <div className='navi23'>
                    <Link to='/' className='vr'>Home</Link>
                   <Link to='/about' className='vr'>About</Link>
                   <Link to='/Project' className='vr'>Project</Link>
                   <Link to='/Contact' >Contact</Link>
                </div>
            </nav>
        </>
    )
}