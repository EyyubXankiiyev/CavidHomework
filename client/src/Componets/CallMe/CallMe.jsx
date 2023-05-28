import React from 'react'
import img from '../../../public/IMAGE.jpg'
import './CallMe.scss'

const CallMe = () => {
    return (
        <div id='CallMe'>
            <div className='text'>
                <h1>We Tackle The Most
                    <br />
                    Challenging Designs</h1>
                    <p>
                    The world needs innovators and problem solvers who
                    <br />
                    turn challenges into greater opportunities. We have
                    <br />
                    an insatiable curiosity about transformative trends
                    <br />
                    challenging the status.
                    </p>
                    <p>
                        012345678
                        <br />
                        Call Us Anytime
                    </p>
                    <button><p> Get Free Estimate</p></button>
            </div>
            <div className='img'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default CallMe