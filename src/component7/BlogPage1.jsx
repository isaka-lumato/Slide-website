import React, {useRef} from 'react';
import Navbar from './NavbarBlog1';
import Hero from './BlogHero1';
import Service from './ServiceBlog1';
import Footer from './FooterBlog1'



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