import React, {useRef} from 'react';
import Navbar from './NavbarBlog2';
import Hero from './BlogHero2';
import Service from './ServiceBlog2';
import Footer from './FooterBlog2'



const BlogPage = () => {
    const scrollRef = useRef(null);
  return (
    <div >
    <Navbar/>
    <Hero/>
    <Service/>
    <Footer/>
    </div>
  )
}

export default BlogPage