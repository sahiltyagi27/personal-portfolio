import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';

const linkGenerator = (data) => {
    return (
        data.map((element) => {
            return (
                <li>
                    <a href={element.url} rel="noreferrer">{element.text}</a>
                </li>
            )
        })
    )
}

const socialGenerator = (data) => {
    return (
        data.map((element) => {
            return (
                <li>
                    <a href={element.url} target="_blank" rel="noreferrer">{element.icon}</a>
                </li>
            )
        })
    )
}

const Navbar = () => {
    const [showLinks, setshowLinks] = useState(false)
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = `0px`
        }
    }, [showLinks])
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    {/* <img src="" alt="logo" /> */}
                    <button className="nav-toggle" onClick={() => { setshowLinks(!showLinks) }}><FaBars /></button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {linkGenerator(links)}
                    </ul>
                </div>
                <ul className="social-icons">
                    {socialGenerator(social)}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;