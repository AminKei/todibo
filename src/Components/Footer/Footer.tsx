import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div>
            <h6>About Us</h6>
            <p className="text-justify">
              Hi our team name is Todibo Group <i>CODE WANTS TO BE SIMPLE </i> is an
              initiative to help the upcoming programmers with the code.
              Scanfcode focuses on providing the most efficient code or snippets
              as the code wants to be simple. We will help programmers build up
              concepts in different programming languages that include C, C++,
              Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
              Algorithm.
            </p>
          </div>

          <div>
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  Jockat
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  T-Shert
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Pants
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Manto</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Shose</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Acsecory</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">Menu</a>
              </li>
              <li>
                <a href="http://scanfcode.com/about/">Mens</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Womans</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">Kids</a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div>
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <a href="#">Scanfcode</a>.
            </p>
            <Button
              width={350}
              margin="1vh"
              bgColor="white"
              color="black"
              border="black"
              height={50}
            >
              {" "}
              Send Reviw{" "}
            </Button>
          </div>

          <div>
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook">
                    Collaboration is key when it comes to developer teams
                    working. Its important for team members to work together
                  </i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter">
                    Agile and Waterfall are two popular models for the
                    development cycle that developers use to get work done
                    origil
                  </i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble">
                    Swarm and destroy is a technique that involves everyone
                    working together to limit work in progress, dashet inside
                  </i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin">
                    Continuous integration is a practice that involves
                    frequently integrating code changes into a shared Factory gode
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
