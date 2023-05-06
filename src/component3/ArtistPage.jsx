import React from "react";
import Navbar from "./NavbarArtist";
import HeroArtist from "./HeroArtist";
import OurArtist from "./OurArtist";
import FooterArtist from "./FooterArtist";
import { motion } from "framer-motion";
import './OurArtist.css';

const ArtistPage = ({data}) => {
  console.log(data)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 1}}
    >
      <Navbar />
      <HeroArtist />

      <section>
        <div className="title">
          <h2>Our Artist</h2>
          <div className="underline"></div>
        </div>
        <div>
          {data.map((items) => {
            return <OurArtist key={items.id} {...items}></OurArtist>
          })}
        </div>
      </section>

      {/* <OurArtist  /> */}
      <FooterArtist />
    </motion.div>
  );
};

export default ArtistPage;
