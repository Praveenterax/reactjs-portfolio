import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="app__flex app__footer">
      <motion.div className="app__footer-contacts app__flex">
        <div className="app__flex">
          <a
            href="https://www.linkedin.com/in/praveendunga"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <GrLinkedinOption />
          </a>
        </div>
        <div className="app__flex">
          <a
            href="https://www.facebook.com/praveenterax"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <FaFacebookF />
          </a>
        </div>
        <div className="app__flex">
          <a
            href="https://www.instagram.com/praveenterax"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <BsInstagram />
          </a>
        </div>
      </motion.div>
      <div className="app__footer-copyrights">
        <p className="p-text">&copy; 2022 Praveen</p>
        <p className="p-text">ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
