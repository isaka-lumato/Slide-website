import React, { useEffect } from "react";
import "./About.css";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
    <div ref={ref} className="about-page">
      {isTabletOrMobile && <h1>About Us</h1>}
      {isDesktopOrLaptop && <h1 className="about-underline">About Us</h1>}

      {isDesktopOrLaptop && (
        <motion.p animate={animation}>
          Slide Digital is one of the fastest growing music distributing
          companies in Africa, <br /> with our carefully selected team we push
          our artist’s music to the entire globe. We <br /> ensure our Artists’
          music is distributed to our network and get them a well-deserved{" "}
          <br /> financial reward. <br /> <br /> We are passionate about what we
          do, and we make sure that your art is reached <br /> and appreciated
          on a worldwide scale because your career is our motivation to <br />{" "}
          work hard and ensure that all our clients get the best possible
          service.
        </motion.p>
      )}
         {isTabletOrMobile && (
        <motion.p animate={animation}>
          Slide Digital is one of the fastest growing music distributing
          companies in Africa, <br /> with our carefully selected team we push
          our artist’s music to the entire globe. We <br /> ensure our Artists’
          music is distributed to our network and get them a well-deserved{" "}
          <br /> financial reward. <br /> <br /> We are passionate about what we
          do, and we make sure that your art is reached <br /> and appreciated
          on a worldwide scale because your career is our motivation to <br />{" "}
          work hard and ensure that all our clients get the best possible
          service.
        </motion.p>
      )}
    </div>
  );
};

export default About;
