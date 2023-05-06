import React, {useEffect} from "react";
import "./Team.css";
import Michael from "../image/Michael.jpg";
import Chris from "../image/CHRIS.jpg";
import Salvina from "../image/Salvina.jpg";
import Ochu from "../image/OCHU.jpg";
import Clara from "../image/Clara.jpg";
import Clatus from "../image/Gratius.jpg";
import Mussa from "../image/accountat.jpg";
import Gab from "../image/Gab.jpg";
import V from "../image/v.jpg";
import Billy from "../image/BILLY.jpg";
import Charles from "../image/Charles.jpg"
import { Instagram, Twitter, Email } from "@mui/icons-material";
import { motion , useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Team = () => {

  const {ref , inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {

    console.log("use effect , inView = " , inView);
    

    if(inView){
      animation.start({
        y:0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 5,
          ease: "easeInOut"
        }
      })
    }

    if(!inView){
      animation.start({
        y: 50,
        opacity: 0,
      })
    }

  }, [inView]);
  







  return (
    <div ref={ref} className="team">
      <motion.h1 animate={animation}>Team</motion.h1>

      <motion.div animate={animation} className="team-cards">
        <div className="cards">
          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Michael} alt="" />
            <div variants={item} className="card-content">
              <h2>Michael Mligwa</h2>
              <p>CHIEF EXECUTIVE OFFICER</p>

              <div className="card-social">

                <div className="icon">
                  <Instagram />
                </div>

                <div className="icon">
                  <Twitter />
                </div>

                <div className="icon">
                  <Email />
                </div>

              </div>

            </div>
          </motion.div>

         

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Salvina} alt="" />
            <div variants={item} className="card-content">

              <h2>SALNINA STAMBULI</h2>
              <p>PROJECT MANAGER</p>
              
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Ochu} alt="" />
            <div variants={item} className="card-content">
              <h2>OTHMAN SARIKO</h2>
              <p>CONTENT MANAGER</p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Clara} alt="" />
            <div variants={item} className="card-content">
              <h2>CLARA PREMSINGH</h2>
              <p>ARTIST RELATIONSHIP MANAGER</p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Clatus} alt="" />
            <div variants={item} className="card-content">
              <h2>PASCHAL DONATUS</h2>
              <p>CREATIVE DESIGNER</p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Mussa} alt="" />
            <div variants={item} className="card-content">
              <h2>MUSSA JOSEPH</h2>
              <p>CONTENT MANAGER</p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Gab} alt="" />
            <div className="card-content" variants={item}>
              <h2>GABRIEL FIDELIS</h2>
              <p>CONTENT MANAGER</p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={V} alt="" />
            <div className="card-content" variants={item}>
              <h2>SADRU BABLIA</h2>
              <p>ASISTANCE GRAPHIC DESIGNER</p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>


          {/* <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Billy} alt="" />
            <div className="card-content" variants={item}>
              <h2>BILLY DANIEL</h2>
              <p>SOCIAL MEDIA MANAGER</p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div> */}

          <motion.div
            className="card"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <img src={Charles} alt="" />
            <div className="card-content" variants={item}>
              <h2>CHARLES MAGANGA</h2>
              <p>SOCIAL MEDIA & BLOG MANAGER </p>
              <div className="card-social">
                <div className="icon">
                  <Instagram />
                </div>
                <div className="icon">
                  <Twitter />
                </div>
                <div className="icon">
                  <Email />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
