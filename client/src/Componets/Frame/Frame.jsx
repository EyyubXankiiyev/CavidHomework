import React from 'react'
import './Frame.scss'


const Frame = () => {
    return (
        <div id='e'>
            <div className="s">
                <h3>Interior Design</h3>
                <p>Enhancing the interior to achieve
                    <br /> a healthier environment for the
                    <br /> people using right space.</p>
                <span>View More</span>
            </div>
            <div className="s">
                <h3>Furniture</h3>
                <p>Movable articles that are used <br />
                 to make a room or building <br />
                 suitable for living or working.</p>
                <span>View More</span>
            </div>
            <div className="s">
                <h3>Flooring</h3>
                <p>Thin object any finished <br />
                     material applied over a floor <br />
                      structure to provide a walking <br />
                       surface.</p>
                <span>View More</span>
            </div>
        </div>
    )
}

export default Frame