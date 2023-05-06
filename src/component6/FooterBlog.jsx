import { Card, CardContent, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Logo1 from "../image/Believe_Black.png";
import Logo2 from "../image/Mtech.webp";
import Logo3 from "../image/onmobile-logo.png";
import Logo4 from "../image/Vodacom.png";
import Logo5 from "../image/Airtel-Logo.png";
import Logo6 from "../image/mack.png";
import Logo7 from "../image/eatv-logo.png";
import Logo8 from "../image/bom.png";
import Logo9 from "../image/tigo.png";
import Logo10 from "../image/mdundo.png";
import Logo from "../image/sd2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import "./FooterBlog.css";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const useStyles = makeStyles({
  Card: {
    width: "82%",
    display: "block",
    justifyContent: "space-evenly",
    marginTop: "20px",
    height: "15vh",
    transitionDuration: "0.3s",
    flexWrap: "wrap",
    marginLeft: "50px",
  },

  CardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Footer = () => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
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
  }, [inView]);

  return (
    <div ref={ref} className="footer-blog">
      <motion.div animate={animation} className="content-blog">
        <Grid container spacing={5}>
          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer" src={Logo1} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer1" src={Logo2} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer2" src={Logo3} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer3" src={Logo4} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer4" src={Logo5} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer5" src={Logo6} alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer6" src={Logo7} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer7" src={Logo8} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo1" src={Logo9} alt="" />
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2.4}>
            <Card className={classes.Card}>
              <CardContent className={classes.CardContent}>
                <img className="logo-footer9" src={Logo10} alt="" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <motion.div animate={animation} className="social">
          <div className="social-media">
            <img src={Logo} alt="" />
            <ul className="icon-list">
              <li>
                {" "}
                <a href="https://www.facebook.com/SlideDigitalTZ">
                  {" "}
                  <Facebook />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="https://instagram.com/slidedigitaltz?utm_medium=copy_link ">
                  {" "}
                  <Instagram />{" "}
                </a>
              </li>

              <li>
                {" "}
                <a href="https://twitter.com/slidedigitaltz?s=21 ">
                  <Twitter />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.youtube.com/c/SlideDigital">
                  {" "}
                  <YouTube />
                </a>
              </li>
            </ul>
          </div>

          <motion.div animate={animation} className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1582636710536!2d39.239778799999996!3d-6.750544799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4dd87b411cf5%3A0x34c7c74d35b5e97e!2sSlide%20Visuals%20LTD!5e0!3m2!1sen!2stz!4v1669961503003!5m2!1sen!2stz"
              width="600"
              className="masaki-map"
              height="450"
              style={{ border: "0px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="me"
            ></iframe>
          </motion.div>

          <WhatsAppWidget
            phoneNo="+255765813811"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Hi Team, is there any related service available ?"
            iconSize="40"
            iconColor="white"
            iconBgColor="green"
            headerIconColor="green"
            headerTxtColor="black"
            headerBgColor="green"
            headerTitle="Slide Digital"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Hi there 👋 <br />
                <br /> How can I help you?
              </>
            }
            footerBgColor="#999"
            btnBgColor="yellow"
            btnTxtColor="black"
            btnTxt="Start Chat"
          />
        </motion.div>
        <motion.div animate={animation} className="para">
          <p>Copyright @SlideDigital 2022 All right reserved</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
