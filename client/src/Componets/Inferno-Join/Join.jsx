import React from 'react'
import './Join.scss'

const Join = () => {
    return (
        <div className="div">
            <div className='main'>
                <div className="first">
                    <img src={logo} alt="" />
                    <h1>We are the leading architect and interior design firm in the world.</h1>
                </div>
                <div className="boxes">
                    <ul>
                        <li className='smth'>Pages</li>
                        <li>Style Guide</li>
                        <li>Protected</li>
                        <li>Licenses</li>
                        <li>Changelog</li>
                        <li>404</li>
                    </ul>
                </div>
                <div className="boxes">
                    <ul>
                        <li className='smth'>Explore</li>
                        <li>About Us</li>
                        <li>Recent Blog</li>
                        <li>Pricing Plan</li>
                        <li>Our Projects</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="second">
                    <ul>
                        <li className='smth2'>Contact</li>
                        <li>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</li>
                        <li>contact@interno.com</li>
                        <li>(123) 456 - 7890</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Join