import React from "react";
import NavbarAbout from "./NavbarAbout";
import HeroAbout from "./HeroAbout";
import About from "./About";
import Team from "./Team";
import Footer from "./FooterAbout";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 1}}
    >
      <NavbarAbout />
      <HeroAbout />
      <About />
      <Team />
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
