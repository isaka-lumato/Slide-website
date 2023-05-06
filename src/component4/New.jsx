import React , {useEffect} from 'react';
import Masta from '../image/Masta.jpg';
import Art from "../image/Art.jpg";
import Hindi from "../image/Hindi.jpg";
import Hamadai from "../image/Hamadai.jpg";
import Wish from "../image/Wish.jpg";
import Kind from "../image/kind.png";
import Jay from "../image/cha.jpeg";
import Care from "../image/care.jpg";
import { motion  , useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./New.css";

const New = () => {

    const {ref , inView} = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
    
    
    
      useEffect(() => {
        console.log("use effect , inView = " , inView)
        if(inView){
          animation.start({
            y:0,
            transition: {
              type: "spring",
              duration: 5,
              ease:"easeInOut"
            }
          })
        }
        if(!inView){
          animation.start({y: "20vh" , scale: 1 } )
        }
      }, [inView]);



  return (
    <div ref={ref} className='new'>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Masta} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Art} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Hindi} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Hamadai} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Kind} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Wish} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Masta} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Care} alt=""/>
         </motion.div>

         <motion.div animate={animation} className='new-content'>
             <img className='image' src={Jay} alt=""/>
         </motion.div>

    </div>
  )
}

export default New;