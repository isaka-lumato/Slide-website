import React, { useEffect, useState } from "react";
import "./Releases.css";
import Artist from "../image/artist.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data1 from "../data1";

const Releases = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  const animationImage = useAnimation()

  useEffect(() => {
    console.log("use effect , inView = ", inView);
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 4,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);


  useEffect(() => {
    console.log("use effect , inView = ", inView);

    if (inView) {
      animationImage.start({
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
      animationImage.start({
        y: 40,
        opacity: 0,
      });
    }
  }, [inView]);




  return (
    <>
      <div ref={ref} className="releases">
        <motion.div animate={animation} className="content-img">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/S4mcZTt2EY4"
            title="Slide Digital Youtube Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </motion.div>


        <div className="section-center">
        {/* {people.map((person, personIndex) => {
          const { id, image, name,  } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
             
            </article>
          );
        })} */}
        <motion.img  animate={animationImage} className="person-img" src={Artist} alt="artist"/>
 
      </div>
      </div>

    </>
  );
};

export default Releases;
