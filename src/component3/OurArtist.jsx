import React from "react";
import { useState } from "react";
import "./OurArtist.css";
import Data from "../data";
import { useEffect } from "react";

const OurArtist = ({ id , image , info , name  }) => {

const [data , setData] = useState([]);
console.log(data)

useEffect(() => {
  setData(Data)
})

  const [readMore , setReadMore] = useState(false);
  return (
        <div className="artist-cards">
                       <img src={image} alt={name}/>
                       <h2>{name}</h2>
                       <p> 
                          {readMore ? info : `${info.substring(0 , 200)}....`}

                          <label onClick={() => setReadMore(!readMore)}>
                              {readMore ? 'Show Less': '  Read More'}
                        </label>
                       </p>       
        </div>
  );
};

export default OurArtist;
