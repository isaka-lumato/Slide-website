import { Card, CardContent, duration, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./Service.css";
import { Roll, Slide } from "react-reveal";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    padding: "0px 5px",
  },

  Card: {
    width: "90%",
    display: "block",
    justifyContent: "space-evenly",
    height: "10vw",
    transitionDuration: "0.3s",
    flexWrap: "wrap",
    marginLeft: "30px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#450032",
      color: "#fff",
      borderRadius: "20px",
    },
  },
  cont: {
    color: "#450032",
    textAlign: "center",
    objectFit: "contain",
    width: "100%",
    position: "relative",
    top: "10px",
    "&:hover": {
      color: "#fff",
      textAlign: "center",
    },
  },
  contp: {
    color: "#450032",
    textAlign: "center",
    objectFit: "contain",
    width: "100%",
    position: "relative",
    top: "30px",
    "&:hover": {
      color: "#fff",
      textAlign: "center",
    },
  }
});

const Service = () => {
  // Responsive concepts
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  const [active, setActive] = useState("firstCard");

  useEffect(() => {
    console.log("use effect , inView = ", inView);

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
    <div className="service">
      {isDesktopOrLaptop && (
        <div className="container">
          <h2>Our Service</h2>
        </div>
      )}

      {isTabletOrMobile && (
        <div className="container">
          <h2>Our Service</h2>
        </div>
      )}

      <Grid ref={ref} container spacing={5}>
        {isDesktopOrLaptop && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("firstCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Copyright Protection
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isTabletOrMobile && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("firstCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Copyright Protection
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isDesktopOrLaptop && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("secondCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Youtube Monetization
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isTabletOrMobile && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("secondCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Youtube Monetization
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isDesktopOrLaptop && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("thirdCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Digital Distribution
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isTabletOrMobile && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("thirdCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Digital Distribution
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isDesktopOrLaptop && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("forthCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.contp}
                  >
                    Promotions
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isTabletOrMobile && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("forthCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Promotions
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isDesktopOrLaptop && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("firthCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Social Media Management & Audience
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}

        {isTabletOrMobile && (
          <Grid className={classes.root} xs={2.4}>
            <motion.div animate={animation}>
              <Card
                onClick={() => setActive("firthCard")}
                className={classes.Card}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    align="center"
                    color="#450032"
                    variant="h4"
                    className={classes.cont}
                  >
                    Social Media Management & Audience
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        )}
      </Grid>

      <div ref={ref}>
        {active === "firstCard" && (
          <div className="img-col">
            {" "}
            <Roll left>
              {" "}
              <p>
                {" "}
                We maximize revenue and ensure our <br /> clients' content is
                constantly <br /> protected when their content is used <br />{" "}
                without authorization.
              </p>{" "}
            </Roll>{" "}
          </div>
        )}

        {active === "secondCard" && (
          <div className="img-col1">
            {" "}
            <Slide left>
              {" "}
              <p>
                We help individual artists, labels, media houses <br /> and
                bloggers who are unable to monetize on Youtube <br /> and other
                music platforms through their shared content <br /> and ensuring
                that your platform keeps on growing.
              </p>
            </Slide>{" "}
          </div>
        )}
        {active === "thirdCard" && (
          <div className="img-col2">
            {" "}
            <Roll left>
              {" "}
              <p>
                We help our artists and labels with distribution of <br /> their
                music to the globe and ensure that their music is protected.{" "}
                <br /> Other than music we also partner with media houses <br />{" "}
                and bloggers by pushing their content in streaming platforms as
                well.
              </p>
            </Roll>{" "}
          </div>
        )}
        {active === "forthCard" && (
          <div className="img-col3">
            {" "}
            <Roll left>
              {" "}
              <p>
                {" "}
                Other than Distributing content <br /> for our clients, we are
                also responsible <br /> for promoting their content on the
                digital <br /> space so as they get the deserved exposure
                worldwide.{" "}
              </p>{" "}
            </Roll>{" "}
          </div>
        )}
        {active === "firthCard" && (
          <div className="img-col4">
            {" "}
            <Slide left>
              {" "}
              <p>
                We create and assemble content for posting to your social media
                profiles, <br /> making sure you are insync with your fans and
                followers, <br /> maintaining a good interaction and connection
                through social media. <br /> We will determine and suggest the
                types (categories) of posts to cater to individual artists such
                as company promotional, educational, or informative. We use
                social media monitoring programs to listen to chats about brands
                and track new, existing customers feedback and competitors.{" "}
              </p>{" "}
            </Slide>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
