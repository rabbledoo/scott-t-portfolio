import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Made in Detroit</p>
                        </div>
                        <div className="d-flex">
                            <p>248-255-8389</p>
                        </div>
                        <div className="d-flex">
                            <p>scott.tarnowsky@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/rabbledoo">
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </a>
                            <a href="https://www.linkedin.com/in/scott-tarnowsky-254b4656/">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                            </a>
                            <a href="https://twitter.com/RabbleDoo">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
