import React from "react";
import NavbarContact from "./NavbarContact";
import HeroContact from "./HeroContact";
import ContactInfo from "./ContactInfo";
import FooterContact from "./FooterContact";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 1}}
    >
      <NavbarContact />
      <HeroContact />
      <ContactInfo />
      <FooterContact />
    </motion.div>
  );
};

export default Contact;
