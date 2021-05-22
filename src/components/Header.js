import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div>
            <div className="header-wrapper">
                <div className="main-info">
                    <Typed 
                    className="typed-text"
                    strings={["Whatever you do,", "or dream you can", "begin it.", "Boldness has genius and power and magic in it.","-Johann Wolfgang von Goethe"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                    <a href="#" className="btn-main-offer">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header
