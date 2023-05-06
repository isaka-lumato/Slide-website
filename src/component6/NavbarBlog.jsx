import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../image/sd2.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fade } from 'react-reveal';

import './NavbarBlog.css';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        width: "600ms ease",
        delayChildren: 0.7,
        staggerChildren: 0.7,
        
      },
    },
    
  };
  
  const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: -100,
      opacity: 1,
    },
  };


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick2 = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    


    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <Fade top>
                  <li className='nav-item' >
                       <Link to="/"> <a href='/' >Home</a> </Link>  
                    </li>
                    <li className='nav-item' >
                     <Link to="/about"> <a href='/' >About Us</a></Link>   
                    </li>
                    <li className='nav-item' >
                       <Link to="/artist"><a href='/'>Our Artists</a> </Link> 
                    </li>
                    <li className='nav-item' >
                      <Link to="/release"> <a href='/'>New Releases</a></Link>  
                    </li>
                    <li className='nav-item'>
                     <Link to="/contact"> <a href='/'>Contact Us</a></Link>   
                    </li>

                    <li className='nav-item'>
                       {/* <Link to="/blog"><a href='/'>Blog</a></Link> */}
                  
                       <Button 
                         id="fade-button"
                         aria-controls= "fade-menu"
                         aria-haspopup="true"
                         aria-expanded={open ? 'true' : undefined}
                         onClick={handleClick2}
                         sx={{color: "#fff" , fontSize: "15px" , fontWeight: "500" , position: "relative" , top: "-4px"}}
                         
                       >
                         Blog
                       </Button>
                       <Menu  
                         id="fade-menu"
                         open={open}
                         anchorEl={anchorEl} 
                         onClose={handleClose}
                        
                       >
                        <MenuItem onClick={handleClose}> <Link to="/news"><a href='/'>News</a></Link> </MenuItem>
                        <MenuItem onClick={handleClose}> <Link to="/review"><a href='/'>Review</a></Link> </MenuItem>
                        <MenuItem onClick={handleClose}> <Link to="/Lyrics"><a href='/'>Lyrics</a></Link> </MenuItem>
                       </Menu>
            
                    
                    </li>
                  </Fade>
         
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
