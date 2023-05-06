import React from "react";
import "./ServiceBlog.css";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Box, CardMedia, Typography } from "@mui/material";
import image1 from "../image/kusah.jpg";
import image3 from "../image/zaga.png";
import {Roll , Slide} from "react-reveal";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const useStyles = makeStyles({
  cardContent: {
    backgroundColor: "#2C0012",
    color: "#fff",
    zIndex: "1000",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  card: {
    textAlign: "left",
    backgroundColor: "#2C0012",
  },
  para1: {
    marginTop: "10px",
  },
});

const ServiceBlog = () => {
  const theme = useTheme();
  const classes = useStyles();

  const {ref , inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  const [active , setActive] = useState("firstCard");

  useEffect(() => {
    console.log("use effect , inView = " , inView)

    
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 4,
          ease: "easeInOut",
        },
      });
    }

    if (!inView) {
      animation.start({
        y: 40,
        opacity: 0,
      });
    }
  }, [inView])




  return (
    <div className="service-blog">
      <div className="service-content">
        <div className="content-container1">
          <Card ref={ref} className={classes.card}>
            <CardContent>
              <motion.div animate={animation}>
              <Typography sx={{ fontSize: 40, fontWeight: 600 }} variant="h2">
                NEWS
              </Typography>
              </motion.div>
              
            </CardContent>

            <CardContent className={classes.cardContent}>
              <Typography variant="P">
                Kusah's I Wish Clocks 10 Million <br />
                Streams On Boomplay, Makes A New Record | <br /> SEE DETAILS
                <motion.div  animate={animation} className="content">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/vjxq0mREBy8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </motion.div>
                <Typography variant="p">
                  Tanzania singer, performer, and songwriter Kusah has made a
                  brand <br /> new record after his 2021 hit "I Wish" amasses 10
                  Million streams on <br /> Boomplay. The new record comes a few
                  days since the award-winning <br /> singer released the music
                  video of utaniua which is track number 2 on <br /> his
                  critically acclaimed project{" "}
                  <span className="span-content">Romantic Ep</span>
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", marginTop: "45px" }}
                  image={image1}
                  alt="Kusah"
                />
                <motion.div animate={animation} className="content">
                  <Typography className={classes.para1} variant="p">
                    Kusah released I Wish on October 27th, 2021 while the video
                    was <br /> dropped the day after, and with this new record,
                    I Wish becomes <br /> the 10th most streamed single of the
                    time on Boomplay after Zuchu's <br /> Sukari which has so
                    far amassed about 12 Million streams on the platform.
                  </Typography>
                </motion.div>
                <motion.div animate={animation} className="content">
                  <Typography variant="p">
                    Recently Kusah has been one of the most listened artist in
                    Tanzania <br /> across various streaming platform, a fact
                    that can be proven by his <br /> Grammy deserving Romantic
                    EP which within a span of 3 weeks, <br /> the Ep had already
                    surpassed 1 Million streams on Boomplay.
                  </Typography>
                </motion.div>
                <motion.div animate={animation} className="content">
                  <motion.div animate={animation}>
                  <Typography variant="p">
                    Listen Kusah's song <a href=""> Here </a>
                  </Typography>
                  </motion.div>
                  
                </motion.div>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="content-container2">
          <Card sx={{backgroundColor: "#2C0012" , marginTop: "100px"}}>
            <CardContent>
               <Typography  sx={{ color:"#fff" , fontWeight: "600", textAlign : "center"}} variant="h2">
                 LATEST 
               </Typography>
            </CardContent>
          </Card>



          <Card sx={{ display: "flex" , marginTop: "10px" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={image1}
              alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
    
                <Typography
                  variant="p"
                  color="#2C0012"
                  
                >
                  In Romantic EP , Kusah
                  Proves <br/> He is The Next 
                  Bongo Fleva <br/> Biggest Music Export <br/>|
                  Read Review.
                </Typography>
              </CardContent>
            </Box>
          </Card>


          <Card sx={{ display: "flex"  , marginTop: "20px"}}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={image3}
              alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
    
                <Typography
                  variant="p"
                  color="#2C0012"
                  
                >
                  Read Zagamua Lyrics
                  By Baddest<br/> 47
                  Featuaring Mabantu 
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlog;
