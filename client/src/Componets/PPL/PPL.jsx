import React from 'react'
import './PPL.scss'
import FRAME from '../../../public/Frame.png'

const PPL = () => {
    return (
        <div id='main'>
            <div className="PPL">
                <h1>What the People Thinks
                    <br />
                    About Interno
                </h1>
                <div className="bigA">
                    <div className="a">
                        <h2>Lisa Clairton</h2>
                        <p>New York, USA</p>
                        <p>We selected Interno interior
                                <br />
                            because of rigorous design
                                <br />    
                            background & education.</p>
                    </div>
                    <div className="a">
                        <h2>Lisa Clairton</h2>
                        <p>New York, USA</p>
                        <p>We selected Interno interior
                                <br />
                            because of rigorous design
                                <br />    
                            background & education.</p>
                    </div>
                    <div className="a">
                        <h2>Lisa Clairton</h2>
                        <p>New York, USA</p>
                        <p>We selected Interno interior
                                <br />
                            because of rigorous design
                                <br />    
                            background & education.</p>
                    </div>
                </div>

            </div>
            <><img src={FRAME} alt="" />
            
            </>
        </div>
       
    )
}

export default PPL