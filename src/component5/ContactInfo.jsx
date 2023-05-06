import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect  , useRef} from "react";
import { Person, FmdGood, Email, Web } from "@mui/icons-material";
import "./ContactInfo.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';

const ContactInfo = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r34obke', 'template_495wv1j', form.current, 'nVpCvsATHdQWCXhOR')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  const {ref , inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect , inView = " , inView)
    if(inView){
      animation.start({
        y:0,
        opacity:1,
        transition: {
          type: "spring",
          duration: 4,
          ease:"easeInOut"
        }
      })
    }
    if(!inView){
      animation.start({y: 40 , opacity: 0 } )
    }
  }, [inView]);


  return (
    <div ref={ref} className="contact">
      <motion.div animate={animation}>
        <Card className="contact-info" sx={{ maxWidth: 1000 }}>
          <Grid container spacing={2}>
            {/* Contact fill informations */}
            <Grid item xs={6}>
              <CardContent>
                <Typography
                  sx={{ color: "#443082" }}
                  component="div"
                  variant="h5"
                >
                  Drop a Message
                </Typography>

                <motion.form animate={animation} ref={form} onSubmit={sendEmail}>
                  <input type="text" className="field" placeholder="Name" name="user_name" />
                  <input type="text" className="field" placeholder="Email" name="user_email" />
                  <textarea className="field" placeholder="Message" name="message" />
                  <input className="btn"  type="submit"  value="Send" />
                </motion.form>
                  
              </CardContent>
            </Grid>

            <Grid className="grid2" item xs={6}>

              {/* Contact info */}
              <CardContent>

                <Typography
                  sx={{ fontWeight: "700" }}
                  component="div"
                  variant="h5"
                >
                  CONTACT INFORMATION
                </Typography>

                <motion.ul animate={animation} className="cont-list">
                  <li>
                    {" "}
                    <Person className="cont-icon" />
                    +255 7xxxxxxxxx
                  </li>
                  <li>
                    {" "}
                    <FmdGood className="cont-icon" />
                    Mikocheni B, Coca cola road,
                    <br />
                    house no.54{" "}
                  </li>
                  <li>
                    {" "}
                    <Email className="cont-icon" /> Slidedigital@gmail.com{" "}
                  </li>
                  <li>
                    {" "}
                    <Web className="cont-icon" /> www.slidedigital.co.tz{" "}
                  </li>
                </motion.ul>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
