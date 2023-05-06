import React, { useEffect } from 'react';
import {  Routes, Route , useLocation} from "react-router-dom";
import HomePage from './component/HomePage';
import AboutPage from './component2/AboutPage';
import ArtistPage from './component3/ArtistPage';
import ReleasePage from './component4/ReleasePage';
import Contact from './component5/Contact';
import BlogPage from './component6/BlogPage'
import BlogPage1 from './component7/BlogPage1';
import BlogPage2 from './component8/BlogPage2';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Data from "./data";

const AnimatedRoute = () => {
    const location = useLocation();

    const[data , setData] = useState([]);
   

    useEffect(() => {
      setData(Data)
    } , [])
    
  return (
   <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={ <HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/artist" element={<ArtistPage data={data}/>}/>
        <Route exact path="/release" element={<ReleasePage/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/news" element={<BlogPage/>}/>
        <Route exact path="/review" element={<BlogPage1/>}/>
        <Route exact path="/lyrics" element={<BlogPage2/>}/>
    </Routes>
   </AnimatePresence> 
    
   
    
  )
}

export default AnimatedRoute