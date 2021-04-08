import React from 'react'
import img from './web-developer.jpg'
const Content = () => {
    return (
        <div className="about" id="about">
            <img src={img} width="400em" alt="" className="image"/>
            <main className="main-content">
                <ul>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        React
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Content
