import React from 'react'
import './Night.scss'
import img1 from '../../../public/Frame (9).png'
import img2 from '../../../public/Frame (10).png'
import img3 from '../../../public/Frame (11).png'
import img4 from '../../../public/Frame (12).png'
import img5 from '../../../public/Frame (13).png'
import img6 from '../../../public/Frame (14).png'


const Night = () => {
    return (
        <div className='bigdiv'>
            <h1>Recent Blogs</h1>
            <p>Get updates about our latest trends and techniques used in
                <br />
                interior design project works.</p>
            <div className="meddiv">
                <div className="minidiv">
                    <img src={img1} alt="" />
                    <h2>Residential Interior Designer In New York, USA</h2>
                    <h4>November 23, 2021</h4>

                </div>
                <div className="minidiv">
                    <img src={img2} alt="" />
                    <h2>Residential Interior Designer In New York, USA</h2>
                    <h4>November 23, 2021</h4>

                </div>

                <div className="minidiv">
                    <img src={img3} alt="" />
                    <h2>Residential Interior Designer In New York, USA</h2>
                    <h4>November 23, 2021</h4>

                </div>

                <div className="minidiv">
                    <img src={img4} alt="" />
                    <h2>Residential Interior Designer In New York, USA</h2>
                    <h4>November 23, 2021</h4>

                </div>

                <div className="minidiv">
                    <img src={img5} alt="" />
                    <h2>Residential Interior Designer In New York, USA</h2>
                    <h4>November 23, 2021</h4>

                </div>

                <div className="minidiv">
                    <img src={img6} alt="" />
                    <h2>Residential Interior Designer In New York, USA</h2>
                    <h4>November 23, 2021</h4>

                </div>
            </div>
        </div>
    )
}

export default Night