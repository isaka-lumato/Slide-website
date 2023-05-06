import React from "react";
import "./ServiceBlog2.css";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Box, CardMedia, Typography } from "@mui/material";
import image1 from "../image/kusah.jpg";
import image3 from "../image/zaga.png";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  cardContent: {
    backgroundColor: "#2C0012",
    color: "#fff",
    zIndex: "1000",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  card: {
    textAlign: "left",
    backgroundColor: "#2C0012",
    width: "80%"
  },
  para1: {
    marginTop: "10px",
  },
});

const ServiceBlog = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className="service-blog">
      <div className="service-content">
        <div className="content-container1">
          <Card className={classes.card}>
            <CardContent>
              <Typography sx={{ fontSize: 40, fontWeight: 600 }} variant="h2">
                LYRICS
              </Typography>
            </CardContent>

            <CardContent className={classes.cardContent}>
              <Typography sx={{ fontWeight: 700 }} variant="p">
                Read Zagamua Lyrics By Baddest 47 Featuring Mabantu
                <div className="content">
                  <Typography variant="p">
                    Read and enjoy Zagamua Lyrics by Baddest 47 featuring <br />
                    Mabantu. The song has been a street anthem and marks another{" "}
                    <br />
                    time Baddest 47 has released a hit song.
                  </Typography>
                </div>
                <div className="content">
                  <img src={image3} alt="kusah" />
                </div>
                <div className="content">
                  <Typography variant="p">
                    Nasikia unavyozagamua hivi nawe unasikia navyoizagamua{" "}
                    <br />
                    Nasikia unavyozagamua hivi nawe unasikia navyoizagamua{" "}
                    <br />
                    Nasikia unaruka matuta hivi nami umeskia natembea na mafuta{" "}
                    <br />
                    (umeskia)
                  </Typography>
                </div>
                <div className="content">
                  <Typography variant="P">
                    Kanywa bbia za makuruta kachezeshwa mashuu kashikishwa ukuta{" "}
                    <br />
                    (umeskia) Hivi hujaskia kwamba nna mihela au umeskia <br />
                    umekausha imekukera (umeskia) Ka unapiga piga kisela demu{" "}
                    <br />
                    mwenyewe mbovu anabebwa na camera (umeskia) Hivi hujaskia ka{" "}
                    <br />
                    si mapopo hatuchaguagi sehemu ya kurukaga makopo (umeskia){" "}
                    <br />
                    Ujana changamoto yani nalewa chini kunawaka moto (umeskia){" "}
                    <br />
                  </Typography>
                </div>
                <div className="content">
                  <Typography variant="p">
                    Nasikia unavyozagamua hivi nawe unasikia navyoizagamua{" "}
                    <br />
                    Nasikia unavyozagamua hivi nawe unasikia navyoizagamua{" "}
                    <br />
                    Unacheka nna haujachekeshwa upendo wa kweli upo brother{" "}
                    <br />
                    mchawi pesa tu (umeskia) Bila kwikwi bila hata presha <br />
                    shemeji analika tatizo lako wenge (kumaanisha nini) Upo{" "}
                    <br />
                    nyonyo niko mbupu nilikosa uwezo ila chupuchupu Eti chips{" "}
                    <br />
                    ndogo kuku nusu malaya mnajua kukatika au meme wa luku{" "}
                    <br />
                  </Typography>
                </div>
                <div className="content">
                  <Typography variant="p">
                    Usitie cchumvi kwenye sugar maana hakuna baridi piga stori{" "}
                    <br />
                    vizuri na jirani (umeskia) Mwaga pesa kama njugu man hakuna{" "}
                    <br />
                    kibamia inategemea una pesa gani (umeskia) Wadangaji eeeh mi{" "}
                    <br />
                    ndo danga lenu, mkiweza nichune me ndo buzi lenu Masela eeeh{" "}
                    <br />
                    mi ndo mchizi wenu mwagilia moyo bwana siyo shida zenu{" "}
                    <br />
                  </Typography>
                </div>
                <div className="content">
                  <Typography variant="p">
                    Nasikia unavyozagamua hivi nawe unasikia navyoizagamua <br/>
                    Nasikia unavyozagamua hivi nawe unasikia navyoizagamua <br/>
                  </Typography>
                </div>
              
              
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="content-container2">
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
              image={image3}
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
        </div>
      </div>
    </div>
  );
};

export default ServiceBlog;
