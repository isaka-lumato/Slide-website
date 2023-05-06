import React,{useRef} from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Service from './Service';
import Releases from './Releases';
import Footer from './Footer';

import './repo.css';


const HomePage = () => {
  const scrollRef = useRef(null);
  return (
    <div className='responsive' >

       <div className='navbar'> <Navbar /> </div> 
        <Hero/>
        <Service/>
        <Releases/>
        <Footer/>

   

    </div>
   
  )
}

export default HomePage;