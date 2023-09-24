import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';


import Header from './components/header';
import Contact from './components/contact';
import Project from './components/project';
import Page from './components/page';
import About from './components/about';
import Error from './components/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes path="/" element={<Header/>}>
        <Route index element={<Page/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
