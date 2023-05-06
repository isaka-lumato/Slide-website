import React, {useRef} from 'react';
import Navbar from './NavbarBlog';
import Hero from './BlogHero';
import Service from './ServiceBlog';
import Footer from './FooterBlog'



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