import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare, faPython, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faWifi, faKey } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                  <FontAwesomeIcon icon={faHtml5} size="2x"/>
                  <FontAwesomeIcon icon={faCss3} size="2x"/>
                <h3>Web Design</h3>
                <p>
                  I create UX/UI for websites and web applications with modern
                  design principles. I use the latest component libraries for
                  quick development time and powerful customization.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <FontAwesomeIcon icon={faJsSquare} size="2x" />
              <FontAwesomeIcon icon={faReact} size="2x"/>
              <FontAwesomeIcon icon={faPython} size="2x"/>
                <h3>Web Development</h3>
                <p>
                  I develop fast, lightweight progressive web apps and single
                  page applications to help organizations scale their businesses
                  and build web based tools.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <FontAwesomeIcon icon={faWifi} size="2x"/>
              <FontAwesomeIcon icon={faKey} size="2x"/>
                <h3>Managed Wi-Fi as a Service</h3>
                <p>
                  We empower business owners to take control of their Wi-Fi
                  needs and provide custom solutions for revenue
                  generation, surveillance, network design and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
