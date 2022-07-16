import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  const style = {
    cursor: "pointer",
  };
  return (
    <div className="app__social">
      <div style={style}>
        <a
          href="https://www.linkedin.com/in/praveendunga"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div style={style}>
        <a
          href="https://www.facebook.com/praveenterax"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaFacebookF />
        </a>
      </div>
      <div style={style}>
        <a
          href="https://www.instagram.com/praveenterax"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
