import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div>
            <div className="header-wrapper">
                <div className="main-info">
                    <Typed 
                    className="typed-text"
                    strings={["Hi I'm Scott", "I'm a full-stack developer based out of Detroit", "Thanks for visiting my portal", "I'd love to connect"]}
                    typeSpeed={30}
                    backSpeed={30}
                    loop
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Header;
