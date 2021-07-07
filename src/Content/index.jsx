import React from 'react'
import img from './web-developer.jpg'
const Content = () => {
    return (
        <div className="about" id="about">
            <div className="image"><img src={img} width="100%" alt="A person using computer."/></div>
            <main className="main-content">
                <ul>
                    <li>Programmer</li>
                    <li>Coder</li>
                    <li>JS</li>
                </ul>
            </main>
        </div>
    )
}

export default Content
