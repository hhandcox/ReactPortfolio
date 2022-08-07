import React from "react";
import { Button } from 'reactstrap';
import ReactSwitch from 'react-switch';
import { useState } from "react";


const Footer = () => {

    return (
        <div className="container pb-0 footerStyle">
        <section className="mb-4">
          <a
            id="socialBtn"
            style={{backgroundColor:"#3b5998", color: "white"}}
            className="btn btn-floating m-2 btnFacebook"
            href="https://www.facebook.com/hughhandcox"
            role="button"
            data-toggle="tooltip" data-placement="top" title="Lets be friends!"
            ><i className="fab fa-facebook-f"></i
          ></a>
    
          <a
            id="socialBtn"
            style={{backgroundColor:'#55acee', color:'white'}}
            className="btn btn-secondary btn-floating m-2 btnTwitter"
            href="https://twitter.com/hhandcox"
            role="button"
            data-toggle="tooltip" data-placement="top" title="@ me on Twitter"
            ><i className="fab fa-twitter"></i
          ></a>
    
          <a
            id="socialBtn"
            style={{backgroundColor:'#dd4b39', color:'white'}}
            className="m-2 btn btnPrimary btn-floating"
            href="https://www.google.com"
            role="button"
            data-toggle="tooltip" data-placement="top" title="Need to google something?"
            ><i className="fab fa-google"></i
          ></a>
    
          <a
            id="socialBtn"
            style={{backgroundColor:'#ac2bac', color:'white'}}
            className="btn btn-primary m-2"
            href="https://www.instagram.com/hhandcox/"
            role="button"
            data-toggle="tooltip" data-placement="top" title="See what we're up to on Instagram"
            ><i className="fab fa-instagram"></i
          ></a>
    
          <a
            id="socialBtn"
            style={{backgroundColor:'0082ca', color:'white'}}
            className="m-2 btn btn-primary"
            href="https://www.linkedin.com/in/hugh-handcox-73a7371a5/"
            role="button"
            data-toggle="tooltip" data-placement="top" title="Connect on LinkedIn"
            ><i className="fab fa-linkedin-in"></i
          ></a>

          <a
            id="socialBtn"
            style={{backgroundColor:'#333333', color:'white'}}
            className="m-2 btn btn-primary"
            href="https://github.com/hhandcox"
            role="button"
            data-toggle="tooltip" data-placement="top" title="See my Github"
            ><i className="fab fa-github"></i
          ></a>
         
        </section>

      </div>
    )};

export default Footer;