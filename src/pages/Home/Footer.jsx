import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <button className="btn">Get Started</button>
          </div>
          
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Raju Shrestha</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <GitHubIcon className="icons" />
              </div>
              
              
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+977 9825821351</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Raju Shrestha. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
