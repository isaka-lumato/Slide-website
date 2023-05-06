import React, {useState} from "react";
import "./ServiceBlog1.css";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Box, CardMedia, Typography } from "@mui/material";
import image1 from "../image/kusah.jpg";
import image3 from "../image/cover.jpeg";
import image4 from "../image/zaga.png";
import {Roll , Slide} from "react-reveal";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";

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
                REVIEWS
              </Typography>
              </motion.div>
              
            </CardContent>

            <CardContent className={classes.cardContent}>
              <Typography variant="P">
                In Romantic EP, Kusah Proves He Is The Next Bongo Fleva Biggest{" "}
                <br /> Music Export | Read Review
                <motion.div animate={animation} className="content">
                  <img src={image3} alt="kusah" />
                </motion.div>
                <Typography sx={{ fontWeight: "600" }} variant="h6">
                  Read The Full Review Of Romantic EP By Kusah Below:
                </Typography>
                <motion.div animate={animation} className="content">
                  <Typography variant="p">
                    With about 1.2 Million followers on Instagram, Kusah,
                    without doubt, is one of Bongo <br /> Fleva’s rising stars,
                    a fact that can be justified by the Tanzania National
                    Council Of Arts <br /> (BASATA) which nominated the Tanga
                    born and raised, in the category of the Best <br /> upcoming
                    artist at the 2022 Tanzania Music Awards.
                  </Typography>
                </motion.div>
                <motion.div animate={animation} className="content">
                  <Typography variant="P">
                    His recently released, Romantic EP <br /> is Kusah’s
                    deliberate effort to secure a front-row seat in the Bongo
                    Fleva music arena, <br /> and the 5 track EP is meant to
                    cement his position as one of Tanzania’s biggest music{" "}
                    <br /> exports. Romantic EP sees Kusah working with Femi One
                    from Kenya and Mavin’s <br />
                    Prince Johnny Drille from Nigeria and artistically the mini
                    body of work tests the <br /> boundaries of traditional R&B
                    and Bongo Fleva with some influence of Hip Hop <br />
                    and Afrobeat.
                  </Typography>
                </motion.div>
                <motion.div animate={animation} className="content">
                  <Typography variant="p">
                    The opening track titled Fire (Nakukunda) is a slow Bongo
                    Fleva tune in which <br /> Kusah’s voice beautifully
                    communicates how deep, he is in love and without a doubt,
                    <br /> this track sets the mood of the entire EP.
                  </Typography>
                </motion.div>
                <motion.div animate={animation} className="content">
                  <Typography variant="p">
                    The song owes its sugariness to the short and sweet chorus
                    that is decorated with <br /> the orchestral vocals of a
                    church choir and as you might have guessed, the song’s{" "}
                    <br /> melodies remind us of Mario’s smash hit titled Te Amo
                  </Typography>
                </motion.div>
                <iframe
                  width="560"
                  className="iframe-review"
                  height="315"
                  src="https://www.youtube.com/embed/ATI-z8-yMJU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <motion.div animate={animation} className="content">
                  <Typography variant="p">
                    <span className="utaniua">Utaniua</span> which is a Swahili
                    word for “You Will Kill Me” is a perfect song that you{" "}
                    <br /> need to send to your Ex-partner when you are on a
                    mission to annoy him or her.
                  </Typography>
                </motion.div>
                <motion.div animate={animation} className="content">
                  <Typography variant="p">
                    Kusah’s piercing tone and depressing vocals in this track
                    are a perfect <br /> manifestation of how he can make a
                    sweet love song, sound calamitous <br /> and heartbreaking
                  </Typography>
                </motion.div>
                <iframe
                  width="560"
                  height="315"
                  className="iframe-review"
                  src="https://www.youtube.com/embed/6bwEl4k9F78"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <motion.div animate={animation} className="content">
                  <Typography className={classes.para1} variant="p">
                  <span className="utaniua">Magical</span> featuring Johnny Drille differs from anything you’ve
                    heard from Kusah.<br/> The slow R&B jam is beautified by
                    distorted guitars and a well-executed vocal <br/> interplay
                    between Kusah and Johnny Drille, making the whole record
                    catchy,<br/> intimate, and infectious.
                  </Typography>
                </motion.div>
                <motion.div animate={animation} className="content">
                  <Typography variant="p">
                    While most of Bongo – Naija collaborations usually sound
                    festive and lyrically <br/> revolve around playboy fantasies,
                    Magical has time and again proven that as <br/> unpopular as it
                    is, it is, still possible for a Tanzanian and Nigerian
                    artist to do <br/> a sweet, intimate and powerful love ballad
                    without the urge of adding a <br/> disco element on it.
                  </Typography>
                </motion.div>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <motion.div animate={animation} className="content-container2">
          <Card sx={{ backgroundColor: "#2C0012", marginTop: "100px" }}>
            <CardContent>
              <Typography
                sx={{ color: "#fff", fontWeight: "600", textAlign: "center" }}
                variant="h2"
              >
                LATEST
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ display: "flex", marginTop: "10px" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={image1}
              alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="p" color="#2C0012">
                  In Romantic EP , Kusah Proves <br /> He is The Next Bongo
                  Fleva <br /> Biggest Music Export <br />| Read Review.
                </Typography>
              </CardContent>
            </Box>
          </Card>

          <Card sx={{ display: "flex", marginTop: "20px" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={image4}
              alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="p" color="#2C0012">
                  Read Zagamua Lyrics By Baddest
                  <br /> 47 Featuaring Mabantu
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceBlog;
