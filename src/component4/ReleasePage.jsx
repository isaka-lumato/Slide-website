import React from "react";
import NavbarRelease from "./NavbarRelease";
import HeroRelease from "./HeroRelease";
import New from "./New";
import FooterNew from "./FooterNew";
import { motion } from "framer-motion";

const ReleasePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 1}}
      className = "responsive"
    >
      <NavbarRelease />
      <HeroRelease />
      <New />
      <FooterNew />
    </motion.div>
  );
};

export default ReleasePage;
