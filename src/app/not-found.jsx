import React from 'react';
import '../../styles/not-found.css';

export default function Custom404() {
    if (typeof window !== 'undefined') {
        console.log("Window Test");
    }

    return (
        <div className="room">
            <div className="cuboid">
                <div className="side"></div>
                <div className="side"></div>
                <div className="side"></div>
            </div>
            <div className="oops">
                <h2>SAFIR</h2>
                <p>Can you&apos;skip this page&apos;please&#58;&#40; &#41;</p>
            </div>
            <div className="center-line">
                <div className="hole">
                    <div className="ladder-shadow"></div>
                    <div className="ladder"></div>
                </div>
                <div className="four">4</div>
                <div className="four">4</div>
                <div className="btn">
                    <a href="/">BACK TO HOME</a>
                </div>
            </div>
        </div>
    )
}